---
title: "Bevy Animations: The Basics"
description: "Let's discover together the basics of the bevy animation crate and implement our first 3D model animations."
image: "launching.jpg"
date: "2024-03-07"
---

## Prerequisites

- Blender `3.6.5`
- Bevy `0.12.1` and main branch (before `0.13.0`)
- [Mixamo animations](https://www.mixamo.com/#/?page=1&type=Motion%2CMotionPack)

- RFC: https://github.com/bevyengine/rfcs/pull/51
- Animation module: https://github.com/bevyengine/bevy/tree/main/crates/bevy_animation

I recently started to explore animations with Bevy, and published two videos on my Youtube channel
where I go through the process of animating a 3D model. The last one, [Smooth animations with Bevy](https://youtu.be/P6ZXwskKKPE?feature=shared)
covers everything to apply different animations on a 3D character. While I like to make videos, I
also enjoy writting blog posts to share my discoveries.

## Animation Basics

How animations work under the hood? Although we can directly jump into the development of animations
with the [Bevy animation crate](https://github.com/bevyengine/bevy/tree/main/crates/bevy_animation),
we would miss some basics about the topic. There's always a bit more to explore, to learn about,
offering more opportunities to leverage later on the knowledge. My plan will be to develop a tool
to help me visualize and apply animations, attach specific events (such as controllers)
and even configure collider on 3D models in Bevy. So this a good occasion to learn and share!

If you have a deep understanding of animations, rigging, and working with 3D models then you can
skip this section and go to the next one: "Your first animation with Bevy".

### X-ray of a 3D character

> 🎚️🎵 To get in the mood, I recommend `Imagine Dragons - Bones` for this chapter.

Before learning how to animate a character in Bevy, let's take a little tour of the different parts
of a 3D character imported from Mixamo to Blender. The modeling and rigging steps are already done
for us, this way we can just focus on animating the character to change its position, rotation,
or even its shape over time.

<figure>
    <img class="mx-auto" src="/images/blog/bevy-animation-the-basics/blender-scene-collection.jpg" alt="Blender file hierarchy of a 3D character with an armature and animations.">
    <figcaption>Blender file hierarchy of a 3D character with an armature and animations</figcaption>
</figure>

As we can see in the file hierarchy of the Blender scene, we have these different parts composing
our 3D character:

- Actions: A list of different animations coming from Mixamo, that I prepared with the `Nonlinear
Animation` tool
- Armatures: Here we only have one armature used for skeletal animation.
  - Bones: The armature is composed of different bones defining the skeleton of our
    character. It only shows the parent categories but if we open `mixamorig:spine` we will see an
    arborescence of bones for the neck, head, and shoulders.
- Meshes: The objects containing polygonal faces, edges and vertices. In our case it is the skin of
our character. These are skinned-meshes because they have associated bone weights.

<figure>
    <img class="mx-auto" src="/images/blog/bevy-animation-the-basics/blender-character-bones.jpg" alt="X-Ray view of our character bones">
    <figcaption>X-Ray view of our character bones</figcaption>
</figure>

If we activate the x-ray view of the character, we can better understand the armature of the
character. We can see the bones, their joints, the chains (e.g an arm is a chain of bones).
It's inspired from real world skeletons.

The process of applying an armature to a model is called *Skinning*. It will allow you to transform
and deform the meshes with the bones. By downloading the animation from Mixamo we skipped all
the rigging process consisting of adding controls to the character to animate it. I just introduced
few concepts but you can learn much more on the
[Blender documentation](https://docs.blender.org/manual/en/latest/animation/index.html) about bone
constraints, inverse kinematics, posing, ...

So we have the skinned-meshes, the skeleton... but how do we animate our 3D character? With
keyframes!

### Keyframes

A keyframe holds the value of a property at a specific point in time. This value can describe
different information such as:

- Rotation
- Scale
- Translation

<figure>
    <img class="mx-auto" src="/images/blog/bevy-animation-the-basics/bevy-animation-keyframes.gif" alt="Keyframes for the idle animation">
    <figcaption>Keyframes for the idle animation</figcaption>
</figure>

Let's take a look at the [source code](https://github.com/bevyengine/bevy/blob/main/crates/bevy_animation/src/lib.rs)
of the animation crate, this is how `Keyframes` are defined:

```rust
#[derive(Reflect, Clone, Debug)]
pub enum Keyframes {
    /// Keyframes for rotation.
    Rotation(Vec<Quat>),
    /// Keyframes for translation.
    Translation(Vec<Vec3>),
    /// Keyframes for scale.
    Scale(Vec<Vec3>),
    /// Keyframes for morph target weights.
    ///
    /// Note that in `.0`, each contiguous `target_count` values is a single
    /// keyframe representing the weight values at given keyframe.
    ///
    /// This follows the [glTF design].
    ///
    /// [glTF design]:
    Weights(Vec<f32>),
}
```

We have two categories of keyframe both described in the glTF specifications [^gltf-specifications-animations] :

[^gltf-specifications-animations]: [glTF Specifications](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#animations)

- articulated and skinned animation,
- morph targets (glTF 2.0)

We will not learn about the latter in this article, but the Bevy 0.11 release note
[^bevy-0.11-morph-targets] contains great examples and explanations about morph targets. In short
you can use it whenever you need detailed movements such as facial expressions or animating clothes.

[^bevy-0.11-morph-targets]: Bevy 0.11, release note: [Morph Targets](https://bevyengine.org/news/bevy-0-11/#morph-targets).


### Interpolation

Keyframe interpolation allows us to smoothly transition from one keyframe to the next one. Blender
computes the properties' values between these keyframes. This way it *fills* the gap between two
frames in such way we don't have to define all the different properties (rotation, scale, ...) to
achieve a smooth movement. Depending on the engine, keyframe interpolation is represented by
*animation curves*, *F-Curves* (Blender) or *Animation Curves* (Bevy) [^bevy-animation-curve-note] .

<figure>
    <img class="mx-auto" src="/images/blog/bevy-animation-the-basics/blender-animation-curves.gif" alt="A selected F-Curve with an Active Keyframe">
    <figcaption>Blender graph editor: a selected F-Curve with an Active Keyframe</figcaption>
</figure>

[^bevy-animation-curve-note]: At the moment I'm writing this, Bevy 0.13.0 is not yet released but
the [implementation](https://github.com/bevyengine/bevy/pull/11989) of `AnimationGraph` has been*
merged to the `main` branch and comes with the definition of the `AnimationCurves` type for the
`AnimatioClip` structure.



### glTF

Just a quick note before we

- Models and scenes: https://bevy-cheatbook.github.io/3d/gltf.html


## Your first animation with Bevy

### Import a Mixamo model

### Export to GLTF

### Let's animate in Bevy

### Next step

- Future improvements (2 phases): https://github.com/bevyengine/bevy/pull/11707

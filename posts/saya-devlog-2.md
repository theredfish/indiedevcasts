---
title: "Saya - Devlog #2: Voxel vegetation and Godot"
description: "In this second devlog, I provide updates on the new voxel vegetation, the switch to Godot, and information about my company."
image: "saya-devlog-2-cover.png"
date: "2024-08-14"
---

> *Saya* is a game featuring voxel graphics where you play a samurai summoned to rid the worlds of
darkness. As you defeat enemies, you gradually accumulate evil essence with the help of your saya,
which you can then utilize to enhance your abilities.

## Game updates

### Finished version of the bridge

The bridge is here! Finally! It has become an inside joke with the community because I spent so much time modeling it.
The ropes were particularly tedious to model so they appear naturally affected by gravity or stretched to appropriate places.

<img src="/images/blog/saya-devlog-2/final-bridge.png" class="mx-auto max-size-xl" alt="A bridge in a voxel style with ropes from each side and japanese stone lanterns at the beginning and the end of the bridge."/>

### New voxel vegetation

I worked on bushes, reeds and winter horsetails. This vegetation will be present in the first level and sets the initial tone for the artistic direction. It's a mix of organic and stylized vegetations to bring more depth to the game.

<img src="/images/blog/saya-devlog-2/vegetation.png" class="mx-auto max-size-xl" alt="Voxel vegetation with small bushes, some reeds and winter horsetails represented."/>

I recently published a [timelapse of an organic-looking tree](https://youtu.be/s_WjR8kd1pc?feature=shared) on my YoutTube channel. It can give you a glimpse of the art style I'm aiming for. Just note that this particular tree will not be added to Saya. I will need many trees, so this type would be too heavy to render (too detailed, too many voxels).

### Putting it all together

Now let's put it all together, and you get the first vibes of the art direction for Saya. I'm really happy with the result and can now expand the universe. I will stick to this style while finding a compromise between performance and organic results. The more voxels I add to the game, the more meshes it generates, and the more triangles the GPU has to compute.

<img src="/images/blog/saya-devlog-2/saya-devlog-2-cover.png" class="mx-auto max-size-xl" alt="All my voxel assets: torii gate, a pond with the vegetation under the bridge, japanese stone lanterns, and the samurai character on the bridge."/>

Voxel art provides a very unique style but comes with its own challenges. Speaking of which, it's not easy to animate
either!

### Samurai rigging

I tried different ways to import my voxel model into Blender. I still need to explore to find the best way to clean duplicated vertices and unnecessary edges without breaking the UV-mapping of the colors. It's a long learning curve for me. Once the model is cleaned and the joints are correctly set for animation purposes, I'll be able to start animating my character.

Here is a rough result after I created the armature and did some weight painting (so we can deform the meshes based on
the bones):

<video muted autoplay loop class="mx-auto">
    <source src="/images/blog/saya-devlog-2/samurai-rig.webm" type="video/webm">
    Your browser does not support webm videos.
</video>

## Gamedev nightmare

### Streams on pause

Gamedev is a very long journey, even more so when your hardware doesn't cooperate. My laptop started to slow down, I'm running out of storage, my CPU (Intel i5, 9th gen) hits 100% most of the time, and my GPU (NVIDIA GeForce GTX 1660 Ti) is so old that most recent games can't run at all - unless you enjoy 10 FPS. Now imagine streaming to YouTube and Twitch while compiling Rust, and running Blender with MagicaVoxel. **It's just too much for my good old laptop** - and I haven't even mentioned all the weird audio artifacts I've been experiencing.

For this reason, **I've decided to put streams on pause**, so I can reduce the workload and still make progress on my game. I now need to generate some extra revenue to fund a new PC that will support my game development activity.

### From Bevy to Godot

You can always find the positive in difficult experiences. Since it was nearly impossible to get a short feedback loop with Bevy due to the compile times, **I decided to move to Godot**. And guess what? It's been a blast! The UI is really great, everything is easy to use - minus maybe the lack of sync between the scene and the in-game view. And most of all, it takes milliseconds to reflect my code changes in my game. It's incredibly fast! This is a big advantage for an indie developer. We don't have much time, and it's even more true when you have a day job and tiny humans to care for.

Will I miss Rust and Bevy? Definitely. But I'll keep working on side projects, mostly for procedural generation, so I can still experiment a bit with the engine. I realized **Bevy isn't suitable for my needs of releasing a 3D game**. It lacks support for 3D animations, and I can't afford to spend 2 to 5 minutes on compile times between two lines of code. And if you're wondering, yes, I configured everything to get fast incremental builds. Unfortunately, my laptop is just too old for Rust and Bevy. Which is sad when you know that Rust offers great performance... for the end user but not for the developer. At least not for those with mid-range computers, you wretch!

The good news? I love Godot even if it's not perfect, and [godot-rust](https://godot-rust.github.io/) is a thing! I haven't tried it yet, as I don't want to lose sight of my current goals, but I definitely plan to give it a shot.

## Indiedevcasts is now a business (again)

One year ago, I closed the company when I started my new day job. Running a company costs money, unless you start over (at least where I live). To simplify, it resets the thresholds for revenues and taxes in a way that's advantageous for small new businesses. However, you have to wait a certain amount of time before you can **reopen a business** as self-employed. **Which I did after one year**!

This means I now have a better way to protect my work and brand name, and I can create new ways to generate revenue to fund my gamedev activity. Which is great when you have a new PC to build! Right now **I'm cooking** something, and I'll see if it can create a revenue stream. More on this soon! By the way, you should join our [Discord server](https://discord.gg/AvfZTmw9YM) if you want to get the news in advance. It's the first place where I share updates!

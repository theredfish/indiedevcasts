---
title: "Saya - Devlog #1: Genesis"
description: "This is the first devlog for Saya, a game where you play a samurai slashing bad guys."
image: "saya-devlog-1-cover.png"
date: "2024-05-02"
---

Hey everyone! This is Julian from Indiedevcast, and I'm excited to present the first devlog for my game, *Saya*. It's a 3D project I'm developing with [Bevy](https://bevyengine.org/)! I'll be keeping you updated with new devlogs as I make significant progress, so you can follow along on my indie gamedev journey.

Don't forget to subscribe to my [YouTube channel](https://www.youtube.com/@indiedevcasts) and hit the notification bell. That way, you'll be notified when I go live for gamedev sessions. I usually host 1 or 2 streams each week!

## About the game

I began working on this project in October 2023, and it's likely the only game where I've been able to sustain a consistent development pace. After numerous attempts, I've finally discovered a game type that allows me to effectively engage with my community, providing regular updates while juggling a day job.

> *Saya* is a game featuring voxel graphics where you play a samurai summoned to rid the worlds of
darkness. As you defeat enemies, you gradually accumulate evil essence with the help of your saya,
which you can then utilize to enhance your abilities.

## Voxel Art

### Samurai: Character Design

I'm particularly fond of the cubic aesthetic achievable with voxel art. My initial focus was on creating the character. Although it's not the final version yet, I believe I've captured the essence of the design. However, I anticipate encountering some challenges when importing the character into Blender for rigging and animation. Voxel art imposes limitations, especially when avoiding overlapping blocks. But I'm satisfied with the overall shape and style I've achieved.

<video muted autoplay loop class="mx-auto max-size-xl">
    <source src="/images/blog/saya-devlog-1/samurai_turntable.webm" type="video/webm">
    Your browser does not support webm videos.
</video>

Since this is my first character, I still have much to learn. The game will showcase several worlds, each with its unique set of enemies, which will undoubtedly be where the majority of the work lies, particularly in terms of animation and A.I efforts. Here are some enemies I have in mind:

- Samurai frogs
- Samurai skeletons
- Samurai robots
- Slimes (different types: lava, water, ...)
- Giant snakes

In my opinion creating numerous distinct characters is a great approach to breathe life into *Saya*, offering unique mechanics and behaviors that enrich the overall experience. However, I'll have to be careful in adding the appropriate balance of NPCs and bosses to avoid spending an eternity on animating them. Any elements that can be reused from one character to another will save me valuable time.

### Environment props

I began by designing the initial elements of the **central / main world**. Here, an old man smoking a pipe will give you the quest. Naturally, I needed a Torii gate to connect the worlds together, allowing you to embark on your journey of purification through various dungeons.


<video muted autoplay loop class="mx-auto max-size-xl">
    <source src="/images/blog/saya-devlog-1/torii_turntable.webm" type="video/webm">
    Your browser does not support webm videos.
</video>

Next, I wanted to experiment with a dark ambiance and a low lighting setup. Lanterns are particularly effective for this type of scene, so I added some, along with an unfinished bridge.

<img src="/images/blog/saya-devlog-1/lanterns_torii_bridge.png" class="mx-auto max-size-xl" alt="Lanterns with the bridge and the Torii gate in a low lighting setup."/>

## Development with Bevy

### Animations


I devoted a significant amount of time to experimenting with animations for a 3D character in Bevy. I managed to create smooth transitions between the following animations:

- Run
- Withdraw
- Attack
- Sheathe
- Idle

I've also produced a [video on YouTube](https://youtu.be/P6ZXwskKKPE?feature=shared) detailing the process of animating 3D characters with Bevy and delivered a [talk at the third Bevy Meetup](https://youtu.be/MLhIeId6ctk?feature=shared). If you're curious about the technical aspects behind these animations, these resources are for you! Additionally, I'm in the process of writing a blog post on this topic, which should be published soon!

Since rigging and animating a character can be time-consuming, and considering my need to improve in this area, I opted to use Mixamo to obtain a 3D model with pre-made animations. It's an excellent method for preparing the code logic for when my own characters are ready.

<img src="/images/blog/saya-devlog-1/saya_animations_smooth.gif" alt="A gif of smooth transitions between character animations."/>

### Input Manager

Early in the development process, I aimed to enable playtesting with various controllers, including mouse/keyboard, gamepad, and even the Steam Deck. Handling keyboard inputs alone can be challenging, considering the multitude of possible layouts (such as qwerty vs. azerty). Thanks to the [Leafwing Input Manager](https://github.com/Leafwing-Studios/leafwing-input-manager), I was able to save a significant amount of time implementing such a system.

I also created a [video](https://youtu.be/b26TtcmxGbI?feature=shared) demonstrating this feature, and at the [26:00](https://youtu.be/b26TtcmxGbI?feature=shared&t=1560) timestamp, you can see the demo on the Steam Deck.

### Isometric camera and movements

The game will feature a fixed isometric view. I opted to omit camera controls for the player, as managing them during combat phases can be cumbersome. Additionally, I appreciate the aesthetic appeal of voxels in an isometric view; it offers depth, height, and perspective while maintaining simplicity in the scene. As a game developer, you can also choose to provide a different angle by rotating the camera during cinematics, for example.

I also focused on implementing smooth camera movements to enhance the player's experience. Finally, I had to adapt the input matrix so that player directions align with the isometric setup.

<img src="/images/blog/saya-devlog-1/saya-iso-movement.gif" alt="A gif of the isometric view and character movements."/>

## Did you like this devlog?

Then [join the community on Discord](https://discord.gg/AvfZTmw9YM) if you want to share your
thoughts and discuss about the game!

See you next time for the second devlog!

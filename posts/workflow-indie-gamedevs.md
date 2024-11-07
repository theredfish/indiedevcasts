---
title: "Workflow for indie gamedevs"
description: "It's been 2 years of part-time game development and in this post I share how defining my own workflow helped me to keep it up."
image: "workflow_indie_gamedevs_cover.jpg"
date: "2024-09-05"
---

Hey! I'm Julian, an indie game developer. Two years ago I decided to go back to game development in my free time and build a community around it. I created this website, made videos and streamed on Twitch while learning how to make 3D voxel art games. For the past year, I've been making Saya, a game featuring voxel graphics where you play as a samurai summoned to rid the worlds of darkness.

## Find your own style and workflow

If you work on a project with a small team or you are a solo game developer, you certainly noticed the complexity of wearing multiple hats. While it's exciting to sharpen your skills on so many different scopes (game design, programming, art, ...), it's also challenging to keep your head above the water. You need to create your own systems so you can be efficient from one day to the next and from one project to the next.

### Run small experimentations

Game developers are like mad scientists creating worlds with their own rules. We apply math, code, art and craziness to bring monstrosities and wonders to life. By running small experiments, you can learn quickly and make better decisions
for your game without the overhead of integrating everything into the final scene or level.
Now you might wonder when you should do these experimentations? For which kind of game? Well, I would say: Always. You
just need to adapt depending on the context:

- A game jam is an experiment in itself. If the event is short, like 72 hours or less, you'll end up with a prototype in
a very short time. If it lasts a week or more, you can try out the core game mechanics in their own isolated scenes to experiment first. But integrate the different parts as early as possible in order to balance your game and avoid last-minute surprises.

- An open world, for example, could be divided in regions or chunks. You could also create a test scene for each game mechanic before trying to integrate everything and see if it fits together. Then you can apply the same technique to level design, procedural generation, shaders, character animations, etc. This is how large teams work, everything is isolated first and made to workd on its own before being integrated and tested with the rest.

I like this approach because it helps to focus on a specific piece of the game without worrying about the rest or being
distracted because of the external events. It reduces the feedback loop and helps to organize your project. It's also a
great way to reuse code or assets across projects because you removed the dependencies.

### Pick the right scope for you

According to the general consensus, it's better to reduce your scope at maximum to learn and fail fast. I agree with this statement except in these two cases:

- You have no previous experience, you have just started game development and you don't know where to start. In this case you shouldn't restrain your motivation and feel paralyzed by decision-making. Chase away this desire to create your big dream project, you will realize your limits soon enough. However you will **learn**. Everything you do in this first attempt will serve you for the rest of your gamedev journey.

- You have made the decision to do the impossible. Sometimes you can't help yourself and it's your only fuel for motivation. And that's okay. Just make sure everything is designed in a way that can be reused in future projects (even to improve it). Chances are your project will fail because of scope or be added to the pile of unfinished projects. Might as well make the most of what you've created!

If there is one thing I've learned about game development, it's that you shouldn't wait until you have the perfect game design, idea or scope to start. Especially if this is your first time making a video game. Don't overthink it and allow yourself to dream big even if you fail. There's nothing wrong in not achieving a game, because the most important thing is that you've practiced and gained experience that you can use later on your next game.

I recommend creating a lightweight game design document or taking notes somewhere so you have a general idea. You can then refer back to your game design document when you validate or reject certain ideas. Try to keep it short and sweet. This document should help you, or anyone, keep track of the scope and at least the core features of your game.

### Trim the fat

As with any experiment, you need to analyze the outcome and make a decision. When you are making a game you will try a lot and delete a ton of cool ideas. Because they are too complex, do not resonate entirely with your game or maybe the players didn't like it.

This is what game design is made for. You try, you learn and then you adapt. You want to make sure your game doesn't end up with a bloat of features. Trim the fat from your game, keep it consistent and easy to work with. Indie gamedevs only have so much time. That's why you need to find a good balance between experimenting, adding the right amount of features and removing the ones that will be a blocker soon or later.

### Create your systems

I think it's really important that you take the time to know what are your strengths and weaknesses. In my case I am good at programming and less in art. I decided to adapt my game to a specific art direction so it's easier for me to make progress. First I tried low poly 3D modeling but it took me too much time for only poor results. I also tried 2D art (pixel art, hd), but it didn't work for me. After many iterations I finally discovered that I could use voxel art to create
characters and props in an acceptable time. Don't get me wrong, it's not that easy. It requires efforts, tries and
learning but this is the style that clicked for me. I just didn't know it at the beginning and it took me years. I think this style is espacially well suited for indies. It offers a unique style that we don't see often, it doesn't require a
lot of details to convey an idea, and it offers a great freedom in your art direction since it's in 3D.

However be prepared to encounter some challenges with voxel art. First you need to do as with any other form of art.
Character design, color research, and find references (I recommend PureRef) before even modeling. Then you will model
and export into a format suitable for your game engine. This is where you will start to experience some issues, especially if you are using Magicavoxel. Your color areas will be converted into polygons and you will end up with thousands of triangles and faces. Bad for game performances!

You need a system! Here is mine:

1. Character / props research with PureRef.
2. Modeling and coloring with MagicaVoxel and export the `.vox` model.
3. Use VoxEdit as a middleware. Omport the `.vox` and just export it as a `glTF` file. It creates a texture for you and optimize the geometry by merging common polygons into quads and then triangulates everything.
4. Import the `glTF` file into Blender and do a last round of cleaning by merging vertices by distance. This way any duplicated vertices will be merged.

It took me several weeks of research, but now I can have a really well optimized voxel models ready to be merged in my game. By creating systems you automate your process, you avoid or reduce manual tasks and you gain time for your project. Cleaning everything manually wasn't acceptable.

Then try to automate the rest of your project. For example very early in the process you can use a service like Github and use their infrastructure. You can setup a pipeline to build your game on different platforms: Windows, Mac, Linux. Then execute the game and do some visual testing of your main scenes and menus. This way you test three things:

- Your game can be built at any time, if not it means there is an issue with your project.
- Your game can run on any targeted platform.
- Your game not only run but is correct: your visual tests will validate that each scene is reachable and is displayed correctly. Then you can expand on testing on different resolutions and validate that your UI is responsive, still accessible and so on.
- Bonus: You get an executable or package that you can share to anyone to test your game.

In conclusion: create systems to gain time in your creation process. Automate what is important and repetitive. It should bring value on the long term at a medium to high frequency.

---

Cover by <a href="https://unsplash.com/@adigold1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adi Goldstein</a> on <a href="https://unsplash.com/photos/black-and-red-audio-mixer-Tmc0wu2kf-s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

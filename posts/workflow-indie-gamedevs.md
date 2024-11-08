---
title: "Workflow for indie gamedevs"
description: "I've been developing games part-time for 2 years now and in this article I share how defining my own workflow helped me keep up."
image: "workflow_indie_gamedevs_cover.jpg"
date: "2024-11-08"
---

Hey! I'm Julian, an indie game developer. Two years ago, I returned to game development in my free time, aiming to build a community around it. I created this website, made videos, and streamed on Twitch while learning how to make 3D voxel art games. Over the past year, I've been working on *Saya*, a game featuring voxel graphics where you play as a samurai summoned to rid the worlds of darkness.

## Developing your own style and workflow

If you're a solo developer or working with a small team, you've probably experienced the complexity of juggling multiple hats. While it's exciting to sharpen your skills on so many different scopes (game design, programming, art, ...), it's also challenging to keep your head above the water. Creating a personalized workflow will help you stay productive and move seamlessly from one task or project to the next.

### Run small experiments

Game developers are like mad scientists, creating worlds with their own rules. We apply math, code, art, and creativity to bring monstrosities and wonders to life. Running small experiments lets you test ideas quickly without needing to fully integrate them into the final game. Wondering when to experiment? Well, I'd say: always. Just adapt the process based on the context:

- **For game jams**: A game jam itself is an experiment. In short jams (e.g., 72 hours or less), you'll end up with a prototype in no time. For longer jams (e.g., a week), test core mechanics in isolated scenes before integrating them. Try to bring everything together early to balance gameplay and avoid last-minute surprises.

- **For large games**: Try breaking down the world into regions or chunks. Test each core mechanic in a separate scene then bring your changes to a region and see if it fits your world environment. This approach also work for level design, procedural generation, shaders, character animations, etc. Large teams apply these principles. This makes it easier to troubleshoot issues, test features, and integrate them into the game.

Focusing on specific pieces of the game lets you work without distractions or dependencies, shortens the feedback loop,
and helps keep your project organized. It's also a great way to create reusable code and assets across different projects.

### Pick the right scope

Conventional wisdom says to keep your scope as small as possible. This is generally great advice, but there are two exceptions in my opinion:

- **When you're new to gamedev**: If you're new to game development and unsure where to begin, don't worry about limiting your scope. You shouldn't restrain your motivation and feel paralyzed by decision-making. Go ahead with your dream project! Even if it's overly ambitious, you'll learn a lot through trial and error. Everything you do during this first attempt will shape your skills for future projects.

- **When you need ambitious goals**: Aiming for an ambitious project is the only thing that keeps you moving. That's fine. Just try to structure your project so that whatever you create can be reused in the future. Even if the project fails, you'll have gained valuable experience and assets.

If there's one thing I've learned about game development, it's not to wait until you have the perfect game design or idea to start. Especially if this is your first game don't overthink it. There's nothing wrong in not achieving a video game at this stage. The most important thing is to practice and gain valuable experience for your next games.

I recommend creating a lightweight game design document or taking notes somewhere so you have a general idea. You can refer back to it when you validate or reject certain ideas. Keep it short; this document should help you, or anyone else joining, track the core features of your game.

### Trim the fat

As with any experiment, you need to analyze the outcome and make a decision. When creating a game, you'll try a lot of different ideas and end up discarding many. Some ideas might be cool but too complex, they may not resonate with the games's style or the players may not like them.

Game design is about trying, learning, and adapting. Keep your game focused and avoid feature bloat. Trim the fat from your game, keep it consistent and easy to work with. Indie developers have limited time, so balance experimentation with adding the right amount of features and removing anything that may block your progress.

### Create your systems

It's really important that you take the time to understand your strengths and weaknesses. For me, programming comes more naturally than art. I adapted my game to a specific artistic direction allowing me to progress faster. Initially, I tried low-poly 3D modeling, but the results weren't worth the time. I also tried 2D art (pixel art, hd) but couldn't find a style that fit. Eventually, I discovered that voxel art was a good fit for creating characters and props in a reasonable amount of time. It offers a unique style, doesn't require too much details, and offers a lot of flexibility.

Note however that voxel art has its own challenges. First, like any art form, it requires character design, color research, and finding references. Then, export formats and asset optimizations can be tricky. For instance, models created in Magicavoxel end up with high polygon counts, impacting performance. So you need a system. Here's mine:

1. Research and gather character/prop references using PureRef.
2. Model and color in MagicaVoxel, then export the `.vox` model.
3. Use VoxEdit as a middleware to import the `.vox` and export it as a `glTF` file, which generates textures and optimizes geometry.
4. In Blender, do a final round of cleanup by merging vertices by distance. Then you can modify or animate your model.

This took weeks to figure out, but now I can produce optimized models ready for the game. Creating systems helps you
avoid manual work and saves time in the long run.

Finally, automate as much as possible. Set up a pipeline to build your game for different platforms (Windows, Mac, Linux, ...) using a service like GitHub. This pipeline can:

- Build your game anytime, catching any project issues early.
- Verify that the game runs on all targeted platforms.
- Run visual tests to check that scenes load correctly. Over time, expand this to test UI responsiveness, various
  resolutions, etc.
- Generate builds you can share for testing.

In conclusion, creating systems saves time and keeps your workflow smooth. Automate repetitive tasks whenever possible.
Good systems bring long-term value.

---

Cover by <a href="https://unsplash.com/@adigold1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adi Goldstein</a> on <a href="https://unsplash.com/photos/black-and-red-audio-mixer-Tmc0wu2kf-s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

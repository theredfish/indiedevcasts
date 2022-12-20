---
title: "Introduction to the Entity Component System"
description: "Let's explore different designs for your codebase and learn about the Entity Component System paradigm with an example using the Bevy game engine."
image: "intro_ecs.png"
date: "2023-01-20"
---

If you use [Unity](https://unity.com/) or [Bevy](https://bevyengine.org/), you certainly heard about the Entity Component System (ECS) paradigm. Some video game engines like Bevy come with ECS by default, where Unity deliver it has a separate package to install [^unity-ecs].

[^unity-ecs]: Unity ECS is still in preview, they published several versions since 2019. You can learn more on Unity Blog with their article [Games Focus: Expanded scale for ambitious games, November 23, 200](https://blog.unity.com/technology/games-focus-expanded-scale-for-ambitious-games).

In this blog post you will learn about two different designs: object-oriented and data-oriented. Then we will talk about ECS along with an example using the game engine Bevy.

## A matter of design and trade-off

Object-oriented design (OOD) or data-oriented design (DOD)? The choice depends on three major points in my opinion :

- The complexity of your game (mechanics, volume of events, physics, ...)
- Performance needs
- Architecture decisions: What complexity does this bring? For what cost? Do you have the necessary skills?

Regarding the last point, it is not necessarily obvious which architecture / design to choose at the start. This is completely normal since object-oriented programming (OOP) is a very popular way of modeling and encapsulating data. When you start a project, you don't see all the performance and optimization needs, and implementing a specific solution for that might turn out to be premature optimization. However, with time and experience, you will see the pitfalls of certain designs for specific areas of your code. Each solution has its pros and cons.

### Object oriented design

Most of the time, game development is approached through object-oriented design where your entities are modeled as objects implementing behaviors (interfaces, traits) and extending classes (inheritance). You also have the concept of polymorphism which is a powerful way to provide different implementations of a method depending on the type of an object. OOD works very well with small to medium-sized games in terms of architectural and data complexity.

In object oriented programming, we often use design patterns formalized in the popular book _Design Patterns: Elements of Reusable Object-Oriented Software_, also known as _The Gang of Four (GoF)_. Design patterns are solutions to known problems that help you structure your code. Some of them are very popular: Factory, Singleton, Builder, Observer, Adapter, Proxy. For most of your games, the OO design is fine; many games are developed with this paradigm.

As a side note I also recommend reading [Game Programming Patterns](http://gameprogrammingpatterns.com) which is much more specific to game development.

<figure>
    <img class="mx-auto max-size-lg" src="/images/blog/ecs-introduction/class_diagram_general.svg" alt="Class diagram representing inheritance between entities such as Player and Ai inheriting Humanoid class that also inherits Collider and GameObject.">
    <figcaption>Class diagram representing the concept of inheritance with OOD. We can observe a tree representation.</figcaption>

</figure>

Although OOD offers many advantages, at some point your codebase will grow and you will end up with a very large and complex tree representation of your entities. It will become difficult to maintain your code while ensuring good performance and efficient data processing. If you are implementing game mechanics involving a large number of entities like a huge battlefield with a sandbox environment, you will need to design your game quite differently to keep good performance.

### Data-oriented design

If your game has a large amount of data, requires large-scale streaming; and a better way to organize and request data, then you should consider data-oriented design. You will have more control over your data. As _Robert Nystrom_ wrote in his chapter _Data Locality_ [^data-locality] :

[^data-locality]: Game programming Patterns, Optimization Patterns : [Data locality](http://gameprogrammingpatterns.com/data-locality.html)

> the way you organize data directly impacts performance

The idea is that you can use specific data structures, like arrays, in a way that takes advantage of CPU caching.

<figure>
    <img class="mx-auto max-size-lg" src="/images/blog/ecs-introduction/data_cache_access_flow_chart.svg" alt="Flow chart diagram describing the concept of cache hit and cache miss."/>
    <figcaption>Flowchart describing how cache data is accessed and the concept of cache hit and cache miss.</figcaption>
</figure>

When there is a _cache hit_, the CPU successfuly reads the data from the cache. But when the data isn't available then there is a _cache miss_ and the memory block is fetched from the RAM and all the while the CPU is waiting. Now if you follow the _Data Locality_ pattern, you can store chunks of memory in cache so that the blocks are adjacent to each other to improve performance.

With this example we begin to see how data-oriented design can help gain better control over data. Ideally you want to organize your information with components grouped by types so that you can process data efficiently compared to OO design that involves tree representations.

<figure>
    <img class="mx-auto max-size-lg" src="/images/blog/ecs-introduction/data_sequence.svg" alt="Different sequences of data processed in parallel."/>
    <figcaption>Different data sequences processed in parallel.</figcaption>
</figure>

When you organize your data into contiguous blocks that you can process sequentially, you see some benefits:

- **Cache ready**: Your data is already laid out to be cached efficiently. A good use case is the data locality we talked about, where blocks are adjacent to each other.
- **Ease of parallelization**: As you can see in the diagram above, data of type `A` can be organized into different chunks / sequences and passed to functions that will process the data and turn it into an `Output A`. You can use multiple threads to process data faster (divide and conquer). Contiguous blocks of homogeneous entities / types are naturally easier to process.
- **Better architecture**: You follow the data-first principle, which leads you to naturally organize your code around it and treat information as streams / sequences. Data-processing functions are loosely coupled to the rest of your system (like game mechanics), making it easier to maintain and test in isolation. Your data is not constrained by an object representation that sometimes doesn't fit.

While there are many advantages, it definetely involves a deeper understanding of data structures and memory management which can be completely different from one operating system to another (e.g PC vs. consoles). Some optimizations for one platform may not apply to another. Data-oriented design is not a silver bullet but can be very useful for specific data-centric video games [^data-centric] or specific areas of your code. The complexity can however be mitigated by out-of-the-box solutions such as engines, frameworks or libraries / packages.

[^data-centric]: Data-centric is not, to my knowledge, an official term. I use this term to give my own definition of a video game where _data_ plays an important role in game design (which ultimately impacts architecture decisions). A good example would be a game where the world is procedurally generated. This term is, to me, different from _data-driven_ (although completely compatible together) where the data drives what happens in the game world such as AI behaviors.

## Entity Component System (ECS)

Based on the previous explanations, we can define ECS as a paradigm based on a data-oriented design with three main parts :

- **Entities**: These unique "things" populate your game and are assigned component groups. They do not have data or behaviors, that's the role of the components and systems respectively. Entities can be considered as a lightweight structure with a unique identifier to easily reference groups of components.
- **Components**: The data associated with entities. For example, it could be a `position` and a `velocity`.
- **Systems**: The logic applied to data stored by components. For example; when you want to `move` your entities you will update their `position` according to their respective `velocity`.

As explained in the Unity ECS documentation [^unity-ecs-doc], entities can be organized under the same archetype which is a unique combination of component types. Remember the concept of data locality? For a given archetype you will have many entities organized into memory chunks. When you query entities by specifying component requirements, you will get a list of matching chunks.
[^unity-ecs-doc]: Unity manual, Component concepts - [Entities@1.0](https://docs.unity3d.com/Packages/com.unity.entities@1.0/manual/concepts-components.html)

<figure>
    <img class="mx-auto max-size-xl" src="/images/blog/ecs-introduction/ecs_data_systems.png" alt="."/>
    <figcaption>Example of a system applied to an archetype.</figcaption>
</figure>

In this diagram, we have two unique archetypes: `Entity #1` and `Entity #2` share the same archetype, where `Entity #3` has a different one since its combination of components is different. The system `move` will query the entities corresponding to the first archetype which is a combination of the `DynamicRigidbody`, `Velocity` and `Position` components. Then it multiplies the `velocity` by the `deltaTime` and updates the `Position`. As you can see the query excludes `Entity #3` because it's a `FixedRigidbody` and as the component type indicates, its body cannot move.

Let's try to implement a simple example with Bevy. We will greet (system) people (entities) that are persons with a name (components).

### Bevy example

For information this example is based on the official Bevy documentation [^bevy-doc-greet-people].
You can also find the code on [Github](https://github.com/indiedevcasts/ecs-bevy-examples/tree/ecs-introduction). We will work with a single `main.rs` file since this is a short example. First let's add our components:

[^bevy-doc-greet-people]: Bevy The Book: [Getting Started, ECS](https://bevyengine.org/learn/book/getting-started/ecs/).

```rust
#[derive(Component)]
struct Person;

#[derive(Component)]
struct Name(String);
```

Now we want to spawn these lovely people in our `World`. We are going to create a new function that will act as a startup system. Unlike other systems, this one will be called once before the others. Let's add three different entities with their `Person` and `Name` components:

```rust
fn add_people(mut commands: Commands) {
    commands.spawn((Person, Name("Elaina Proctor".to_string())));
    commands.spawn((Person, Name("Renzo Hume".to_string())));
    commands.spawn((Person, Name("Zayna Nieves".to_string())));
}
```

We can now register this startup system to our app:

```rust
fn main() {
    App::new()
        .add_startup_system(add_people)
        .run();
}
```

If you run your application now, you won't see anything. This is perfectly normal, there is no system defining the behavior of our entities. Let's fix this:

```rust
fn greet_people(query: Query<&Name, With<Person>>) {
    for name in query.iter() {
        println!("hello {}!", name.0);
    }
}
```

As you can see, this system queries entities that share the same archetype. All entities that have  `Name` and `Person` components. We now need to register this system to our app:

```rust
fn main() {
    App::new()
        .add_startup_system(add_people)
        .add_system(greet_people)
        .run();
}
```

If you run your app you should see the following output:

```bash
hello Elaina Proctor!
hello Renzo Hume!
hello Zayna Nieves!
```

It works like a charm! Now you can play with the example and remove the name from one entity. Then try with different components and see how it works!

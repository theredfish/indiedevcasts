import React from "react";
import ArticleCard from "../components/articles/card";
import H2 from "../components/typo/h2";
import { getSortedPostsData } from "../lib/posts";
import {
  BellAlertIcon,
  ChatBubbleLeftRightIcon,
  NewspaperIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { Post } from "./posts/post-layout";
import SocialIcons from "components/social-icons";

export async function getStaticProps() {
  const recentPosts: Post[] = await getSortedPostsData();
  return {
    props: {
      recentPosts,
    },
  };
}

function Articles({ recentPosts }) {
  return (
    <section className="blog-container">
      <H2>Articles</H2>
      <div className="grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 gap-y-10">
        {recentPosts.map((post: Post, idx: number) => (
          <ArticleCard key={`article-${idx}`} article={post} />
        ))}
      </div>
    </section>
  );
}

function HeroBanner() {
  return (
    <div className="bg-indigo-500 w-full max-w-full text-gray-100 my-14 py-10 sm:py-20">
      <div className="blog-container flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-10">
        <p className="w-full sm:w-1/3 text-2xl lg:text-3xl sm:font-medium">
          Indiedevcasts is a project where I share gamedev content with the
          community.
        </p>
        <p className="w-full sm:w-2/3 text-4xl lg:text-6xl">
          Devlogs, articles, videos and games.
        </p>
      </div>
    </div>
  );
}

function AboutIndiedevcasts() {
  return (
    <section className="blog-container mt-28">
      <div className="relative bg-overlapping-circles w-full lg:w-10/12 text-white rounded-md">
        <div className="w-full lg:w-3/5 xl:w-1/2 p-5 lg:p-10">
          <h3 className="text-3xl sm:text-4xl lg:text-6xl">
            About Indiedevcasts
          </h3>
          <p className="mt-10 text-lg lg:text-xl">
            My name is Julian and Indiedevcasts is a side-project where I share
            gamedev material with my community. I focus my content on{" "}
            <a href="/" target="_blank" className="text-gray-100">
              Rust
            </a>{" "}
            programming language,{" "}
            <a href="/" target="_blank" className="text-gray-100">
              Bevy engine
            </a>{" "}
            , procedural generation and voxel art. I used to work with Unity and
            C# before, and future content might target that environment as well!
          </p>

          <p className="mt-10 text-lg lg:text-xl">
            Indiedevcasts is a community-centric project. That's why this
            website will evolve over time to provide members with different
            features and content revolving around gamedev. I dedicate a few
            hours a week plus my weekends to developing games, editing videos
            and writing blog posts.
          </p>

          <p className="mt-10 text-xl"></p>

          <div className="inline-flex items-center space-x-5">
            <SocialIcons />
          </div>
        </div>
        <div className="lg:absolute w-full lg:w-3/6 rounded-b-md lg:rounded-md h-full bg-indigo-500 top-10 -right-40 xl:-right-52 p-5 lg:p-10 xl:pt-16 text-white">
          <div>
            <h3 className="inline-flex items-center text-xl sm:text-2xl font-semibold">
              <NewspaperIcon className="h-5 sm:h-6 mr-1" />
              Stay up to date
            </h3>
            <p className="mt-3 text-lg lg:text-xl">
              The newsletter is the best way for you to stay up to date with the
              latest content published here or on my social network, and for me
              to build my community!
            </p>
          </div>

          <div className="mt-6">
            <h3 className="inline-flex items-center text-xl sm:text-2xl font-semibold">
              <ChatBubbleLeftRightIcon className="h-5 sm:h-6 mr-1" />
              Community content
            </h3>
            <p className="mt-3 text-lg lg:text-xl">
              I highlight games, tools, projects and videos coming from the
              community. It's a great way to discover new gamedev content or
              showcase your own (
              <a
                href="mailto:hello@indiedevcasts.com"
                className="font-medium text-white border-white hover:text-white"
              >
                email me
              </a>
              ).
            </p>
          </div>
          <div className="mt-6">
            <h3 className="inline-flex items-center text-xl sm:text-2xl font-semibold">
              <BellAlertIcon className="h-5 sm:h-6 mr-1" /> Don't miss my games
            </h3>
            <p className="mt-3 text-lg lg:text-xl">
              You can also subscribe to promotional content. Don't miss my
              games, special offers, or gamedev tools by ticking the checkbox !
            </p>
          </div>
          <div className="flex items-center space-x-5 mt-10">
            <a
              href="https://mailchi.mp/e1b370d548a1/indiedevcasts-newsletter"
              target="_blank"
              className="btn text-center w-40 px-6 py-3 text-xl bg-transparent focus:bg-transparent border border-white hover:bg-transparent hover:shadow-white hover:shadow-md"
            >
              Subscribe
            </a>
            {/* <a
              href="https://mailchi.mp/e1b370d548a1/indiedevcasts-newsletter"
              target="_blank"
              className="font-semibold  text-white hover:text-white hover:border-b hover:border-white text-xl border-b-0"
            >
              Consult archives
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function YoutubeVideo({ id }) {
  return (
    <a
      target="_blank"
      href={`https://youtu.be/${id}`}
      className="group flex relative items-center justify-center border-0"
    >
      <img
        // beep-boop-beep - cookie workaround.
        src={`https://i1.ytimg.com/vi/${id}/0.jpg`}
        alt={`Youtube video thumbnail`}
        className="w-full h-52 lg:h-56 xl:h-64  object-cover rounded-md"
      />
      <div className="absolute flex w-16 h-16 rounded-full bg-red-600 group-hover:scale-110 group-hover:bg-red-400 transition duration-500 ease-in-out">
        <PlayIcon className="h-10 text-gray-100 mx-auto my-auto " />
      </div>
    </a>
  );
}

export default function HomePage({ recentPosts, youtubeVideoIds }) {
  return (
    <div>
      <Articles recentPosts={recentPosts} />

      <HeroBanner />

      <section className="blog-container">
        <H2>Latest Videos</H2>
        <div className="grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 gap-y-10">
          {youtubeVideoIds.map((id: number) => {
            return <YoutubeVideo key={`youtube-video-${id}`} id={id} />;
          })}
        </div>

        <div className="w-full md:w-1/2 mx-auto text-center">
          <a
            href="https://youtube.com/@indiedevcasts"
            target="_blank"
            className="inline-flex rounded-md
          bg-red-600 text-gray-100 py-3 px-5 mt-12 font-bold
          text-lg sm:text-2xl hover:bg-red-400 hover:text-gray-100 border-0"
          >
            @indiedevcasts
          </a>
        </div>
      </section>

      <AboutIndiedevcasts />
    </div>
  );
}

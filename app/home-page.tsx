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
    <section className="blog-container mt-28 mb-16">
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
            <a
              href="https://github.com/indiedevcasts"
              target="_blank"
              className="group border-b-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="fill-gray-100 group-hover:fill-indigo-500 h-6"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@indiedevcasts"
              target="_blank"
              className="group border-b-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="fill-gray-100 group-hover:fill-indigo-500 h-6"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/indiedevcasts"
              target="_blank"
              className="group border-b-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-gray-100 group-hover:fill-indigo-500 h-6"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            <Link href="/atom.xml" target="_blank" className="group border-b-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-gray-100 group-hover:fill-indigo-500 hover:cursor-pointer h-6"
              >
                <path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
            </Link>
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
      {/* wrapper around the image to control its size */}
      <img
        src={`https://img.youtube.com/vi/${id}/0.jpg`}
        alt={`Youtube video`}
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

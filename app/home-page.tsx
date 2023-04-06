import React from "react";
import ArticleCard from "../components/articles/card";
import H2 from "../components/typo/h2";
import { getSortedPostsData } from "../lib/posts";
import { PlayIcon } from "@heroicons/react/24/solid";

export async function getStaticProps() {
  const recentPosts = getSortedPostsData();
  return {
    props: {
      recentPosts,
    },
  };
}

function Articles({ articles }) {
  return (
    <section className="blog-container">
      <H2>Articles</H2>
      <div className="grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 gap-y-10">
        {articles.map((article, idx) => (
          <ArticleCard key={`article-${idx}`} article={article} />
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
    <section className="blog-container mt-40">
      <div className="flex flex-row items-center relative">
        <div className="h-96 bg-overlapping-circles w-10/12 text-gray-100">
          <h3>ok</h3>
        </div>
        <div className="absolute right-0 w-4/12 h-96 top-10 bg-indigo-500"></div>
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
        className="w-full h-52 lg:h-56 xl:h-64  object-cover rounded-xl"
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
      <Articles articles={recentPosts} />

      <HeroBanner />

      <section className="blog-container">
        <H2>Latest Videos</H2>
        <div className="grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 gap-y-10">
          {youtubeVideoIds.map((id) => {
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

      {/* <AboutIndiedevcasts /> */}

      <section className="mt-10">
        <div className="flex justify-center mx-auto mt-5 text-lg md:text-xl">
          <a href="https://twitter.com/indiedevcasts" target="_blank">
            Twitter
          </a>
          <span className="mx-2">-</span>
          <a href="https://www.youtube.com/@indiedevcasts" target="_blank">
            YouTube
          </a>
          <span className="mx-2">-</span>
          <a href="https://discord.gg/DGeFbGU" target="_blank">
            Discord
          </a>
          <span className="mx-2">-</span>
          <a href="mailto:hello@indiedevcasts.com">Email</a>
        </div>
      </section>

      {/* <section className="mx-auto md:w-5/6 lg:w-3/6 mt-10 text-center md:text-xl">
    <h2 className="text-3xl md:text-4xl mb-5">Newsletter</h2>
    <p className="mb-10">
      Keep up to date with my newsletter. I will occasionally send you
      updates about my articles, tutorials, devlogs and videos. I also
      highlight community projects and content!
    </p>
    <NewsletterFeed />

    <div className="flex items-center space-x-2">
      <a
        href="https://mailchi.mp/e1b370d548a1/indiedevcasts-newsletter"
        className="btn block mt-4 w-40 px-6 py-3"
      >
        Subscribe
      </a>
      <a
        href="https://mailchi.mp/e1b370d548a1/indiedevcasts-newsletter"
        className="btn block bg-transparent border border-purple-800 hover:bg-inherit hover:border-purple-500 mt-4 px-6 py-3"
      >
        Consult archives
      </a>
    </div>
  </section> */}
    </div>
  );
}

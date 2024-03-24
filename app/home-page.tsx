import ArticleCard from "@components/articles/card";
import H2 from "@components/typo/h2";
import SocialIcons from "@components/social-icons";
import { getSortedPostsData } from "@lib/posts";
import {
  BellAlertIcon,
  ChatBubbleLeftRightIcon,
  NewspaperIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { Post } from "@app/posts/post-layout";
import Image from "next/image";

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
      <div className="blog-container flex items-center flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-10">
        <p className="w-full md:w-1/3 text-2xl lg:text-3xl md:font-medium">
          Indiedevcasts is a place where I broadcast content about software and
          game development.
        </p>
        <p className="w-full  md:w-2/3 text-4xl lg:text-6xl align-middle">
          Gamedev, Rust, Bevy, Voxel Art
        </p>
      </div>
    </div>
  );
}

function AboutIndiedevcasts() {
  return (
    <section className="blog-container mt-28">
      <div className="relative bg-overlapping-circles w-full lg:w-10/12 text-white rounded-md">
        <div className="w-full lg:w-3/5 lg:p-10 xl:w-1/2 p-5">
          <h3 className="text-3xl sm:text-4xl lg:text-6xl">
            About Indiedevcasts
          </h3>
          <p className="mt-10 text-lg lg:text-xl">
            My name is Julian and Indiedevcasts is a place where I produce
            content about software and game development for my community. Here
            are the technologies I use regularly:
          </p>

          <ul className="mt-5 list-disc list-inside text-lg lg:text-xl">
            <li>
              <a
                href="https://www.rust-lang.org"
                target="_blank"
                className="text-gray-100"
              >
                Rust
              </a>
            </li>
            <li>
              <a
                href="https://bevyengine.org"
                target="_blank"
                className="text-gray-100"
              >
                Bevy Engine
              </a>
            </li>
            <li>
              <a
                href="https://ephtracy.github.io/index.html?page=mv_main"
                target="_blank"
                className="text-gray-100"
              >
                MagicaVoxel
              </a>
            </li>
            <li>
              <a
                href="https://www.blender.org"
                target="_blank"
                className="text-gray-100"
              >
                Blender
              </a>
            </li>
          </ul>

          <p className="mt-10 text-lg lg:text-xl">
            What's the meaning of Indiedevcasts? Thanks for asking! I'm an
            indiependent developer who broadcasts content to an audience in
            different formats such as screencasts, podcasts or written material.
            Check my different communication channels below!
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
              The newsletter is the best way for you to keep up with the latest
              content published here or on my social networks.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="inline-flex items-center text-xl sm:text-2xl font-semibold">
              <ChatBubbleLeftRightIcon className="h-5 sm:h-6 mr-1" />
              Community content
            </h3>
            <p className="mt-3 text-lg lg:text-xl">
              I highlight games, tools, projects and videos coming from the
              community. It's a great way to discover new indiedev content or
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
          <div className="mt-10">
            <h3 className="inline-flex items-center text-xl sm:text-2xl font-semibold">
              <BellAlertIcon className="h-5 sm:h-6 mr-1" /> Support my work
            </h3>
            <p className="mt-3 text-lg lg:text-xl">
              You can also subscribe to promotional content. Don't miss my
              games, services, special offers, or gamedev tools by ticking the
              checkbox.
            </p>
          </div>
          <div className="flex items-center space-x-5 mt-5 md:mt-10 lg:mt-16">
            <a
              href="https://mailchi.mp/e1b370d548a1/indiedevcasts-newsletter"
              target="_blank"
              className="btn text-center w-40 px-6 py-3 text-xl bg-transparent focus:bg-transparent border border-white hover:bg-transparent hover:shadow-white hover:shadow-md"
            >
              Subscribe
            </a>
            <a
              href="https://us4.campaign-archive.com/home/?u=d1ce365b7fa38a948561b8785&id=f06c9cb23b"
              target="_blank"
              className="font-semibold text-white hover:text-white hover:border-b hover:border-white text-xl border-b-0"
            >
              Past issues
            </a>
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
      <Image
        src={`https://i1.ytimg.com/vi/${id}/0.jpg`}
        alt={`Youtube video thumbnail`}
        width="480"
        height="360"
        className="w-full h-52 lg:h-56 xl:h-64 rounded-md object-cover"
      />
      <div className="absolute flex w-16 h-16 rounded-full bg-red-600 group-hover:scale-110 group-hover:bg-red-400 transition duration-500 ease-in-out">
        <PlayIcon className="h-10 text-gray-100 m-auto" />
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

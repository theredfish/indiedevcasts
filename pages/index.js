import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import NewsletterFeed from "../components/newsletter-feed";
import Image from "next/image";
import ArticleCard from "../components/articles/card";
import H2 from "../components/typo/h2";
import YoutubeLayout from "./layouts/youtube-layout";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function Articles({ articles }) {
  return (
    <section className="blog-container">
      <H2>Articles</H2>
      <div className="grid grid-cols-3 gap-x-10">
        {articles.map((article, idx) => (
          <ArticleCard key={`article-${idx}`} article={article} />
        ))}
      </div>
    </section>
  );
}

function HeroBanner({ children }) {
  return (
    <div className="bg-indigo-500 w-full max-w-full text-gray-100 my-14 py-20">
      <div className="blog-container flex flex-row space-x-10">
        <p className="w-1/3 text-4xl">
          Indiedevcasts is a project where I share gamedev content with the
          community.
        </p>
        <p className="w-2/3 text-6xl">Devlogs, articles, videos and games.</p>
      </div>
    </div>
  );
}

function AboutIndiedevcasts() {
  return (
    <section className="blog-container flex flex-row items-center relative mt-20">
      <div className="h-96 bg-overlapping-circles w-10/12 text-gray-100">
        <h3>ok</h3>
      </div>
      <div className="absolute right-0 w-4/12 h-96 top-10 bg-indigo-500"></div>
    </section>
  );
}

function Videos() {
  return (
    <section className="blog-container">
      <H2>Videos</H2>
      <YoutubeLayout />
    </section>
  );
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div>
        <Articles articles={allPostsData} />

        <HeroBanner />

        <Videos />

        <AboutIndiedevcasts />

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
    </Layout>
  );
}

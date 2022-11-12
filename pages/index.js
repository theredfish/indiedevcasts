import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className="mt-8 md:w-5/6 lg:w-3/6 md:mx-auto text-center text-lg md:text-2xl">
        <p>
          Welcome to Indiedevcasts! My name is Julian, I'm an indie game
          developer sharing his journey. Here you will find various resources
          around my universe such as videos, gamedev tutorials, or devlogs. More
          content will be added soon!
        </p>

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

      <section className="mx-auto md:w-5/6 lg:w-3/6 mt-10 text-center md:text-xl">
        <h2 className="text-3xl md:text-4xl mb-5">
          Let's keep in touch with my newsletter
        </h2>
        <p className="mb-10">
          The bi-weekly newsletter keeps me in touch with my community by
          sharing resources for indie game developers and updates on my games
          and tutorials. I also highlight community projects and content.
        </p>
        <form
          action="https://indiedevcasts.us4.list-manage.com/subscribe/post?u=d1ce365b7fa38a948561b8785&amp;id=f06c9cb23b&amp;f_id=003b88e9f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="flex flex-wrap place-content-center"
          target="_blank"
          noValidate
        >
          <input
            type="email"
            name="EMAIL"
            required
            placeholder="Your cute email here"
            className="block w-2/3 sm:w-1/3 px-4 py-3 text-base appearance-none text-black border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_d1ce365b7fa38a948561b8785_f06c9cb23b"
              tabIndex="-1"
            />
          </div>
          <button className="btn mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-2/3 sm:w-1/5 border border-transparent px-6 py-3 ">
            <span>Subscribe</span>
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
              <svg className="h-8 w-8 spin" viewBox="0 0 24 24">
                <path
                  className="text-gray-600"
                  fill="currentColor"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z"
                ></path>
                <path
                  className="text-gray-400"
                  fill="currentColor"
                  d="M12 3a9 9 0 010 18v-2a7 7 0 000-14V3z"
                ></path>
              </svg>
            </span>
          </button>
        </form>
      </section>

      <section className="mx-auto md:w-5/6 lg:w-3/6 my-10 text-center text-lg">
        <h2 className="text-2xl md:text-3xl">My latest blog posts</h2>
        <ul className="mt-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="mb-3">
              <Link href={`/posts/${id}`}>
                <a className="text-lg md:text-xl">{title}</a>
              </Link>{" "}
              -{" "}
              <span className="text-base md:text-lg">
                <Date dateString={date} />
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

import H2 from "components/typo/h2";

export default async function Page() {
  return (
    <div className="blog-container text-lg h-full">
      <H2>Support</H2>
      <h3 className="text-3xl md:text-4xl mt-10 mb-5 capitalize">
        Why support Indiedevcasts?
      </h3>

      <p>
        By becoming a supporter, you're fueling the creation of articles,
        streams, and games. Soon, you'll also have access to exclusive, premium
        content available only to subscribers. I'm incredibly grateful to my
        early supporters; each one is a step closer to full-time indie game
        development!
      </p>

      <div className="w-full md:w-1/2 mx-auto text-center my-5">
        <a
          href="https://buy.stripe.com/7sI5kE7nM2qF4cE3cc"
          target="_blank"
          className="inline-block rounded-md
          bg-purple-600 text-gray-100 py-3 px-5 mt-12 font-bold
          text-lg sm:text-2xl hover:bg-purple-500 hover:text-gray-100 border-0"
        >
          Support now for 5€
          <span className="inline-block text-base align-bottom">/mo</span>
        </a>
      </div>

      <h3 className="text-3xl md:text-4xl mt-10 mb-5 capitalize">
        Our amazing supporters
      </h3>

      <ul className="mt-5 list-disc list-inside text-lg lg:text-xl">
        <li>theredfish</li>
      </ul>
    </div>
  );
}

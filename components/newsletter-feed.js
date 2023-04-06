import useSWR from "swr";
import Parser from "rss-parser";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const feedUrl = "https://";
const fetcher = async (url) => {
  let parser = new Parser();
  let feed = await parser.parseURL(url);

  return feed;
};

const IssueCard = ({ issue }) => (
  <a
    href={issue.link}
    target="_blank"
    className="w-3/6 mx-auto md:mx-0 md:w-1/3 text-gray-100 hover:text-gray-100 h-40 rounded
      bg-gradient-to-r from-teal-300 via-pink-400 to-orange-500 p-0.5
      transition ease-in-out delay-150 hover:-translate-y-1
      hover:scale-105 duration-300"
  >
    <div className="h-full w-full bg-gray-800">
      <h3 className="w-2/3 mx-auto text-center pt-2 truncate">{issue.title}</h3>
      <h4>{issue.description?.slice(0, 20)}</h4>
    </div>
  </a>
);

const NewsletterFeed = () => {
  const { data, error } = useSWR(feedUrl, fetcher);

  if (error) {
    return (
      <div className="rounded border-red-400 text-gray-100 text-base inline-flex border border-transparent px-4 py-2 items-center">
        <ExclamationCircleIcon className="h-6 animate-pulse mr-3 text-red-400" />
        It looks like we are having trouble loading the newsletter feed. Try
        again later by reloading the page.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded border-purple-600 text-gray-100 text-base inline-flex border border-transparent px-4 py-2 items-center">
        <ArrowPathIcon className="h-4 animate-spin mr-3" />
        Loading...
      </div>
    );
  }

  const lastThreeIssues = data.items.slice(0, 3);

  return (
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6">
      {lastThreeIssues.map((issue, idx) => {
        return <IssueCard key={`issue-${idx}`} issue={issue} />;
      })}
    </div>
  );
};

export default NewsletterFeed;

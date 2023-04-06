export async function getServerSideProps() {
  const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3/search";
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  console.log(
    "running request:",
    `${YOUTUBE_SEARCH_API}?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=3`
  );

  // let res = await fetch(
  //   `${YOUTUBE_SEARCH_API}?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=3`
  // );

  // Cache YouTube data.
  // Request repeated within the next minute: cache is considered fresh.
  // Requests between 1min and 3min: cache stale but still render.
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=60, stale-while-revalidate=180"
  // );
  // const data = await res.json();
  const data = { videos: ["test"] };

  return { props: { data } };
}

export default function YoutubeLayout({ data }) {
  console.log("fetched data:", data);

  return <div>This is the youtube layout</div>;
}

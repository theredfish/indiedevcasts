import { getSortedPostsData } from "@lib/posts";
import HomePage from "./home-page";

export const revalidate = 600;

async function fetchYoutubeVideos(quantity: number) {
  const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3/search";
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
  const res = await fetch(
    `${YOUTUBE_SEARCH_API}?key=${API_KEY}&channelId=${CHANNEL_ID}&part=id&order=date&maxResults=${quantity}`
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  const videoIds = data.items.map((video) => {
    return video.id.videoId;
  });

  return videoIds;
}

export default async function Page() {
  const lastThreeYoutubeVideos = await fetchYoutubeVideos(3);
  const posts = await getSortedPostsData();

  return (
    <HomePage recentPosts={posts} youtubeVideoIds={lastThreeYoutubeVideos} />
  );
}

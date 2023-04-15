import { getSortedPostsData } from "@lib/posts";
import HomePage from "./home-page";

async function fetchYoutubeVideos(quantity: number) {
  const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3/search";
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
  // We don't necessarily need to get the most up-to-date YouTube videos, 10 min
  // should be ok for now.
  const EVERY_TEN_MINUTES = 600;

  const res = await fetch(
    `${YOUTUBE_SEARCH_API}?key=${API_KEY}&channelId=${CHANNEL_ID}&part=id&order=date&maxResults=${quantity}`,
    {
      next: { revalidate: EVERY_TEN_MINUTES },
    }
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

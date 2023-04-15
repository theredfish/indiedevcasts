import { getPostsAtomFeed } from "@lib/rss";
import { getSortedPostsData } from "@lib/posts";
import { NextResponse } from "next/server";
import { cache } from "react";
import "server-only";

// Every 30 minutes. The value needs to be statically analyzable.
export const revalidate = 1800;

export async function GET() {
  const rssAtomFeed = getPostsAtomFeed(await getSortedPostsData());
  let response = new NextResponse(rssAtomFeed);
  response.headers.set("content-type", "application/atom+xml");

  return response;
}

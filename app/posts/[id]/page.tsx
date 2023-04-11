import { getAllPostIds, getPostData } from "../../../lib/posts";
import PostLayout, { Post } from "../post-layout";

async function getPost(params) {
  const post = getPostData(params.id);

  return post;
}

export async function generateStaticParams() {
  return getAllPostIds();
}

// const siteTitle = "Indiedevcasts";
// const siteDescription =
//   "Indiedevcasts is a community-centric project where I share content for indie gamedevs such as tutorials, videos, devlogs and more. Join us now!";
// const siteUrl = new URL("https://indiedevcasts.com");
// const siteImage = "/metadata_logo.png";

// export const metadata: Metadata = {
//   title: postData.title,
//   description: postData.description,
//   authors: [{ name: "Indiedevcasts", url: "https://indiedevcasts.com" }],
//   keywords: "gamedev, indie, indiedev, indiedevcasts, indiegame",
//   icons: [
//     {
//       url: "/apple-touch-icon.png",
//       sizes: "180x180",
//       type: "image/png",
//       rel: "apple-touch-icon",
//     },
//     {
//       url: "/favicon-32x32.png",
//       sizes: "32x32",
//       type: "image/png",
//       rel: "icon",
//     },
//     {
//       url: "/favicon-16x16.png",
//       sizes: "16x16",
//       type: "image/png",
//       rel: "icon",
//     },
//   ],
//   manifest: "/site.webmanifest",
//   openGraph: {
//     title: siteTitle,
//     description: siteDescription,
//     siteName: siteTitle,
//     url: siteUrl,
//     images: [
//       {
//         url: siteImage,
//         alt: "Indiedevcasts logo",
//       },
//     ],
//   },
//   twitter: {
//     site: "@indiedevcasts",
//     title: siteTitle,
//     images: siteImage,
//     description: siteDescription,
//     card: "summary_large_image",
//   },
// };

// <Head>
//   <title>{postData.title}</title>
//   <meta property="og:title" content={postData.title} key="og_title" />
//   <meta
//     property="og:description"
//     content={postData.description}
//     key="og_descr"
//   />
//   <meta
//     property="og:url"
//     content={`${siteUrl}/posts/${postData.id}`}
//     key="og_url"
//   />
//   <meta
//     property="og:image"
//     content={`${siteUrl}/images/blog/${postData.id}/${postData.image}`}
//     key="og_image"
//   />
//   <meta property="twitter:card" content="summary_large_image" />
//   <meta
//     property="twitter:image"
//     content={`${siteUrl}/images/blog/${postData.id}/${postData.image}`}
//     key="twitter_image"
//   />
//   <meta property="twitter:title" content={postData.title} key="twitter_title" />
//   <meta
//     property="twitter:description"
//     content={postData.description}
//     key="twitter_descr"
//   />
//   <meta
//     property="twitter:url"
//     content={`${siteUrl}/posts/${postData.id}`}
//     key="twitter_url"
//   />
// </Head>;

export default async function Post({ params }) {
  const post: Post = await getPost(params);

  return <PostLayout post={post} />;
}

import Date from "../../components/date";
import DisqusComments from "../../components/comments";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

const siteUrl = "https://indiedevcasts.com";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta property="og:title" content={postData.title} key="og_title" />
        <meta
          property="og:description"
          content={postData.description}
          key="og_descr"
        />
        <meta
          property="og:url"
          content={`${siteUrl}/posts/${postData.id}`}
          key="og_url"
        />
        <meta
          property="og:image"
          content={`${siteUrl}/images/blog/${postData.id}/${postData.image}`}
          key="og_image"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={`${siteUrl}/images/blog/${postData.id}/${postData.image}`}
          key="twitter_image"
        />
        <meta
          property="twitter:title"
          content={postData.title}
          key="twitter_title"
        />
        <meta
          property="twitter:description"
          content={postData.description}
          key="twitter_descr"
        />
        <meta
          property="twitter:url"
          content={`${siteUrl}/posts/${postData.id}`}
          key="twitter_url"
        />
      </Head>

      <article className="relative w-full lg:mx-auto lg:max-w-4xl px-5 bg-none pt-8 lg:pb-5">
        <div className="prose prose-zinc prose-a:text-red-400 prose-a:hover:to-red-500 prose-a:no-underline prose-h1:text-4xl prose-md lg:prose-lg dark:prose-invert max-w-3xl mx-auto">
          <div>
            <Date dateString={postData.date} />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-pink-400 to-orange-500 py-2">
            {postData.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>

      <div className="pt-5 pb-8 px-5 md:pl-0 md:max-w-3xl md:mx-auto">
        <DisqusComments post={postData} />
      </div>
    </Layout>
  );
}

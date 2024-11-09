import Date from "@components/date";

type PostLayoutProps = {
  post: Post;
};

export type Post = {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
  description: string;
  image: string;
};

const PostLayout = ({ post }: PostLayoutProps) => {
  return (
    <div className="mt-12 px-5 w-full md:w-4/5 md:max-w-screen-lg mx-auto">
      <div className="max-w-screen-lg">
        <h1 className="font-bold text-4xl md:text-7xl text-center">
          {post.title}
        </h1>
        <p className="mt-10 font-medium text-slate-600 text-lg">
          {post.description}
        </p>
        <div className="mt-12 uppercase font-medium">
          <Date dateString={post.date} />
        </div>
      </div>
      <div className="mt-6">
        <hr className="bg-slate-300 h-0.5 mb-6" />
        <div className="w-full md:w-1/2 mx-auto text-center">
          <a
            href="https://buy.stripe.com/7sI5kE7nM2qF4cE3cc"
            target="_blank"
            className="inline-block rounded-md
          bg-purple-600 text-gray-100 py-3 px-5 font-bold
          text-lg sm:text-2xl hover:bg-purple-500 hover:text-gray-100 border-0"
          >
            Support now for 5€
            <span className="inline-block text-base align-bottom">/mo</span>
          </a>
        </div>
        <p className="text-center px-2 md:px-28 text-base mt-3">
          By subscribing, you'll support the creation of articles, streams, and
          games. You'll also gain access to exclusive content and special
          thanks.
        </p>
        <hr className="bg-slate-300 h-0.5 mt-6" />
      </div>
      <article className="prose prose-lg lg:prose-xl md:prose-md max-w-none mt-20">
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </div>
  );
};

export default PostLayout;

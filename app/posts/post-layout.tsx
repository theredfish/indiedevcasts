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
    <div className="px-5 w-full md:w-4/5 md:max-w-screen-lg mx-auto">
      <div className="max-w-screen-lg">
        <h1 className="font-bold text-5xl md:text-7xl ">{post.title}</h1>
        <p className="mt-8 font-medium text-slate-600 text-lg">
          {post.description}
        </p>
        <div className="mt-12 uppercase font-medium">
          <Date dateString={post.date} />
        </div>
      </div>

      <hr className="mt-8 bg-slate-300 h-0.5" />

      <article className="prose prose-lg lg:prose-xl md:prose-md max-w-none mt-20">
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </div>
  );
};

export default PostLayout;

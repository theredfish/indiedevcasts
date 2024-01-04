import Link from "next/link";
import Image from "next/image";
import Date from "@components/date";

export default function ArticleCard({ article }) {
  return (
    <div className="w-full">
      <Link href={`/posts/${article.id}`}>
        {/* wrapper around the image to control its size */}
        <div className="relative w-full h-48 md:h-54 lg:h-58 xl:h-64 hover:scale-105 transition duration-700 ease-in-out">
          <Image
            src={`/images/blog/${article.id}/${article.image}`}
            priority={true}
            fill
            sizes="(min-width: 768px) 30vw, 90vw"
            className="rounded-md"
            alt={`illustration for ${article.title}`}
          />
        </div>
      </Link>
      <div className="pl-2">
        <div className="mt-3">
          <Date dateString={article.date} />
        </div>
        <Link href={`/posts/${article.id}`}>
          <h3 className="text-2xl mt-2 font-medium hover:text-rose-500">
            {article.title}
          </h3>
        </Link>
        <p className="mt-4">{article.description}</p>
      </div>
    </div>
  );
}

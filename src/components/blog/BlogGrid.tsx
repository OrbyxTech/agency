import { ArticleResponse } from "../../lib/axios/types";
import BlogGridItem from "./BlogGridItem";

interface Props {
  className?: string;
  data: ArticleResponse;
}

const BlogGrid = ({ data, className }: Props) => {
  return (
    <div
      className={`my-20 grid grid-cols-1 sm:grid-cols-2 max-lg:gap-y-12 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center ${className}`}
    >
      {data?.data?.length > 0
        ? data.data.map((article) => (
            <BlogGridItem key={`article-${article.id}`} article={article} />
          ))
        : "There is no article"}
    </div>
  );
};

export default BlogGrid;

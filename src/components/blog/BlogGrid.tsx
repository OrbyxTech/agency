import { useGetArticles } from "../../lib/react-query";
import BlogGridItem from "./BlogGridItem";

interface Props {
  className?: string;
}

const BlogGrid = ({ className }: Props) => {
  const { data, isLoading } = useGetArticles();

  if (isLoading) {
    return (
      <div className="w-full h-[40rem] bg-gray-100 grid place-items-center">
        <p className="text-lg font-medium">Loading ....</p>
      </div>
    );
  }

  return (
    <div
      className={`my-20 grid grid-cols-1 sm:grid-cols-2 max-lg:gap-y-12 lg:grid-cols-3 gap-6 place-items-center ${className}`}
    >
      {data.data.length > 0
        ? data.data.map((article) => (
            <BlogGridItem key={`article-${article.id}`} article={article} />
          ))
        : "There is no article"}
    </div>
  );
};

export default BlogGrid;

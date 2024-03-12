import { useSearchParams } from "react-router-dom";
import BlogGrid from "../components/blog/BlogGrid";
import Search from "../components/shared/Search";
import { useGetArticles } from "../lib/react-query";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");

  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  const { data, isLoading } = useGetArticles({
    searchTerm: debouncedSearchTerm,
  });

  useEffect(() => {
    if (debouncedSearchTerm.trim() !== "") {
      setSearchParams({ q: debouncedSearchTerm });
    }
  }, [debouncedSearchTerm, setSearchParams]);

  return (
    <div className="w-full min-h-screen">
      {/* Head Part */}
      <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
        <p className="text-white text-6xl lg:text-7xl">Blog</p>
        <p className="text-lg mt-3 text-white/60">Home - Blog</p>
      </div>

      <Search
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        containerClasses="max-w-sm mx-auto my-10"
        placeholder="Search Blogs"
      />

      {/* Blog Grid  */}
      {isLoading ? (
        <div className="w-full h-[40rem] bg-gray-100 grid place-items-center">
          <p className="text-lg font-medium">Loading ....</p>
        </div>
      ) : data.data?.length > 0 ? (
        <BlogGrid data={data} />
      ) : (
        "There is no article"
      )}
    </div>
  );
};

export default Blogs;

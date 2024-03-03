import BlogGrid from "../components/blog/BlogGrid";
import Filters from "../components/blog/Filters";

const Blogs = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Head Part */}
      <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
        <p className="text-white text-6xl lg:text-7xl">Blog</p>
        <p className="text-lg mt-3 text-white/60">Home - Blog</p>
      </div>

      {/* Blog Grid  */}
      <div className="grid grid-cols-[35%_1fr] sm:grid-cols-[25%_1fr] lg:grid-cols-[20%_1fr]">
        <Filters />
        <BlogGrid />
      </div>
    </div>
  );
};

export default Blogs;

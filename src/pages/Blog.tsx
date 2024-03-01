import BlogGrid from "../components/blog/BlogGrid";

const Blogs = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Head Part */}
      <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
        <p className="text-white text-6xl lg:text-7xl">Blog</p>
        <p className="text-lg mt-3 text-white/60">Home - Blog</p>
      </div>

      {/* Blog Grid  */}
      <BlogGrid />
    </div>
  );
};

export default Blogs;

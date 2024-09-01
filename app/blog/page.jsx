import Link from "next/link";

const Blog = () => {
  return (
    <>
      <h1 className="h-[50vh] text-center flex items-center justify-center text-[40px] font-extrabold z-10 w-full tracking-tighter transition ease-in-out">
        <span className="animate-bounceIn">Coming Soon</span>
      </h1>
      <button className="mx-auto flex  bg-white px-6 py-3 mb-5 text-black hover:bg-gray-400 hover:text-white hover:scale-95 transition">
        <Link className="" href={"/"}>Go Back</Link>
      </button>
    </>
  );
};

export default Blog;

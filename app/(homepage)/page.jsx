import LatestPosts from "../components/blogDisplay/LatestPosts";
import Posts from "../components/blogCreation/Posts";
// import { BlogProvider } from "../components/context/BlogContext";

export default function Home() {
  return (
    <>
      {/* <BlogProvider> */}
      <main className="home relative flex w-full min-h-screen justify-center">
        <div
          className="absolute mt-[272px]
            grid grid-cols-12-71px gap-[24px]"
        >
          {/* Form Container */}
          <div
            className="bg-light relative
            col-span-5 h-[659px]
            p-[24px] mb-[96px]"
          >
            {/* mb-[96px] ?? ^^ */}
            <Posts />
          </div>
          {/* BlogPost Grid Container */}
          <div
            className="bg-light relative
            col-start-6 col-span-7 h-[659px]
            p-[24px] mb-[96px]"
          >
            {/* mb-[96px] ?? ^^ */}
            <LatestPosts />
          </div>
        </div>
      </main>
      {/* </BlogProvider> */}
    </>
  );
}

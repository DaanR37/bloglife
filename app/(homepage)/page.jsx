import LatestPosts from "../components/blogDisplay/LatestPosts";
import Posts from "../components/blogCreation/Posts";
// import { BlogProvider } from "../components/context/BlogContext";
/// Client-Side Rendering

export default function Home() {
  return (
    <>
      {/* <BlogProvider> */}
      <main
        className="w-full h-full flex justify-center
          lg:inline-block"
      >
        <div
          className="grid
            grid-cols-12-71px gap-[24px] mt-[272px]
            lg:mt-52 lg:flex lg:flex-col 
            sm:mt-36
            xs:mt-28"
        >
          {/* Form Container */}
          <div
            className="bg-light
            col-span-5 h-[659px]
            p-[24px] mb-[96px]
            lg:h-[775px]
            sm:p-[20px] sm:mb-[0px]
            xs:h-[659px]"
          >
            <Posts />
          </div>
          {/* BlogPost Grid Container */}
          <div
            className="bg-light
            col-start-6 col-span-7 h-[659px]
            p-[24px] mb-[96px] overflow-y-auto
            lg:h-[775px]
            md:h-[700px]
            sm:p-[20px] 
            xs:h-[600px] xs:mb-[50px]"
          >
            <LatestPosts />
          </div>
        </div>
      </main>
      {/* </BlogProvider> */}
    </>
  );
}

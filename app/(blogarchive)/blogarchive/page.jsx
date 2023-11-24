import FetchArchive from "@/app/components/fetchArchive/FetchArchive";

export default function BlogArchive() {
  return (
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
        <div
          className="col-span-12
            h-[507px] mb-[96px]
            xs:mb-[50px]"
        >
          <FetchArchive />
        </div>
      </div>
    </main>
  );
}

import FetchArchive from "@/app/components/fetchArchive/FetchArchive";

export default function BlogArchive() {
  return (
    <main className="flex w-full min-h-screen justify-center">
      <div
        className="mt-[272px]
            grid grid-cols-12-71px gap-[24px]"
      >
        <div
          className="col-span-12
            mb-[96px] h-[507px]"
        >
          <FetchArchive />
        </div>
      </div>
    </main>
  );
}

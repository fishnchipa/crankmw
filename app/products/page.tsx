import Filterbar from "@/components/filter/Filterbar";
import NumPagination from "@/components/product/NumPagination";
import NumResults from "@/components/product/NumResults";
import ProductSection from "@/components/product/ProductSection";
import Sort from "@/components/product/Sort";
import Searchbar from "@/components/tune/Searchbar";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page, filter, query, min, max, sortby } = await searchParams;

  return (
    <div className="flex justify-center mt-[100px] text-[24px]">
      <div className="px-10 w-full 2xl:w-[1500px] 2xl:p-0">
        <Searchbar />
        <div className="w-full border-b-[2px] border-[#D1D1D1] font-crimson mt-[20px]">
          <Suspense fallback={<span>?? Results</span>}>
            <NumResults filters={filter} query={query} min={min} max={max} />
          </Suspense>
        </div>
        <Sort sortBy={sortby} />
        <div className="w-full flex gap-x-10">
          <Filterbar />
          <div className="flex flex-col gap-y-16">
            <Suspense
              fallback={<div className="h-[1796px]">Loading</div>}
              key={JSON.stringify(searchParams)}
            >
              <ProductSection
                filters={filter}
                page={page}
                query={query}
                min={min}
                max={max}
                sortby={sortby}
              />
              <NumPagination />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

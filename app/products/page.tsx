import Filterbar from "@/components/filter/Filterbar";
import ProductSection from "@/components/product/ProductSection";

export default function Home() {
  
  

  return (
    <div className="flex justify-center mt-[100px] text-[24px]">
      <div className="px-10 w-full 2xl:w-[1500px] 2xl:p-0">
        <div className="w-full border-b-[2px] border-[#D1D1D1] font-crimson">
          <span>{3} Results</span>
        </div>

        <div className="w-full mt-10 flex gap-x-10">
          <Filterbar />
          <ProductSection />
        </div>
      </div>
    </div>
  )
}

import ProductItem from "@/components/product/ProductItem";
import Recommend from "@/components/product/Recommend";

export default function Home() {


  return (
    <div className="flex justify-center mt-[70px]">
      <div className="flex flex-col gap-y-20 w-[1500px] pt-10 pb-20">
        <ProductItem />
        <div className="w-full text-center text-[24px]">
          <hr className="border border-[#D1D1D1]"/>
          <h1 className="mt-2">YOU MIGHT ALSO LIKE</h1>
        </div>
        <Recommend />
      </div>
        
    </div>
  )
}

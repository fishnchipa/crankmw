import ProductItem from "@/components/product/ProductItem";
import Recommend from "@/components/product/Recommend";
import { getProduct } from "@/lib/db/queries";

export default async function Home({
  params,
}: {
  params: { product: string };
}) {
  const data = await getProduct(params.product);
  console.log(data);
  return (
    <div className="flex justify-center mt-[70px]">
      <div className="flex flex-col gap-y-20 w-[1500px] pt-10 pb-20">
        {data ? (
          <ProductItem product={data} />
        ) : (
          <div>Product Not avaliable</div>
        )}
        <div className="w-full text-center text-[24px]">
          <hr className="border border-[#D1D1D1]" />
          <h1 className="mt-2">YOU MIGHT ALSO LIKE</h1>
        </div>
        <Recommend />
      </div>
    </div>
  );
}

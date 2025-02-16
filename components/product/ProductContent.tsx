import { DescriptionContent } from "@/lib/types/product";
import ContentMap from "./ContentMap";

type ProductContentProps = {
  title: string;
  price: number;
  discount: number | null;
  description: DescriptionContent[];
};

export default function ProductContent({
  title,
  price,
  discount,
  description,
}: ProductContentProps) {
  return (
    <div className="flex flex-col gap-y-[20px]">
      <div>
        <h1 className="text-[28px] font-semibold">{title}</h1>
      </div>
      {discount ? (
        <div className="flex flex-row gap-x-10 text-[22px]">
          <h1 className="text-red-500">${discount.toFixed(2)}</h1>
          <h1 className="line-through">${price.toFixed(2)}</h1>
        </div>
      ) : (
        <h1 className="text-[22px]">${price.toFixed(2)}</h1>
      )}
      <hr className="bg-soft-gray" />
      <div className="flex flex-col gap-y-[20px] font-light text-[15px] text-soft-black">
        <ContentMap content={description} />
      </div>
    </div>
  );
}

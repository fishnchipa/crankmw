import { ProductPageType } from "@/lib/types/product";
import ProductContent from "./ProductContent";
import ProductPreview from "./ProductPreview";
import ProductQuantity from "./ProductQuantity";

type ProductItemProps = {
  product: ProductPageType;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-row p-6 gap-x-14">
        <ProductPreview preview={product.images} />
        <div className="flex flex-col gap-y-[20px] w-[425px]">
          <ProductContent
            title={product.title}
            price={product.price}
            discount={product.discount}
            description={product.description ? product.description.side : []}
          />
          <ProductQuantity id={product.id.toString()} />
        </div>
      </div>
      <div>Content Bottom</div>
    </div>
  );
}

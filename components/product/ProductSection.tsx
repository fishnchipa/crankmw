import { getProductPage } from "@/lib/db/queries";
import Product from "./Product";

type ProductSectionProps = {
  filters: string[] | string | undefined;
  query: string[] | string | undefined;
  min: string[] | string | undefined;
  max: string[] | string | undefined;
  page: string[] | string | undefined;
  sortby: string[] | string | undefined;
};

export default async function ProductSection({
  filters,
  query,
  min,
  max,
  page,
  sortby,
}: ProductSectionProps) {
  const products = await getProductPage(filters, query, min, max, page, sortby);

  return (
    <div className="min-h-[800px] grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
      {products.map((item) => (
        <Product
          key={item.id}
          title={item.title}
          name={item.name}
          price={item.origPrice}
          discount={item.mainPrice}
          image={item.image}
        />
      ))}
    </div>
  );
}

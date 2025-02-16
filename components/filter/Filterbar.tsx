import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import Price from "./Price";
import Link from "next/link";
import { getBrands, getCategories, getMaxPrice } from "@/lib/db/queries";

export default async function Filterbar() {
  const categories = await getCategories();
  const brands = await getBrands();
  const maxPrice = await getMaxPrice();

  return (
    <div className="min-w-80 max-w-80">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-[34px] text-[#4A4A4A]">Filters</h1>
        <Link
          href={"/products"}
          className="flex flex-col font-semibold text-[18px] text-[#FAA500] justify-end pb-2 hover:text-[#FFC045]"
        >
          Clear All
        </Link>
      </div>
      <hr className="border border-[#D1D1D1]" />
      <div className="flex flex-col gap-y-3 mt-3">
        <Dropdown label="Avaliability" isOpen>
          <Checkbox label="In Stock" amount={10} />
          <Checkbox label="Pre Order" amount={5} />
        </Dropdown>
        <hr className="border border-[#D1D1D1]" />
        <Dropdown label="Price" isOpen>
          <Price initialMax={maxPrice.max || 999} />
        </Dropdown>
        <hr className="border border-[#D1D1D1]" />
        <Dropdown label="Category" isOpen>
          {categories.map((item) => (
            <Checkbox key={item.id} label={item.title} amount={10} />
          ))}
        </Dropdown>
        <hr className="border border-[#D1D1D1]" />
        <Dropdown label="Brand" isOpen>
          {brands.map((item) => (
            <Checkbox key={item.id} label={item.title} amount={10} />
          ))}
        </Dropdown>
      </div>
    </div>
  );
}

import Link from "next/link";
import Button from "../Button";
import Product from "./Product";

type ProductLandingProps = {
  title: string;
};
export default function ProductLanding({ title }: ProductLandingProps) {
  return (
    <div className="flex flex-col gap-y-3 px-10 lg:px-[200px] mt-16">
      <Link
        href="/"
        className="w-fit hover:underline text-moody-gray font-semibold decoration-[3px]"
      >
        <h1 className="text-[#4A4A4A] text-[25px] sm:text-[30px] xl:text-[34px]">
          {title}
        </h1>
      </Link>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full sm:gap-x-5 gap-y-10">
        <Product name="" title='5" CMW B58 Catless Downpipe' price={13} discount={10} />
        <Product name="" title='5" CMW B58 Catless Downpipe' price={13} discount={10} />
        <Product name="" title='5" CMW B58 Catless Downpipe' price={13} discount={10} />
        <Product name="" title='5" CMW B58 Catless Downpipe' price={13} discount={10} />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[128px]">
          <Button label="VIEW ALL" />
        </div>
      </div>
    </div>
  );
}

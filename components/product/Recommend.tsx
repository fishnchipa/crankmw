import Product from "./Product";

export default function Recommend() {

  return (
    <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-x-5 gap-y-10">
      <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
      <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
      <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
      <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
    </div>
  )
}

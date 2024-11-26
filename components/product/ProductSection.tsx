import Product from "./Product";

export default function ProductSection() {


  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
        <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
        <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
        <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
        <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
    </div>
  )
}

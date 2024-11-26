"use client"

import { Item } from "@/lib/types"
import ProductContent from "./ProductContent"
import ProductPreview from "./ProductPreview"
import ProductQuantity from "./ProductQuantity"

const data = {
  id: "1",
  title: "5″ CMW B58 CATLESS DOWNPIPE",
  sku: 2,
  price: 720.00,
  discount: 950,
  preview: [
    {
      src: "/eve.webp",
      alt: "crank"
    },
    {
      src: "/eve.webp",
      alt: "crank"
    }
  ],
  content: [
    {
      type: "text",
      value: "Increase performance and reduce back-pressure with a high-flow CMW Downpipe. Faster spool, increased power, and a more aggressive exhaust note. Using a cast French head to 5″ downpipe, Handcrafted 304 Stainless Steel construction. "
    },
    {
      type: "list",
      value: ["Catless", "Cast French Head", "Gains from 20-25hp with the tune", "Heat Shield", "Fitment guaranteed"]
    },
    {
      type: "text",
      value: "Back pressure is significantly reduced by eliminating the restrictive catalytic converter in the factory downpipe with our catless which results in a faster spool, an increase in power & a more aggressive exhaust note. Our downpipe features a full 5″ stainless steel design as well as a CNC 304 grade stainless steel flange that offers a smooth transition from the turbo to the mid pipes. "
    }
  ]
}



export default function ProductItem() {
      
  return (
    <div className="w-full flex flex-row p-6 gap-x-14">
      <ProductPreview preview={data.preview}/>
      <div className="flex flex-col gap-y-[20px] w-[425px]">
        <ProductContent 
          title={data.title}
          sku={data.sku}
          price={data.price}
          discount={data.discount}
          content={data.content as Item[]}
        />
        <ProductQuantity 
          id={data.id}
          title={data.title}
          price={data.price}
        />
      </div>
    </div>
  )
}


"use client"

import { Item } from "@/lib/types/product"
import ProductContent from "./ProductContent"
import ProductPreview from "./ProductPreview"
import ProductQuantity from "./ProductQuantity"
import { productData } from "@/lib/mock"



export default function ProductItem() {
      
  return (
    <div className="w-full flex flex-row p-6 gap-x-14">
      <ProductPreview preview={productData.preview}/>
      <div className="flex flex-col gap-y-[20px] w-[425px]">
        <ProductContent 
          title={productData.title}
          sku={productData.sku}
          price={productData.price}
          discount={productData.discount}
          content={productData.content as Item[]}
        />
        <ProductQuantity 
          id={productData.id}
          title={productData.title}
          price={productData.price}
        />
      </div>
    </div>
  )
}


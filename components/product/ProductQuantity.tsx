"use client"

import { CartProduct } from "@/lib/types";
import { useState } from "react";
import Quantity from "./Quantity";
import Button from "../Button";

type ProductQuantityProps = {
  id: string,
  title: string,
  price: number,
}

export default function ProductQuantity({id, title, price}: ProductQuantityProps) {
  const [value, setValue] = useState(1)


  const product = {
    id: id,
    title: title,
    price: price,
    quantity: value
  } as CartProduct

  const onSubmit = () => {
    try {
      const cart = window.localStorage.getItem("cart-items");
      if (cart) {
        const items = JSON.parse(cart) as CartProduct[];
        items.push(product);
        window.localStorage.setItem("cart-items", JSON.stringify(items));
      } else {
        const items = [product]
        window.localStorage.setItem("cart-items", JSON.stringify(items));
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className="text-[15px] flex flex-col gap-y-1 w-full" onSubmit={onSubmit}>
      <h1>QUANTITY</h1>
      <Quantity quantity={{value, setValue}}/>
      <Button 
        className="w-full h-12 text-[18px] relative group overflow-hidden border-2 border-black hover:text-white mt-10"
      >
        <span className="absolute inset-0 bg-black transform -translate-x-[calc(100%+1px)] group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
        <span className="relative">ADD TO CART</span>
      </Button>
    </form>
  )
}


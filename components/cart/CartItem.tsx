"use client";

import Image from "next/image";
import Quantity from "../product/Quantity";
import { useState } from "react";
import {
  checkoutProduct,
  deleteProduct,
} from "@/app/products/[product]/actions";
import { Trash } from "lucide-react";
import { ProductCart } from "@/lib/types/product";

type CartItemProps = {
  item: ProductCart
};

export default function CartItem({ item }: CartItemProps) {
  const [value, setValue] = useState(item.quantity);

  return (
    <div className="flex py-[24px]">
      <div className="flex basis-[55%] items-center gap-x-5">
        <div className="w-[200px] h-[200px] relative border rounded-md">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-contain"
          />
        </div>
        <section className="h-full max-w-[300px]">
          <h1 className="text-[24px] leading-[26px] font-bold">
            {item.title}
          </h1>
          <div className="flex text-[16px]">
            {item.discount ? (
              <div className="flex gap-x-10 ">
                <span className="text-red-500">
                  ${item.discount.toFixed(2)}
                </span>
                <span className="line-through">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span>${item.price.toFixed(2)}</span>
            )}
          </div>
        </section>
      </div>
      <div className="basis-[30%]">
        <div className="flex justify-center w-fit items-center gap-x-5">
          <form action={(data) => checkoutProduct(data, item.id)}>
            <Quantity
              quantity={{ value, setValue }}
              className="rounded-md bg-gray-200 text-[16px]"
              type="submit"
            />
          </form>
          <form
            action={() => deleteProduct(item.id)}
            className="flex justify-center items-center"
          >
            <button type="submit">
              <Trash />
            </button>
          </form>
        </div>
      </div>
      <div className="flex basis-[15%] justify-end text-[24px] font-bold">
        ${item.discount ? item.discount * value : item.price * value}
      </div>
    </div>
  );
}

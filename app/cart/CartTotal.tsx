"use client";

import Button from "@/components/Button";
import { ProductCart } from "@/lib/types/product";
import { handleCheckout } from "./action";

type CartTotalProps = {
  cartItems: ProductCart[];
};

export default function CartTotal({ cartItems }: CartTotalProps) {
  const sum = () => {
    return cartItems.reduce((acc, val) => {
      return acc + (val.discount ? val.discount : val.price) * val.quantity;
    }, 0);
  };

  return (
    <form
      className="flex flex-col"
      action={() => handleCheckout(cartItems)}
    >
      <div className="flex text-[18px] font-bold justify-end gap-x-5">
        <span>Subtotal</span>
        <span>${sum().toFixed(2)}</span>
      </div>
      <span className="text-[14px] text-gray-400 mb-5">
        Tax included and shipping calculated at checkout
      </span>
      <Button type="submit" label="CHECKOUT" />
    </form>
  );
}

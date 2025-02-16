"use client";

import { useState } from "react";
import Quantity from "./Quantity";
import Button from "../Button";
import { checkoutProduct } from "@/app/products/[product]/actions";

type ProductQuantityProps = {
  id: string;
};

export default function ProductQuantity({ id }: ProductQuantityProps) {
  const [value, setValue] = useState(1);
  const [loading, setLoading] = useState(false);

  const checkout = async (formData: FormData) => {
    setLoading(true);

    const response = await checkoutProduct(formData, id);
    setLoading(false);
  };

  return (
    <form
      className="text-[15px] flex flex-col gap-y-1 w-full"
      action={checkout}
    >
      <h1>QUANTITY</h1>
      <Quantity quantity={{ value, setValue }} />
      <Button label="ADD TO CART" type="submit" className="mt-5" />
    </form>
  );
}

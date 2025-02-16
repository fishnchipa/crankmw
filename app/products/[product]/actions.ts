"use server";

import { removeItem, updateCart } from "@/lib/session";
import { z } from "zod";

export const checkoutProduct = async (
  formFields: FormData,
  productId: string,
) => {
  const formData = Object.fromEntries(formFields);
  const parsed = z
    .object({
      quantity: z.coerce.number(),
    })
    .safeParse(formData);

  if (parsed.success) {
    await updateCart(parsed.data.quantity, productId);
  }
};

export const deleteProduct = async (productId: string) => {
  await removeItem(productId);
};

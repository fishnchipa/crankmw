"use server";

import { ProductCart } from "@/lib/types/product";
import { redirect } from "next/navigation";
import Stripe from "stripe";

export async function handleCheckout(cartItems: ProductCart[]) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const items = cartItems.map(item => ({price: item.discountId || item.priceId, quantity: item.quantity}))
  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });

  if (session.url) {
    redirect(session.url);
  }
}

"use client";

import Image from "next/image";
import Anchor from "../Anchor";
import { motion } from "motion/react";

type ProductProps = {
  title: string;
  name: string;
  price: number;
  discount: number;
  image?: string;
  alt?: string;
};

export default function Product({
  title,
  name,
  price,
  discount,
  image,
  alt,
}: ProductProps) {
  return (
    <Anchor
      className="flex flex-col items-center group text-center "
      href={`/products/${name}`}
    >
      <div className="w-full aspect-square rounded-2xl border-happy-gray border-[1px] relative overflow-hidden">
        <motion.div
          className="w-full h-full flex justify-center items-center bg-white"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "just", duration: 0.4 }}
        >
          <Image
            src={image || "/eve.webp"}
            alt={alt || "eve"}
            width={600}
            height={450}
          />
        </motion.div>
        {discount !== price && (
          <div className="w-14 h-6 flex justify-center items-center bg-black rounded-[40px] absolute bottom-5 left-5">
            <span className="text-white text-[10px] font-noto-sans font-semibold">
              SALE
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col text-[#4A4A4A] items-center text-[16px]">
        <h1 className="text-black group-hover:underline">{title}</h1>
        <div className="flex flex-row font-semibold gap-x-5">
          {discount !== price && (
            <span className="text-red-500">${discount.toFixed(2)}</span>
          )}
          <span
            className={`${discount !== price && "line-through font-normal"}`}
          >
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </Anchor>
  );
}

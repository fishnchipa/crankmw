"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type ProductProps = {
  title: string
  price: number
  sale?: {
    discount: number
  }
}

export default function Product({title, price, sale}: ProductProps) {
  return (
    <Link 
      className="flex flex-col items-center group text-center "
      href="/"
    >
      <div className="w-full aspect-square rounded-2xl border-happy-gray border-[1px] relative overflow-hidden">
        <motion.div 
          className="w-full h-full flex justify-center items-center bg-white"
          whileHover={{ scale: 1.1 }}
          transition={{ type:"just", duration: 0.4 }}
        >
          <Image 
            src="/eve.webp"
            alt="eve"
            width={600}
            height={450}
          />
        </motion.div> 
        {sale && 
          <div className="w-14 h-6 flex justify-center items-center bg-black rounded-[40px] absolute bottom-5 left-5">
            <span className="text-white text-[10px] font-noto-sans font-semibold">
              SALE 
            </span>
          </div>
        }
      </div>
      <div className="flex flex-col text-[#4A4A4A] items-center">
        <h1 className="text-black group-hover:underline">{title}</h1>
        <div className="flex flex-row font-semibold gap-x-5">
          {sale && <span className="text-red-500">${sale.discount.toFixed(2)}</span>}
          <span className={`${sale && "line-through font-normal"}`}>${price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  )
}

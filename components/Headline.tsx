"use client"

import Link from "next/link";
import ArrowMark from "./ArrowMark";
import HeadlineBackDrop from "./HeadlineBackDrop";
import { motion } from "framer-motion";


export default function Headline() {

  return (
    <div className="w-full h-[546px] relative">
        <HeadlineBackDrop />
        <section className="w-full h-full pl-[280px] pt-[130px] text-white">
          <h1 className="w-fit text-[34px]  font-bold">
            A New Way To <span className="bg-gradient-to-r from-[#ffdf43] to-[#f5a329] text-transparent inline-block bg-clip-text">
              Envision
            </span> Productivity
          </h1>
          <motion.div
            className="flex flex-col justify-start gap-y-7 mt-5"
            style={{ transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            whileInView={{
              scaleX: 1,
              transition: {
                delay: 0.3,
                type: "spring",
                bounce: 0.4,
                duration: 2
              }
            }}
            viewport={{ once: true }}
          >
            <hr className="h-[1px] border-0 bg-white mr-[72%]"/>
            <hr className="h-[1px] border-0 bg-white mr-[80%]"/>
          </motion.div>
          <div className="w-[600px] leading-7 font-noto-sans mt-16 relative">
            <ArrowMark />
            <p>Crank Motor Werkes offer a wide range of services, including custom turbo kits, in-house parts, tuning packages, and dyno hire.  Whether you need turbo upgrades, custom tuning, or performance modifications, Crank Motor Werkes provides tailored solutions for serious power enthusiasts</p>
          </div>
          <ul className="flex flex-row gap-x-16 text-[#9B9B9B] font-bold mt-[85px]">
            <li className="hover:text-[#4A4A4A]">
              <Link href="/">HOT PRODUCTS</Link>
            </li>
            <li className="hover:text-[#4A4A4A]">
              <Link href="/">DOWNPIPES</Link>
            </li>
            <li className="hover:text-[#4A4A4A]">
              <Link href="/">AIR INTAKES</Link>
            </li>
            <li className="hover:text-[#4A4A4A]">
              <Link href="/">ENGINES</Link>
            </li>
            <li className="hover:text-[#4A4A4A]">
              <Link href="/">RADIATORS</Link>
            </li>
            <li className="hover:text-[#4A4A4A]">
              <Link href="/">DIFFUSERS</Link>
            </li>
          </ul>
        </section>

    </div>
  )
}

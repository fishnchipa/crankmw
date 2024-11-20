"use client"

import ArrowMark from "./ArrowMark";
import HeadlineBackDrop from "./HeadlineBackDrop";
import { motion } from "framer-motion";
import Anchor from "./Anchor";

const links = ["HOT PRODUCTS", "DOWNPIPES", "AIR INTAKES", "ENGINES", "RADIATORS", "DIFFUSERS"]

export default function Headline() {

  return (
    <div className="w-full h-[546px] relative">
        <HeadlineBackDrop />
        <section className="flex flex-col w-full h-full items-center xl:items-start xl:pl-[280px] pt-24 md:pt-[130px] text-white">
          <div className="w-fit px-5">
            <h1 className="h-[102px] w-full text-[34px] font-bold md:h-fit leading-10">
              A New Way To <span className="bg-gradient-to-r from-[#ffdf43] to-[#f5a329] text-transparent inline-block bg-clip-text">
                Envision
              </span> Productivity
            </h1>
            <motion.div
              className="flex-col justify-start gap-y-7 mt-5 hidden md:flex"
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
              <hr className="h-[1px] border-0 bg-white mr-[25%]"/>
              <hr className="h-[1px] border-0 bg-white mr-[50%]"/>
            </motion.div>
          </div>
          <div className="h-[200px] mt-8 px-5 w-full md:w-[600px] md:px-0 leading-7 font-noto-sans md:mt-16 relative">
            <ArrowMark />
            <p>Crank Motor Werkes offer a wide range of services, including custom turbo kits, in-house parts, tuning packages, and dyno hire.  Whether you need turbo upgrades, custom tuning, or performance modifications, Crank Motor Werkes provides tailored solutions for serious power enthusiasts</p>
          </div>
          <ul className="h-5 w-full flex flex-wrap overflow-hidden justify-center xl:justify-start gap-x-16 text-[#9B9B9B] mt-16 md:mt-2 font-bold whitespace-nowrap">
            {links.map(item => {
              return (
                <li className="hover:text-[#4A4A4A]" key={item}>
                  <Anchor href="/">{item}</Anchor>
                </li>
              )
            })}
          </ul>
        </section>
    </div>
  )
}

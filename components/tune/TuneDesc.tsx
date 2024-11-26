"use client"

import { Banknote, FastForward, KeyRound } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"


const content = [
  {
    heading: "Fast and Seamless Tuning experience.",
    desc: "With our experts we ensure that your time with us is a smooth experience with for all.",
    img: "running",
    alt: "running"
  },
  {
    heading: "We offer competitive prices for all expertise.",
    desc: "We offer expert tuning services at competitive prices to ensure optimal performance and precision for your needs.",
    img: "money",
    alt: "money"
  },
  {
    heading: "Dependable support, guaranteed satisfaction.",
    desc: "We provide reliable customer service with a focus on delivering prompt, dependable support at competitive prices to meet all your needs.",
    img: "shield",
    alt: "shield"
  }
]

export default function TuneDesc() {

  const image = (img: string) => {
    switch (img) {
      case "running":
        return <FastForward size={35} color="#FFD12E"/>
      case "money":
        return <Banknote size={35} color="#FFD12E"/>
      case "shield":
        return <KeyRound size={35} color="#FFD12E"/>
      default:
        return
    }
  }

  return (
    <div className="flex flex-col gap-y-5">
      {content.map((item, key) => {
        return (
          <section key={key} className="flex max-w-[500px] flex-row items-center gap-x-5 ">
            <div className="min-w-[35px] min-h-[35px]">
              {image(item.img)}
            </div>
            <div className="flex flex-col">
              <Link href="/">
                <motion.h3 
                  className="text-[#FFB000] text-[18px] font-semibold hover:underline underline-offset-4"
                  whileHover={{ translateX: 15 }}
                  transition={{ delay:0.1, type:"just", duration: 0.3 }}
                >
                  {item.heading}
                </motion.h3>
              </Link>
              <p className="text-[#686868] text-[12px]">{item.desc}</p>
            </div>
          </section>
        )
      })}      

    </div>
  )
}


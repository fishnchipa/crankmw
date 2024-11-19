"use client"

import Link from "next/link";
import Selector from "@/components/Selector";
import ShoppingCart from "@/components/ShoppingCart";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [selector, setSelector] = useState({ left: 0, width: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  const handleHover = (event: React.MouseEvent<HTMLLIElement>) => {
    const { offsetLeft, offsetWidth } = event.currentTarget;
    setSelector({ left: offsetLeft, width: offsetWidth });
  };

  useEffect(() => {
    const activate = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);      
      } else {
        setIsScrolled(false); 
      }
    }
    activate();
    window.addEventListener("scroll", activate);

    return () => {
      window.removeEventListener("scroll", activate);
    }
  }, [])

  return (
    <nav 
      style={{
        width: isScrolled ? "100%" : "1000px",
        clipPath: isScrolled ? "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" : "polygon(0% 0, 100% 0, 95% 100%, 5% 100%)",
        background: isScrolled ? "rgb(57, 58, 58)" : "rgba(17, 19, 20, 0.7)",
      }}
      className="flex items-center justify-center font-noto-sans font-normal relative text-white transition-all duration-500"
    >
      {isScrolled && 
        <motion.div 
          className="absolute left-5"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}

          transition={{ 
            duration: 0.3, 
            delay: 0.5, 
            ease: "linear" 
          }}
        >
          <div className="w-[110px] h-[45px] relative">
            <Image 
              src="/logo.webp" 
              alt="logo"
              className="object-cover"
              fill
            />     
          </div>
        </motion.div>
      }
      <ul className="h-full flex flex-row items-center gap-x-10 relative">
        <li
          onMouseEnter={handleHover}
          className="relative"
        >
          <Link href="/">Home</Link>
        </li>
        <li
          onMouseEnter={handleHover}
          className="relative"
        >
          <Link href="/">Products</Link>
        </li>
        <li
          onMouseEnter={handleHover}
          className="relative"
        >
          <Link href="/">Tuning</Link>
        </li>
        <li
          onMouseEnter={handleHover}
          className="relative"
        >
          <Link href="/">Contact</Link>
        </li>
        <li
          onMouseEnter={handleHover}
          className="relative"
        >
          Search
        </li>
        <Selector 
          left={selector.left}
          width={selector.width}
        />
      </ul>
      {isScrolled && 
        <motion.div 
          className="absolute right-5"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}

          transition={{ 
            duration: 0.3, 
            delay: 0.5, 
            ease: "linear" 
          }}
        >
          <Link href="/">
            <ShoppingCart />
          </Link>  
        </motion.div>
      }
    </nav>
  )
}

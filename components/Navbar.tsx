"use client"

import Selector from "@/components/Selector";
import ShoppingCart from "@/components/ShoppingCart";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Anchor from "./Anchor";
import Button from "./Button";
import MenuButton from "./MenuButton";

type NavbarProps = {
  setMenuAction: React.Dispatch<React.SetStateAction<boolean>>
  menu: boolean
}

const nav = ["Home", "Products", "Tuning", "Contact", "Search"]

const iconAnimate = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { 
    duration: 0.3, 
    delay: 0.5, 
    ease: "linear" 
  }
}

export default function Navbar({ menu, setMenuAction }: NavbarProps) {
  const [selector, setSelector] = useState({ left: 0, width: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWindow, setIsWindow] = useState(false);
  const [isBurger, setIsBurger] = useState(false);

  useEffect(() => {
    const activateScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 120);
    }

    const activateWindow = () => {
      setIsWindow(window.innerWidth <= 768);
      setIsBurger(window.innerWidth <= 550);
      if (window.innerWidth > 550) {
        setMenuAction(false);
      }
    }

    activateScroll();
    activateWindow();
    window.addEventListener("scroll", activateScroll);
    window.addEventListener("resize", activateWindow);

    return () => {
      window.removeEventListener("scroll", activateScroll);
      window.removeEventListener("resize", activateWindow);
    }
  }, [setMenuAction])

  const handleHover = (event: React.MouseEvent<HTMLLIElement>) => {
    const { offsetLeft, offsetWidth } = event.currentTarget;
    setSelector({ left: offsetLeft, width: offsetWidth });
  };

  const toggleHamburger = () => {
    setMenuAction(prev => !prev);
  }

  return (
    <nav 
      style={{
        width: isWindow || isScrolled ? "100%" : "1000px",
        clipPath: isWindow || isScrolled ? "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" : "polygon(0% 0, 100% 0, 95% 100%, 5% 100%)",
        background: isWindow || isScrolled ? "rgb(57, 58, 58)" : "rgba(17, 19, 20, 0.7)",
      }}
      className="transition-all duration-500"
    >
    {!isBurger ? <div className="w-full h-full flex items-center justify-between px-5 relative md:justify-center">
        {(!isWindow && isScrolled) && 
          <motion.div 
            className="absolute left-5"
            {...iconAnimate}
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
        <ul className="h-full flex flex-row items-center gap-x-10 relative font-noto-sans font-normal text-white">
          {nav.map(item => (
            <li
              onMouseEnter={handleHover}
              className="relative"
              key={item}
            >
              <Anchor href="/">{item}</Anchor>
            </li>
          ))}
          <Selector 
            left={selector.left}
            width={selector.width}
          />
        </ul>
        {(isWindow || isScrolled) && 
          <motion.div 
            className="absolute right-5"
            {...iconAnimate}
          >
            <Anchor href="/">
              <ShoppingCart />
            </Anchor>  
          </motion.div>
        }
      </div> : <div className="w-full h-full flex items-center justify-between px-5">
        <Button onClick={toggleHamburger}>
          <MenuButton isOpen={menu}/>
        </Button>
        <div className="w-[110px] h-[45px] relative">
          <Image 
            src="/logo.webp" 
            alt="logo"
            className="object-cover"
            fill
          />     
        </div>
      </div>}
    </nav>
  )
}

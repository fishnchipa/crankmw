import Image from "next/image";
import MenuButton from "./MenuButton";
import Anchor from "../Anchor";
import Selector from "./Selector";
import ShoppingCart from "../icons/ShoppingCart";
import Button from "../Button";
import { useNavbar } from "@/hooks/useNavbar";
import { motion } from "motion/react";

type NavbarProps = {
  setMenuAction: React.Dispatch<React.SetStateAction<boolean>>
  menu: boolean
}

const nav = [
  {
    title: "Home",
    src: "/"
  }, 
  {
    title: "Products",
    src: "/products"
  },
  {
    title: "Tuning",
    src: "/tuning"
  },
  {
    title: "Contact",
    src: "/contact"
  },
  {
    title: "Search",
    src: "/"
  }
]

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

  const {
    isWindow,
    isScrolled,
    isBurger,
    selector,
    active,
    handleHover,
    toggleHamburger,
    switchSelector
  } = useNavbar(setMenuAction);

  return (
    <nav 
      style={{
        width: isWindow || isScrolled || active ? "100%" : "1000px",
        clipPath: isWindow || isScrolled || active ? "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" : "polygon(0% 0, 100% 0, 95% 100%, 5% 100%)",
        background: isWindow || isScrolled || active ? "rgb(57, 58, 58)" : "rgba(17, 19, 20, 0.7)",
      }}
      className="transition-all duration-500"
    >
    {!isBurger ? <div className="w-full h-full flex items-center justify-between px-5 relative md:justify-center">
        {(!isWindow && (isScrolled || active)) && 
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
        <ul className="h-full flex flex-row items-center relative font-noto-sans font-normal text-white">
          {nav.map(item => (
            <li
              onMouseEnter={handleHover}
              onMouseLeave={switchSelector}
              className="relative px-5"
              key={item.title}
            >
              <Anchor href={item.src}>{item.title}</Anchor>
            </li>
          ))}
          <Selector 
            left={selector.left}
            width={selector.width}
          />
        </ul>
        {(isWindow || isScrolled || active) && 
          <motion.div 
            className="absolute right-5"
            {...iconAnimate}
          >
            <Anchor href="/cart">
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

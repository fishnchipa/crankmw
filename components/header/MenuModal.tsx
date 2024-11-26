import { motion } from "motion/react"
import { useRouter } from "next/navigation"
import Button from "../Button"

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
}

const framerText = (delay: number) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.2 + delay / 10,
    },
  }
}

const nav = ["Home", "Products", "Tuning", "Contact", "Search"]


type MenuModalProps = {
  setMenuAction: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MenuModal({ setMenuAction }: MenuModalProps) {
  const router = useRouter();

  const activate = () => {
    router.push("/")
    setMenuAction(false);
  }

  return (
    <motion.div 
      className="w-full h-[calc(100vh-70px)] fixed top-[70px] bg-[#4A4A4A] z-10"
      {...framerSidebarPanel}
    >
      <ul className="flex flex-col text-[16px] text-white">
        {nav.map((item, index) => (
          <li key={index}>
            <Button onClick={activate} className="w-full h-10 hover:bg-[#272727] text-left px-5">
              <motion.span
                {...framerText(index)} 
              >
                {item}
              </motion.span>
            </Button>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

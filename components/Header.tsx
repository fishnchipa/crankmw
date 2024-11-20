"use client"

import Navbar from "@/components/Navbar";
import { useState } from "react";
import MenuModal from "./MenuModal";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [menu, setMenu] = useState(false); 

  return (
    <header className="w-full h-[70px] flex justify-center fixed top-0 z-10">
      <AnimatePresence>
        {menu && <MenuModal setMenuAction={setMenu}/>}
      </AnimatePresence>
      <Navbar setMenuAction={setMenu} menu={menu}/>
    </header>
  )
}

"use client";

import { useState } from "react";
import MenuModal from "./MenuModal";
import Navbar from "./Navbar";
import { AnimatePresence } from "motion/react";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="w-full h-[70px] flex justify-center fixed top-0 z-20">
      <AnimatePresence>
        {menu && <MenuModal setMenuAction={setMenu} />}
      </AnimatePresence>
      <Navbar setMenuAction={setMenu} menu={menu} />
    </header>
  );
}

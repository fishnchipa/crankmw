"use client"

import Link from "next/link";
import Selector from "@/components/Selector";
import { useState } from "react";

export default function Navbar() {
  
  const [selectorPosition, setSelectorPosition] = useState({ left: 0, width: 0 });

  const handleHover = (event: React.MouseEvent<HTMLLIElement>) => {
    const { offsetLeft, offsetWidth } = event.currentTarget;
    setSelectorPosition({ left: offsetLeft, width: offsetWidth });
  };

  return (
    <nav className="w-[1520px] flex items-center justify-center font-noto-sans font-normal relative text-white clip-slant bg-[#111314] bg-opacity-[79%]">
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
          left={selectorPosition.left}
          width={selectorPosition.width}
        />
      </ul>
    </nav>
  )
}

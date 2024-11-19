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
    <nav className="flex items-center font-noto-sans font-normal relative">
      <ul className="flex flex-row gap-x-10 relative">
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
      </ul>
      <Selector 
        left={selectorPosition.left}
        width={selectorPosition.width}
      />
    </nav>
  )
}

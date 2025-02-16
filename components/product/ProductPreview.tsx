"use client";

import Image from "next/image";
import { useState } from "react";

export type ProductImage = {
  image: string;
  alt: string;
};

type ProductPreviewProps = {
  preview: ProductImage[];
};

export default function ProductPreview({ preview }: ProductPreviewProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-row w-full gap-x-[52px] h-[550px]">
      <div className="flex flex-col gap-y-[10px]">
        {preview.map((view, index) => {
          return (
            <div
              className={`flex items-center justify-center relative w-[130px] h-[100px] border rounded-md bg-white overflow-hidden ${active === index ? "border-[#FAA500]" : "border"}`}
              key={index}
            >
              <button onClick={() => setActive(index)}>
                <Image
                  src={view.image}
                  alt={view.alt}
                  width={130}
                  height={100}
                />
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-full rounded-md relative">
        <Image
          src={preview[active].image}
          alt={preview[active].alt}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

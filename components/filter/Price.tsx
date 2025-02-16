"use client";

import ReactSlider from "react-slider";
import "@/styles/slider.css";
import React, { useState } from "react";
import { z } from "zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PricingFilterProps = {
  initialMax: number;
};

export default function Price({ initialMax }: PricingFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const inputSchema = z.number().gte(0).lte(initialMax);
  const [factor] = useState(initialMax / 100);
  const [min, setMin] = useState(() => {
    const min = parseInt(searchParams.get("min") ?? "0");
    const max = parseInt(searchParams.get("max") ?? initialMax.toString());
    const result = z
      .number()
      .lt(initialMax)
      .lt(max)
      .catch(0)
      .parse(Math.round((min / initialMax) * 100));
    return result;
  });
  const [max, setMax] = useState(() => {
    const min = parseInt(searchParams.get("min") ?? "0");
    const max = parseInt(searchParams.get("max") ?? initialMax.toString());
    const result = z
      .number()
      .lte(initialMax)
      .gt(min)
      .catch(100)
      .parse(Math.round((max / initialMax) * 100));
    return result;
  });

  const updateValue = (value: number[]) => {
    setMin(value[0]);
    setMax(value[1]);
  };

  const updateMin = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const safeParse = inputSchema.safeParse(parseInt(e.currentTarget.value));
    setMin(!safeParse.success || safeParse.data >= max ? 0 : safeParse.data);
  };

  const updateMax = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const safeParse = inputSchema.safeParse(parseInt(e.currentTarget.value));
    setMax(
      !safeParse.success || safeParse.data <= min ? initialMax : safeParse.data,
    );
  };

  const updateQuery = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (min === 0) {
      params.delete("min");
    } else {
      params.set("min", Math.floor(min * factor).toString());
    }

    if (max === 100) {
      params.delete("max");
    } else {
      params.set("max", Math.floor(max * factor).toString());
    }

    router.push(pathname + "?" + params.toString());
  };

  return (
    <>
      <ReactSlider
        className="slider"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        onChange={updateValue}
        onAfterChange={updateQuery}
        value={[min, max]}
        minDistance={1}
      />
      <div className="flex flex-row justify-between items-center mx-2 text-[18px]">
        <div className="relative w-[45%]">
          <span className="absolute bottom-1">$</span>
          <input
            className="w-full border-t-0 border-l-0 border-r-0 pb-0 text-end focus:placeholder-transparent focus:ring-0 focus:border-west-orange focus:outline-none"
            value={Math.floor(min * factor)}
            onChange={updateMin}
            onBlur={updateQuery}
          />
        </div>
        <hr className="w-[8px] h-[2px] bg-black" />
        <div className="relative w-[45%]">
          <span className="absolute bottom-1">$</span>
          <input
            className="w-full border-t-0 border-l-0 border-r-0 text-end pb-0 focus:outline-none focus:ring-0 focus:border-west-orange focus:placeholder-transparent"
            value={Math.floor(max * factor)}
            onChange={updateMax}
            onBlur={updateQuery}
          />
        </div>
      </div>
    </>
  );
}

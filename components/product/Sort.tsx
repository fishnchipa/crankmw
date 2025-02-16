"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type SortProps = {
  sortBy: string | string[] | undefined;
};

export default function Sort({ sortBy }: SortProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const sortType = e.currentTarget.value;
    if (sortType === "featured") {
      params.delete("sortby");
    }
    {
      params.set("sortby", sortType);
    }

    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="w-full flex justify-end items-center text-[14px] mt-8 mb-4 text-[#393A3A]">
      <span className="leading-4">Sort By: </span>
      <select
        className="border-0 text-[14px] focus:border-0 focus:ring-0 ring-0 py-0 hover:cursor-pointer leading-4"
        onChange={updateQuery}
        defaultValue={sortBy}
      >
        <option value="featured">Featured</option>
        <option value={"price-ascending"}>Price: Low to High</option>
        <option value={"price-descending"}>Price: High to Low</option>
        <option value={"title-ascending"}>Alphabetically: A - Z</option>
        <option value={"title-descending"}>Alphabetically: Z - A</option>
      </select>
    </div>
  );
}

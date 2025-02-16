"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";

export default function NumPagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // TODO: Prefetch page using cursor pagination, for now have as offset
  const previousPage = () => {
    const page = searchParams.get("page");
    const params = new URLSearchParams(searchParams.toString());

    if (page) {
      const parsedPage = z.number().safeParse(parseInt(page));

      if (parsedPage.success) {
        const newPage = parsedPage.data - 1;
        if (newPage === 0) {
          params.delete("page");
        } else {
          params.set("page", newPage.toString());
        }
      }
    }
    router.push(pathname + "?" + params.toString());
  };

  const nextPage = () => {
    const page = searchParams.get("page");
    const params = new URLSearchParams(searchParams.toString());

    if (page) {
      const parsedPage = z.number().safeParse(parseInt(page));

      if (parsedPage.success) {
        const newPage = parsedPage.data + 1;
        if (newPage === 0) {
          params.delete("page");
        } else {
          params.set("page", newPage.toString());
        }
      }
    } else {
      params.set("page", "1");
    }

    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="flex justify-center items-center gap-x-10 mb-10">
      <button onClick={previousPage}>
        <ChevronLeft />
      </button>
      <button onClick={nextPage}>
        <ChevronRight />
      </button>
    </div>
  );
}

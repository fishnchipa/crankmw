"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  amount: number;
  className?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, amount, className, ...props }, ref) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      setChecked(searchParams.has("filter", label));
    }, [searchParams, label]);

    const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams.toString());
      if (e.currentTarget.checked) {
        params.append("filter", label);
      } else {
        params.delete("filter", label);
      }

      router.push(pathname + "?" + params.toString(), { scroll: false });
    };

    return (
      <label
        className={cn(
          "flex flex-row gap-x-1 items-center text-[16px]",
          className,
        )}
      >
        <input
          className="focus:ring-0 text-[#FAA500] rounded-sm w-4 h-4 bg-[#D2D2D2] border border-[#ABABAB]"
          type="checkbox"
          checked={checked}
          onChange={updateQuery}
          value={label}
          ref={ref}
          {...props}
        />
        {label}
        <span className="font-bold">({amount})</span>
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
export default Checkbox;

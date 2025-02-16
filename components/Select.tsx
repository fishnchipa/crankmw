"use client";

import { cn } from "@/lib/utils";
import { forwardRef, SelectHTMLAttributes, useEffect, useState } from "react";
import { FieldError } from "react-hook-form";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  initial?: string | number;
  label?: string;
  error?: FieldError;
  className?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ initial, label, error, className, children, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);

    useEffect(() => {
      if (initial) {
        handleFocus();
      }
    }, [initial]);

    // TODO: Fix Select input so that classname is passed to select element
    return (
      <div
        className={cn(
          "w-full relative group flex flex-col text-white",
          className,
        )}
      >
        <select
          ref={ref}
          onFocus={handleFocus}
          {...props}
          defaultValue={initial ? initial : "default"}
          className={`w-full h-[50px] bg-transparent border-2 p-2 focus:ring-0 ring-0 outline-none transition-all duration-400 ease-in-out transform focus:border-[#FAA500] hover:cursor-pointer ${isFocused ? "border-[#FAA500]" : "border-white"}`}
        >
          <option value="default" disabled hidden></option>
          {children}
        </select>
        {label && (
          <span
            className={`absolute left-3 top-[12px] text-[18px] transition-all duration-200 ease-in-out transform pointer-events-none ${isFocused ? " -translate-y-6 translate-x-3 bg-[#4A4A4A] px-1 text-sm" : ""}`}
          >
            {label}
          </span>
        )}
        {error && <span className="text-[12px] ">{error.message}</span>}
      </div>
    );
  },
);

Select.displayName = "Select";
export default Select;

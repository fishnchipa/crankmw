"use client";

import { cn } from "@/lib/utils";
import { forwardRef, TextareaHTMLAttributes, useEffect, useState } from "react";
import { FieldError } from "react-hook-form";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  initial?: string | number;
  label?: string;
  error?: FieldError;
  className?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ initial, label, error, className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);

    useEffect(() => {
      if (initial) {
        handleFocus();
      }
    }, [initial]);

    return (
      <div className={cn("relative group flex flex-col", className)}>
        <textarea
          ref={ref}
          onFocus={handleFocus}
          {...props}
          className="w-full h-[200px] bg-transparent border border-gray-400 rounded-md p-2 focus:ring-0 ring-0 outline-none transition-all duration-400 ease-in-out transform focus:border-[#FAA500]"
        />
        {label && (
          <span
            className={` absolute left-2 top-[14px] text-[16px] transition-all duration-200 ease-in-out transform pointer-events-none ${isFocused ? " -translate-y-6 translate-x-3 bg-white px-1 text-sm" : ""}`}
          >
            {label}
          </span>
        )}
        {error && <span className="text-[12px] ">{error.message}</span>}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
export default TextArea;

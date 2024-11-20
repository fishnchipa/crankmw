
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export default function Button({className, children, ...props}: ButtonProps) {

  return (
    <button
      {...props}
      className={className}
    >
    {children} 
    </button> 
  )

}

import { cn } from "@/lib/utils"


interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  amount: number
  className?: string
}


export default function Checkbox({
  label, 
  amount,
  className,
  ...props
}: CheckboxProps) {

  return (
    <label 
      className={cn("flex flex-row gap-x-1 items-center text-[16px]", className)}
    >
      <input 
        className="focus:ring-0 text-[#FAA500] rounded-sm w-4 h-4 bg-[#D2D2D2] border border-[#ABABAB]"
        type="checkbox"
        {...props} 
      />
      {label}
      <span className="font-bold">({amount})</span>
    </label>
  )
}

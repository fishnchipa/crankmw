import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { Dispatch, FormEvent, SetStateAction } from "react";

type QuantityState = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

type QuantityProps = {
  quantity: QuantityState;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
};

// TODO: Change so that button effects input and add disabled loading state
export default function Quantity({
  quantity,
  className,
  type = "button",
}: QuantityProps) {
  const increment = () => {
    quantity.setValue((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity.value !== 0) {
      quantity.setValue((prev) => prev - 1);
    }
  };

  const onInput = (e: FormEvent<HTMLInputElement>) => {
    if (!isNaN(+e.currentTarget.value)) {
      quantity.setValue(+e.currentTarget.value);
    }
  };

  return (
    <div
      className={cn(
        "w-[122px] flex flex-row h-[40px] bg-white px-1 border-2 border-black ",
        className,
      )}
    >
      <button onClick={increment} type={type}>
        <Plus size={20} />
      </button>
      <input
        className="border-0 w-full text-center focus:outline-none focus:border-0 
        focus:ring-0 bg-transparent"
        name="quantity"
        type="input"
        value={quantity.value}
        onInput={onInput}
      />
      <button onClick={decrement} type={type}>
        <Minus size={20} />
      </button>
    </div>
  );
}

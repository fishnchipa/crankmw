import { Minus, Plus } from "lucide-react";
import { Dispatch, FormEvent, MouseEvent, SetStateAction } from "react";


type QuantityProps = {
  value: number,
  setValue: Dispatch<SetStateAction<number>>
}

export default function Quantity({
  quantity
}: {quantity: QuantityProps}) {  

  const increment = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    quantity.setValue(prev => prev+1)
  }
  
  const decrement = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    if (quantity.value !== 0) {
      quantity.setValue(prev => prev-1)
    }
  }

  const onInput = (e: FormEvent<HTMLInputElement>) => {
    if (!isNaN(+e.currentTarget.value)) {
      quantity.setValue(+e.currentTarget.value)
    }
  }

  return (
    <div 
      className="w-[122px] flex flex-row h-[40px] bg-white rounded-md px-1 border border-black "
    >
      <button onClick={increment}><Plus size={20}/></button>
      <input 
        className="border-0 w-full text-center focus:outline-none focus:border-0 
        focus:ring-0"
        type="input"
        value={quantity.value}
        onInput={onInput}
      />
      <button onClick={decrement}><Minus size={20}/></button>
    </div>
  )
}



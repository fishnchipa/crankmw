import { Item } from "@/lib/types/product"

type ProductContentProps = {
  title: string,
  sku: string,
  price: number,
  content: Item[]
  discount?: number
}

export default function ProductContent({ title, sku, price, discount, content }: ProductContentProps) {
  
  return (
    <div className="flex flex-col gap-y-[20px]">
      <div>
        <h1 className="text-[28px] font-semibold">{title}</h1>
        <p className="text-[16px] text-gray-500">SKU: {sku}</p>
      </div>
      <div className="flex flex-row gap-x-10 text-[22px]">
        <h1 className="text-red-500">${discount}.00</h1>
        <h1 className="line-through">${price}.00</h1>
      </div>
      <hr className="bg-soft-gray"/>
      <div className="flex flex-col gap-y-[20px] font-light text-[15px] text-soft-black">
        {content.map((item, key) => {
          if (item.type === "text") {
            return (
              <p key={key}>{item.value}</p>
            )
          } else if (item.type ==="list") {
            return (
              <ul key={key} className="list-disc flex flex-col gap-2 pl-5">
                {item.value.map((value, key) => {
                  return (
                    <li key={key}>{value}</li>
                  )
                })}
              </ul>
            )
          }
        })}
      </div>
    </div>

  )
}


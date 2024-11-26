
export type Item = 
  | { type: "list", value: string[] }
  | { type: "text", value: string }


export type CartProduct = {
  id: string,
  quantity: number,
  title: string,
  price: number
}


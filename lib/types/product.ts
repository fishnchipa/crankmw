
type ImageType = {
  src: string,
  alt: string
}

export type ProductType = {
  id: string,
  title: string,
  sku: string,
  image: ImageType,
  preview: ImageType[],
  content: Item[],
  price: number,
  discount?: number 
}

export type Item = 
  | { type: "list", value: string[] }
  | { type: "text", value: string }

export type CartProduct = {
  id: string,
  quantity: number,
  title: string,
  price: number
}


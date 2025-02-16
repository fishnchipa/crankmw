export type CartProduct = {
  id: string;
  quantity: number;
  title: string;
  price: number;
};

export type SortType =
  | "Featured"
  | "Price: Low to High"
  | "Price: High to Low"
  | "Alphabetically: A - Z"
  | "Alphabetically: Z - A";

export type Quantity = {
  quantity: number;
};

export type DescriptionContent =
  | {
      value: string;
      type: "section";
    }
  | {
      value: string[];
      type: "list";
    };

export type DescriptionType = {
  side: DescriptionContent[];
  bottom: DescriptionContent[];
};

export type ProductPageType = {
  id: string;
  title: string;
  price: number;
  discount: number | null;
  description: DescriptionType | null;
  images: {
    image: string;
    alt: string;
  }[];
};

export type ProductCart = {
  id: string,
  title: string,
  image: string,
  alt: string,
  price:number,
  priceId: string,
  discount: number | null
  discountId: string | null
  quantity: number 
}

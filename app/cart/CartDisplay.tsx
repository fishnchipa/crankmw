import CartItem from "@/components/cart/CartItem";
import CartTotal from "./CartTotal";
import { ProductCart } from "@/lib/types/product";

type CartDisplayProps = {
  cartItems: ProductCart[]
};

export default function CartDisplay({ cartItems }: CartDisplayProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-y-2">
        <div className="flex text-[18px]">
          <div className="basis-[55%]">Product</div>
          <div className="basis-[30%]">Quantity</div>
          <div className="flex justify-end basis-[15%]">Price</div>
        </div>
        <div className="flex flex-col border-y gap-y-5">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-end">
        <CartTotal cartItems={cartItems} />
      </div>
    </div>
  );
}

import { getSession } from "@/lib/session";
import { getProductList } from "@/lib/db/queries";
import Button from "@/components/Button";
import CartDisplay from "./CartDisplay";
import EmailList from "./EmailList";

export default async function Home() {
  const session = await getSession();
  const cartItems = await getProductList(session?.cart);
  return (
    <div className="min-h-[100vh] flex py-[70px] justify-center text-[24px]">
      <div className="w-[1500px] mx-5 flex flex-col mt-[60px] gap-y-5">
        <h1 className="font-bold text-[34px]">YOUR CART</h1>
        {cartItems ? (
          <CartDisplay cartItems={cartItems} />
        ) : (
          <div className="w-full flex justify-center items-center gap-y-5 mt-16">
            <div className="flex flex-col justify-center items-center px-5 gap-y-5">
              <span>CART IS EMPTY</span>
              <Button
                type="submit"
                label="CONTINUE SHOPPING"
                className="px-16"
              />
            </div>
          </div>
        )}
        <div className="w-full flex justify-center mt-32">
          <EmailList />
        </div>
      </div>
    </div>
  );
}

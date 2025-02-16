import { MoveRight } from "lucide-react";

export default function EmailList() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <span className="text-[16px]">
        Join our email list to know our project updates, exclusive offers, and
        more.
      </span>
      <form className="flex justify-between items-center relative w-fit">
        <input
          type="text"
          className="h-[45px] w-[395px] px-2 rounded-md"
          placeholder="Email"
        />
        <button className="absolute right-2">
          <MoveRight size={28} />
        </button>
      </form>
    </div>
  );
}

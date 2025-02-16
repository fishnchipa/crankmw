export default function ProductFallback() {
  return (
    <div className="flex flex-col items-center group text-center gap-y-2">
      <div className="w-full aspect-square rounded-2xl border-happy-gray border-[1px] bg-[#4A4A4A]"></div>
      <div className="flex flex-col items-center w-full gap-y-1">
        <div className="w-full h-[16px] bg-[#4A4A4A] rounded-2xl"></div>
        <div className="w-full h-[16px] bg-[#4A4A4A] rounded-2xl"></div>
      </div>
    </div>
  );
}

import Image from "next/image";
import TuneDesc from "./TuneDesc";
import TuneTitle from "./TuneTitle";

export default function TuneSection() {
  return (
    <div className="w-[1206px] flex flex-col lg:flex-row items-center lg:justify-between px-5 gap-y-10">
      <div className="flex flex-col gap-y-[100px]">
        <TuneTitle />
        <TuneDesc />
      </div>
      <div className="w-[250px] h-[200px] sm:w-[450px] sm:h-[400px] relative">
        <Image
          src="/tune.jpeg"
          alt="tune"
          fill
          className="rounded-[30px] object-cover"
        />
      </div>
    </div>
  );
}

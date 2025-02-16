import Image from "next/image";
import TuneForm from "./TuneForm";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-[70px] text-[24px] gap-y-32">
      <div className="flex items-center w-full h-[438px] relative">
        <div className="w-full h-full absolute -z-10">
          <Image
            src={"/tuning_bg.svg"}
            fill
            alt="tuning_bg"
            className="h-[438px] object-cover"
          />
        </div>
        <section className="flex flex-col gap-y-2 ml-[250px] w-[600px] font-bold text-white">
          <h1 className="text-[34px] leading-[40px]">
            MAKE SEAMLESS INSTALLATIONS WITH OUR EXPERTISE
          </h1>
          <p className="text-[16px]">FAST COMPETITIVE DEPENDABLE</p>
        </section>
      </div>
      <TuneForm />
    </div>
  );
}

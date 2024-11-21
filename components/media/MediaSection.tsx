import MediaCarousel from "./MediaCarousel";

export default function MediaSection() {
  
  return (
    <div className="flex justify-center w-full mb-14">

      <div className="w-full xl:w-[1300px] flex flex-col items-center gap-y-[75px] mt-[100px]">
        <div className="flex flex-col items-center">
          <h2 className="text-[15px] font-light">OUR INSTAGRAM</h2>
          <h1 className="text-[25px]">CRANK IN MOTION</h1>
        </div> 
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-[15px] text-soft-black font-extralight">Crank Motor Werkes</h2>
          <MediaCarousel />
        </div>
      </div>
    </div>

  )

}



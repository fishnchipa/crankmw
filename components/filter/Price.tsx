import ReactSlider from "react-slider";
import "@/styles/slider.css";


type PricingFilterProps = {
  max: number
}

export default function Price({ max }: PricingFilterProps) {
   
  return (
    <>
      <ReactSlider
        className="slider"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        defaultValue={[0, max]}
        onAfterChange={value => console.log(value)}
        minDistance={1}
      />
      <div className="flex flex-row justify-between items-center mx-2 text-[18px]">
        <div className="relative w-[45%]">
          <span className="absolute bottom-1">$</span>
          <input 
            className="w-full border-t-0 border-l-0 border-r-0 pb-0 text-end focus:placeholder-transparent focus:ring-0 focus:border-west-orange focus:outline-none"
            placeholder="0"
          />
        </div>
        <hr className="w-[8px] h-[2px] bg-black"/>
        <div className="relative w-[45%]">
          <span className="absolute bottom-1">$</span>
          <input 
            className="w-full border-t-0 border-l-0 border-r-0 text-end pb-0 focus:outline-none focus:ring-0 focus:border-west-orange focus:placeholder-transparent" 
            placeholder={max.toString()}
          />
        </div>
      </div>
    </> 
  )
}


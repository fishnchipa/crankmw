import Image from "next/image"
import Star from "../icons/Star"

type ReviewSlideProps = {
  name: string,
  description: string,
  date: string
  img: string
  alt: string
}

export default function ReviewSlide({name, description, date, img, alt}: ReviewSlideProps) {

  return (
    <div className="h-[534px] flex flex-col justify-end relative">
      <div className="absolute w-[200px] h-[200px] rounded-[200px] overflow-hidden top-0 left-1/2 -translate-x-1/2">
        <Image 
          src={img}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="h-[434px] flex flex-col justify-between bg-white rounded-2xl p-4 pt-[116px]">
        <p className="text-[12px] leading-6 xsm:leading-8 font-noto-sans">{description}</p>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col ">
            <span className="text-[18px]">{name}</span>
            <span className="text-[12px] text-[#BFBFBF]">On {date}</span>
          </div>
          <div className="flex flex-row gap-x-1">
            {Array.from({length: 5}).map((_, key) => {
              return (
                <Star key={key}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}


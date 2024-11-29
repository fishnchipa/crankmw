"use client"

import { brands } from "@/lib/mock"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/autoplay';
import '@/styles/carousel.css'

export default function Brand() {


  return (
    <div className="w-full flex flex-col -mt-[98px] z-10 bg-white pt-24">
      <div className="flex flex-col justify-center items-center w-full text-[#4A4A4A]">
        <h1 className="text-[34px] font-bold text-center">Trusted By Leading Brands</h1>
        <span className="text-[16px]">Product for all your tuning needs</span>
      </div> 
      <div className="h-fit w-full flex justify-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          freeMode={true}
          loop={true}
          modules={[Autoplay]}
          speed={5000}
          className="carousel-swiper h-[292px] flex flex-row items-center"
          autoplay={{
            delay: 0,
          }}
          breakpoints={
            {
              1280: {
                slidesPerView: 4
              },
              640: {
                slidesPerView: 3
              },
              400: {
                slidesPerView: 2
              }
            }
          }
        >
          {brands.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <div className="w-full h-full flex justify-center items-center">
                  <Image alt={item.src} src={item.src} width={300} height={300}/>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

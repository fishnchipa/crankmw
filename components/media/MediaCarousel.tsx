"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/autoplay';
import '@/styles/carousel.css'
import { Autoplay } from "swiper/modules";

const media = [
  {
    src: "/review1.png",
    alt: "logo",
    link: "/cart"
  },
  {

    src: "/review1.png",
    alt: "logo",
    link: "/cart"
  },
  {
    src: "/review1.png",
    alt: "logo",
    link: "/cart"
  },
  {
    src: "/review1.png",
    alt: "logo",
    link: "/cart"
  },
  {
    src: "/review1.png",
    alt: "logo",
    link: "/cart"
  },
  {
    src: "/review1.png",
    alt: "logo",
    link: "/cart"
  },
  {
    src: "/review1.png",
    alt: "logo",
    link: "/cart"
  },
]


export default function MediaCarousel() {
  return (
    <div className="h-fit w-full flex flex-row justify-center">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        freeMode={true}
        loop={true}
        modules={[Autoplay]}
        speed={5000}
        className="carousel-swiper h-[292px] flex flex-row items-center bg-gray-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
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
        {media.map((item, key) => {
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
  )
}



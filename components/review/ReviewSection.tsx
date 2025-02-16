"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { reviews } from "@/lib/mock";
import ReviewSlide from "./ReviewSlide";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/review.css";
import Ellipse from "../icons/Ellipse";

export default function ReviewSection() {
  return (
    <div className="w-full h-[826px] flex justify-center bg-gradient-to-t from-[#494949] bg-[#363636] pt-5 relative overflow-hidden mt-60">
      <Ellipse className="absolute bottom-0" />
      <div className="w-full px-5 xl:w-[1206px]">
        <section className="text-white">
          <h1 className="text-[34px] font-bold leading-10">
            DONT JUST TAKE IT FROM US
          </h1>
          <h3 className="text-[16px]">
            TAKE A LOOK AT OUR SATISFIED CUSTOMERS
          </h3>
        </section>
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          navigation
          slidesPerView={1}
          className="flex flex-col mt-24 h-full"
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
          }}
        >
          {reviews.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <ReviewSlide
                  name={item.name}
                  description={item.desc}
                  img={item.img}
                  date={item.date}
                  alt={item.alt}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

"use client"; // Ensures this is a client component

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "./Card";

const SwiperComponent = () => {
  return (
    <div className="w-full max-w-[750px] max-h-[750px] rounded-full">
      <Swiper
        // slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        // loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            //   spaceBetween: 30,
            direction: "horizontal",
          },
          1024: {
            slidesPerView: 1,
            direction: "vertical",
            //   spaceBetween: 30,
          },
        }}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        // pagination={{ clickable: true }}
        // navigation={true}
        // scrollbar={{ draggable: true }}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        // speed={800}
        keyboard={{ enabled: true }}
        modules={[
          Pagination,
          Navigation,
          Scrollbar,
          Autoplay,
          Mousewheel,
          Keyboard,
        ]}
        className="home-page-swiper-container w-full max-w-[750px] h-full max-h-[750px] min-h-[750px] rounded-full border-[10px] mob:border-none mob:rounded-[50px] border-gold mob:bg-transparent bg-secondary mob:max-w-full mob:h-full"
      >
        {/* {Array.from({ length: 10 }).map((_, index) => ( */}
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Carlos Fortin"
            description="Very professional team and attentive to my exact vision. Not only did i receive what i asked for, the team actually went above and beyond my expectations with my website if your looking for a professional efficient team you found it "
          />
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Rhonda"
            description="Very professional team and attentive to my exact vision. Not only did i receive what i asked for, the team actually went above and beyond my expectations with my website if your looking for a professional efficient team you found it"
          />
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Manuela Mora"
            description="Very professional team and attentive to my exact vision. Not only did i receive what i asked for, the team actually went above and beyond my expectations with my website if your looking for a professional efficient team you found it"
          />
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Daniel Ortiz"
            description="Very professional team and attentive to my exact vision. Not only did i receive what i asked for, the team actually went above and beyond my expectations with my website if your looking for a professional efficient team you found it"
          />
        </SwiperSlide>
        {/* ))} */}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

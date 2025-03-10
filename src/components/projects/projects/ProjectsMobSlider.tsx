"use client";

import Image from "next/image";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ReusableProject from "./ReusableProject";

import foundation1890 from "@/public/images/projects/foundation1890mob.png";
import bulldog from "@/public/images/projects/bulldogmob.png";
import bulkbrothers from "@/public/images/projects/bulkbromob.png";
import davidBacksmith from "@/public/images/projects/davidmob.png";
import eee from "@/public/images/projects/eeemob.png";
import foodie from "@/public/images/projects/foodiemob.png";
import iviry from "@/public/images/projects/ivirymob.png";
import selectHeal from "@/public/images/projects/selecthealmob.png";
import tactIq from "@/public/images/projects/tactiqmob.png";
import tenesse from "@/public/images/projects/tenessemob.png";

import movenextbtn from "@/public/images/projects/Next Button.svg";
import moveprevbtn from "@/public/images/projects/Previous Button.svg";
// import { useState } from "react";

const ProjectsMobSlider = () => {
  // const [activeIndex, setActiveIndex] = useState(2);

  const swiper = useSwiper();

  const handleprevbtn = () => {
    swiper?.slidePrev();
  };

  const handleNextvbtn = () => {
    swiper?.slideNext();
  };

  // const handleSlideChange = (swiper) => {
  //   setActiveIndex(swiper.activeIndex);
  // };

  return (
    <div className="parent-div hidden mob:block px-2">
      <div className="swiper-main-div border border-gold rounded-[50px] py-[50px] px-5">
        <Swiper
          autoHeight={true}
          slidesPerView={1}
          initialSlide={0}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Keyboard, Navigation, Scrollbar]}
          className="swiper-container"
        >
          <SwiperSlide className="h-[400px]">
            <ReusableProject
              image={tactIq}
              className="w-full max-w-[604px]"
              overlayText="TactIQ Website"
              buttonHref="https://wearetactiq.com/"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px]">
            <ReusableProject
              image={foundation1890}
              className="w-full max-w-[604px]"
              overlayText="1890 Foundation"
              videoUrl="/videos/1890.mp4"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px]">
            <ReusableProject
              image={tenesse}
              className="w-full max-w-[294px] mob:max-w-full"
              overlayText="Tenessee State University"
              videoUrl="/videos/Tennesse state University.mp4"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px]">
            <ReusableProject
              image={bulldog}
              className="w-full max-w-[294px] mob:max-w-full"
              overlayText="Bulldog"
              buttonHref="/projects/bulldog"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px]">
            {" "}
            <ReusableProject
              image={bulkbrothers}
              className="w-full max-w-[294px] mob:max-w-full"
              overlayText="Bulk Brothers"
              buttonHref="https://bulkbrothersmove.com/"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px]">
            {" "}
            <ReusableProject
              image={eee}
              className="w-full max-w-[294px] mob:max-w-full"
              overlayText="EEE"
              buttonHref="https://www.eeecorpgroup.com/"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px]">
            {" "}
            <ReusableProject
              image={selectHeal}
              className="w-full max-w-[604px] h-full"
              overlayText="Select Healing"
              videoUrl="/videos/select healing.mp4"
            />
          </SwiperSlide>

          <SwiperSlide className="h-[400px]">
            {" "}
            <ReusableProject
              image={davidBacksmith}
              className="w-full max-w-[604px]"
              overlayText=" David Starbuck Smith"
              buttonHref="https://davidstarbucksmith.com/"
            />
          </SwiperSlide>

          <SwiperSlide className="h-[400px]">
            {" "}
            <ReusableProject
              image={iviry}
              className="w-full max-w-[294px] mob:max-w-full"
              overlayText="Iviry"
              buttonHref="/projects/iviry"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[400px]">
            {" "}
            <ReusableProject
              image={foodie}
              className="w-full max-w-[294px] mob:max-w-full"
              overlayText="Foodie"
              buttonHref="/projects/foodie"
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center items-center gap-[34px]">
          <Image
            className="custom-prev"
            onClick={handleprevbtn}
            src={moveprevbtn}
            alt="moveprevbtn"
            // width={47}
            // height={47}
          />

          <Image
            className="custom-next"
            onClick={handleNextvbtn}
            src={movenextbtn}
            alt="movenextbtn"
            // width={47}
            // height={47}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsMobSlider;

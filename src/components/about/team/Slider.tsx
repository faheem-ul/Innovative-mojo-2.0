"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Scrollbar, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ReusableSlide from "./ReusableSlide";
import teamMember from "@/public/images/projects/team-member.png";

// import { useState } from "react";

const TeamSlider = () => {
  // const [activeIndex, setActiveIndex] = useState(2);

  //   const swiper = useSwiper();

  // const handleSlideChange = (swiper) => {
  //   setActiveIndex(swiper.activeIndex);
  // };

  return (
    <div className="team-slider-parent-div">
      <div className="team-slider-swiper-main-div">
        <Swiper
          // onSlideChange={handleSlideChange}
          slidesPerView={1}
          // activeIndex={activeIndex}
          initialSlide={2}
          spaceBetween={20}
          centeredSlides={true}
          // scrollbar={true}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              //   spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              //   spaceBetween: 30,
            },
          }}
          loop={true}
          pagination={true}
          navigation={{
            nextEl: ".custom-next",

            prevEl: ".custom-prev",
          }}
          modules={[Keyboard, Navigation, Scrollbar, Pagination]}
          className="team-slider-mySwiper"
        >
          <SwiperSlide>
            <ReusableSlide
              image={teamMember}
              name="Eric Whitaker"
              role="CEO Innovative Mojo"
              linkedhref="https://www.linkedin.com/in/john-doe-8910541b"
              instahref="https://www.instagram.com/john_doe/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReusableSlide
              image={teamMember}
              name="Darrin Luster"
              role="VP Sales and Marketing"
              linkedhref="https://www.linkedin.com/in/john-doe-8910541b"
              instahref="https://www.instagram.com/john_doe/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReusableSlide
              image={teamMember}
              name="Oan Ali"
              role="Project Manager"
              linkedhref="https://www.linkedin.com/in/john-doe-8910541b"
              instahref="https://www.instagram.com/john_doe/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReusableSlide
              image={teamMember}
              name="Eric Whitaker"
              role="CEO Innovative Mojo"
              linkedhref="https://www.linkedin.com/in/john-doe-8910541b"
              instahref="https://www.instagram.com/john_doe/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReusableSlide
              image={teamMember}
              name="Darrin Luster"
              role="VP Sales and Marketing"
              linkedhref="https://www.linkedin.com/in/john-doe-8910541b"
              instahref="https://www.instagram.com/john_doe/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReusableSlide
              image={teamMember}
              name="Oan Ali"
              role="Project Manager"
              linkedhref="https://www.linkedin.com/in/john-doe-8910541b"
              instahref="https://www.instagram.com/john_doe/"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSlider;

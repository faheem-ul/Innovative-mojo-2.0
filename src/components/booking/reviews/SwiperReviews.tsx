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

import Card from "@/components/home/mojo-effect/Card";

const ReviewsSwiperComponent = () => {
  return (
    <>
      <div
        className="w-full max-w-[750px] max-h-[750px] rounded-full"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Swiper
          spaceBetween={30}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 2,
            releaseOnEdges: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              direction: "horizontal",
            },
            1024: {
              slidesPerView: 1,
              direction: "vertical",
            },
          }}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
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
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Sugein Herrera"
              yellowtext="A Startup's Rave Review for Eric and Team!"
              description="As a new startup, their service was amazing. Eric was knowledgeable, patient, and always provided great insights. I highly recommend them!"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Manuela Mora"
              yellowtext="Seamless Excellence: Innovative MOJO Leads the Way"
              description="Very professional team and attentive to my exact vision. Not only did I receive what I asked for, the team actually went above & beyond my expectations with my website. When I had questions, they were there to guide me in the right direction. If your looking for a professional efficient team, you found it!"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Carlos Fortin"
              yellowtext="MOJO: Turning Skepticism Into Reality"
              description="I was a struggling new business owner until a friend referred me to MOJO. Initially skeptical, I quickly connected with Santiago—he was professional, relatable, and full of innovative ideas. After just a few months, I had to hire four new employees because of the increased work. I highly recommend MOJO!"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Jose Portillo"
              yellowtext="Embracing Success with Innovative Mojo Website Design"
              description="Working with Innovative Mojo Website Design was a pleasure. I couldn’t be happier with the turnout. It was a very enjoyable experience working with the team throughout the project. They had answers for all the questions I threw their way and just made things happen. I cant recommend them enough!"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Mayra Halliday"
              yellowtext="Innovative MOJO's Exceptional Website Mastery"
              description="Innovative MOJO exceeded our expectations by delivering our website in record time. Their professional work constantly earns compliments. Highly recommended."
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Rhonda"
              yellowtext="Mojo's Timely and Exceptional Website Development"
              description="Mojo has developed several websites for me and my clients and have exceeded my expectations and always delivered ahead of schedule."
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* CSS to hide pagination on screens >= 768px (pagination only visible on mobile) */}
      <style jsx>{`
        @media (min-width: 768px) {
          :global(.swiper-pagination) {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default ReviewsSwiperComponent;

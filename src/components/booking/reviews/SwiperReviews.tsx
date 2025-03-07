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
    <div
      className="w-full max-w-[750px] max-h-[750px] rounded-full"
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Swiper
        // slidesPerView={1}
        spaceBetween={30}
        // mousewheel={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 2,
          releaseOnEdges: true,
        }}
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
            heading="Sugein Herrera"
            yellowtext="A Startup's Rave Review for Eric and Team!"
            description="As a new startup, their service was amazing. Eric was knowledgeable, patient, and always provided great insights. I highly recommend them!"
          />
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Manuela Mora"
            yellowtext="Seamless Excellence: Innovative MOJO Leads the Way"
            description="Very professional team and attentive to my exact vision. Not only did I receive what I asked for, the team actually went above & beyond my expectations with my website. When I had questions, they were there to guide me in the right direction. If your looking for a professional efficient team, you found it!"
          />
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Carlos Fortin"
            yellowtext="MOJO: Turning Skepticism Into Reality"
            description="I was a struggling new business owner until a friend referred me to MOJO. Initially skeptical, I quickly connected with Santiago—he was professional, relatable, and full of innovative ideas. After just a few months, I had to hire four new employees because of the increased work. I highly recommend MOJO!"
          />
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Jose Portillo"
            yellowtext="Embracing Success with Innovative Mojo Website Design"
            description="Working with Innovative Mojo Website Design was a pleasure. I couldn’t be happier with the turnout. It was a very enjoyable experience working with the team throughout the project. They had answers for all the questions I threw their way and just made things happen. I cant recommend them enough!"
          />
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Sugein Herrera"
            description="Amazing they are. My representative, Eric, was super knowledgeable and patient. He was very responsive, understood my business and what i was looking for, always offered great suggestions and feedback, and always willing to go above and beyond. Overall the service is amazing and i would definitely recommend them"
          />
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Mayra Halliday"
            yellowtext="Innovative MOJO's Exceptional Website Mastery"
            description="Innovative MOJO exceeded our expectations by delivering our website in record time. Their professional work constantly earns compliments. Highly recommended."
          />
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Rhonda"
            yellowtext="Mojo's Timely and Exceptional Website Development"
            description="Mojo has developed several websites for me and my clients and have exceeded my expectations and always delivered ahead of schedule."
          />
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Jose Portillo"
            description="Working with Innovative MOJO website design was a pleasure. I couldn’t be happier with the turnout. It was a very enjoyable experience working with the team throughout the project. They had answers for all questions I threw their way and just made things happen. i cant recommend them enough!"
          />
        </SwiperSlide>
        <SwiperSlide
          // key={index}
          className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full"
        >
          <Card
            heading="Rhonda"
            description="MOJO has developed several websites for me and my clients and have exceeded my expectations and always delivered ahead of schedule"
          />
        </SwiperSlide>
        {/* ))} */}
      </Swiper>
    </div>
  );
};

export default ReviewsSwiperComponent;

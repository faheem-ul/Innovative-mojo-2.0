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
    <>
      <div
        className="w-full max-w-[720px] max-h-[720px] rounded-full"
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
              heading="Tiffany Murray"
              yellowtext="Innovative MOJO became my beacon of hope"
              description="Innovative MOJO became my beacon of hope after a disastrous first attempt at getting my website done. Their professionalism, quality, and rapid response have not only restored my faith but truly made them the BEST"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Alexi Knight"
              yellowtext="Truly rewarding partner absolutely recommend!"
              description="The team at innovative MOJO possesses that rare blend of speed and quality that has made them a truly rewarding partner. absolutely recommend!"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Daniel Ortiz"
              yellowtext="Delivering top-notch designs"
              description="Handling my high standars with grace and delivering top-notch designs—that’s what MOJO is all about. Looking forward to a long-lasting relationship!"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Mayra Halliday"
              yellowtext="Earns praise for professionalism and high-end feel"
              description="They promised and over-delivered a website that consistently earns us praise for its professionalism and high-end feel"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Sugein Herrera"
              description="Amazing they are. My representative, Eric, was super knowledgeable and patient. He was very responsive, understood my business and what i was looking for, always offered great suggestions and feedback, and always willing to go above and beyond. Overall the service is amazing and i would definitely recommend them"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Manuela Mora"
              description="Very professional team and attentive to my exact vision. Not only did i receive what i asked for, the team actually went above & beyond my expectations with my website. When i had questions, they were there to guide me in the right direction. if your looking for a professional efficient team, you found it!"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Carlos Fortin"
              description="As a new small business owner, i was hesitant to try MOJO, but after speaking with santiago, i decided to give it a shot. 
Thanks to his professional and innovative ideas, my business has grown, and i’ve hired four new employees. 
Highly recommend!"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Jose Portillo"
              description="Working with Innovative MOJO website design was a pleasure. I couldn’t be happier with the turnout. It was a very enjoyable experience working with the team throughout the project. They had answers for all questions I threw their way and just made things happen. i cant recommend them enough!"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-2xl font-bold bg-secondary text-white h-full">
            <Card
              heading="Rhonda"
              description="MOJO has developed several websites for me and my clients and have exceeded my expectations and always delivered ahead of schedule"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* CSS to hide pagination above mobile breakpoint (>= 768px). */}
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

export default SwiperComponent;

"use client";
import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bulldog from "@/public/images/home/Bulldog.svg";
import google from "@/public/images/home/google.svg";
import intel from "@/public/images/home/intel.svg";
import tennese from "@/public/images/home/tennese.svg";
import foodie from "@/public/images/home/foodie.svg";
import ivry from "@/public/images/home/Iviry.svg";
import eee from "@/public/images/home/eee.svg";

// const partners = [google, intel, tennese, foodie, ivry, bulldog, eee];

// const HomeProudly = () => {
//   return (
//     <div className="w-full h-full mt-[174px] mob:mt-[60px] px-5">
//       <div className="w-full h-full flex justify-center items-center">
//         <div
//           className="w-full max-w-[1108px]"
//           data-aos="fade-up"
//           data-aos-delay="200"
//           data-aos-duration="1000"
//           data-aos-easing="ease-in-out"
//         >
//           <Text as="h2" className="mb-[123px] text-center capitalize">
//             We have proudly <span className="text-gold">worked </span> with
//           </Text>
//           <div className="flex gap-[99px] flex-wrap justify-center items-center mob:gap-[50px] mob:hidden">
//             {partners.map((partner, index) => (
//               <Image
//                 key={index}
//                 src={partner}
//                 alt=""
//                 className="mob:w-full max-w-[276px]"
//               />
//             ))}
//           </div>
//           <div className="mob:flex hidden w-full justify-between px-[40px]">
//             <Image src={google} alt="gogle" className="w-full max-w-[120px]" />
//             <Image src={intel} alt="gogle" className="w-full max-w-[120px]" />
//           </div>
//           <Image
//             src={tennese}
//             className="w-full max-w-[276px] hidden mob:flex justify-center items-center mx-auto mt-[48px]"
//             alt="image"
//           />
//           <div className="mob:flex hidden w-full justify-between px-[40px] mt-[48px]">
//             <Image src={foodie} alt="gogle" className="w-full max-w-[130px]" />
//             <Image src={ivry} alt="gogle" className="w-full max-w-[130px]" />
//           </div>
//           <div className="mob:flex hidden w-full justify-between px-[40px] mt-[48px]">
//             <Image src={bulldog} alt="gogle" className="w-full max-w-[130px]" />
//             <Image src={eee} alt="gogle" className="w-full max-w-[130px]" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProudly;

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import movenextbtn from "@/public/images/home/arrownext.svg";
import moveprevbtn from "@/public/images/home/arrowback.svg";

const ProdulyWorkedSwiper = () => {
  const swiper = useSwiper();

  const handleprevbtn = () => {
    swiper?.slidePrev();
  };

  const handleNextvbtn = () => {
    swiper?.slideNext();
  };

  return (
    <div
      className="work-proudly-parent-div w-full h-full flex flex-col justify-center mb-[50px] mob:mb-0 items-center mt-[174px] mob:mt-[60px] px-5"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Text as="h2" className="mb-[123px] text-center capitalize">
        We have proudly <span className="text-gold">worked </span> with{" "}
      </Text>
      <div className="work-proudly-swiper-main-div w-full max-w-[1240px]">
        <Image
          className="custom-prev relative top-20 mob:hidden"
          onClick={handleprevbtn}
          src={moveprevbtn}
          alt="moveprevbtn"
        />

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Keyboard, Navigation, Scrollbar]}
          className="work-proudly-mySwiper w-full max-w-[1108px] overflow-hidden"
        >
          {[google, intel, tennese, foodie, ivry, bulldog, eee].map(
            (logo, index) => (
              <SwiperSlide key={index}>
                <div className="h-full min-h-[134px] mob:w-full flex justify-center items-center">
                  <Image
                    src={logo}
                    alt="partner logo"
                    width={150}
                    height={80}
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
        <div className="mob:flex hidden justify-center items-center gap-10 mt-5">
          <Image
            className="custom-prev "
            onClick={handleprevbtn}
            src={moveprevbtn}
            alt="moveprevbtn"
          />
          <Image
            className="custom-next"
            onClick={handleNextvbtn}
            src={movenextbtn}
            alt="movenextbtn"
          />
        </div>
        <Image
          className="custom-next ml-auto relative bottom-20 right-0 mob:hidden"
          onClick={handleNextvbtn}
          src={movenextbtn}
          alt="movenextbtn"
        />
      </div>
    </div>
  );
};

export default ProdulyWorkedSwiper;

import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import mojoimage from "@/public/images/home/mojoeffect.png";

import ReviewsSwiperComponent from "./SwiperReviews";
// import Card from "./Card";

const BookingReviews = () => {
  return (
    <div className="w-full h-full my-[100px] mob:my-[50px] px-5 overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <Text as="h2" className="text-center mt-[40px] mb-[128px]">
            The <span className="text-gold">MOJO Effect</span> Isn&apos;t Just A
            Transaction <br /> It&apos;s A Transformation
          </Text>
          <div className="w-full pb-[62px] flex justify-between items-center flex-wrap mob:flex-col mob:gap-[70px] xl:gap-[70px] xl:justify-center">
            <Image
              src={mojoimage}
              alt="mojoimage"
              className="w-full max-w-[385px] mob:max-w-full"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
            <ReviewsSwiperComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingReviews;

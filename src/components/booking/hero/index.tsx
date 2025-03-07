import React from "react";

import Text from "@/components/ui/Text";
const BookingHero = () => {
  return (
    <div className="w-full h-full mt-[76px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="w-full max-w-[1236px]"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Text as="h1" className="">
            Let&apos;s Get Your <span className="text-gold"> Brand Seen! </span>
          </Text>
          <Text className="mb-[195px] w-full max-w-[875px] mt-[25px] mob:mb-[96px]">
            IT’S TIME TO STOP PLAYING SMALL! <br /> <br />
            BOOK YOUR CALL BELOW FOR A FREE CONSULTATION
          </Text>
          <div className="mt-[100px] w-full pt-[20px] pb-[10px] px-[5%] bg-white rounded-[40px] mob:mt-[50px] mob:rounded-[20px]">
            <iframe
              src="https://www.cnvrsnly.com/widget/booking/mhzIEiGm3YTuWTv7gj6O"
              className="w-full mob:h-[680px] min-h-[865px] max-[994px]:min-h-[880px] mob:min-h-[780px] border-0"
              scrolling="no"
              id="ZRiHYlv8tkHyGWxJUaXQ_1713985892306"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHero;

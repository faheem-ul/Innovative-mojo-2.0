import React from "react";
import MarqueeComponent from "./Marquee";

import Text from "@/components/ui/Text";

const AboutServices = () => {
  return (
    <div className="w-full h-full mt-[26px] mob:mt-[70px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="w-full"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <MarqueeComponent direction="right">
            <div className="flex items-center ml-[204px] justify-center gap-[204px] mob:gap-[70px] mob:ml-[70px]">
              <Text className="text-[30px] mob:text-[28px] font-semibold text-[#F5D06F4D]/30">
                Marketing
              </Text>

              <Text className="text-[30px] mob:text-[28px] font-semibold text-[#F5D06F4D]/30">
                Engineers
              </Text>

              <Text className="text-[30px] mob:text-[28px] font-semibold text-[#F5D06F4D]/30">
                Social Media
              </Text>
            </div>
          </MarqueeComponent>
          <MarqueeComponent
            direction="left"
            className="mt-[60px] mob:mt-[40px]"
          >
            <div className="flex items-center ml-[204px] justify-center gap-[204px] mob:gap-[70px] mob:ml-[70px]">
              <Text className="text-[30px] mob:text-[28px] font-semibold text-[#F5D06F4D]/30">
                Product Design
              </Text>

              <Text className="text-[30px] mob:text-[28px] font-semibold text-[#F5D06F4D]/30">
                Graphic Design
              </Text>

              <Text className="text-[30px] mob:text-[28px] font-semibold text-[#F5D06F4D]/30">
                Professional Filming
              </Text>
            </div>
          </MarqueeComponent>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;

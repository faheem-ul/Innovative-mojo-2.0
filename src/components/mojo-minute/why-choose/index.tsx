import React from "react";

import Text from "@/components/ui/Text";
const ChooseMojoMinute = () => {
  return (
    <div className="w-full h-full px-5 py-[200px] mob:py-[70px]">
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="w-full max-w-[1236px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <Text as="h2" className="mb-[70px] text-center">
            Why Choose the {" "}
            <span className="text-gold">MOJO Minute Package</span>
          </Text>
          <div className="flex justify-between flex-wrap navsize:justify-center navsize:gap-[50px]">
            <div
              className="border border-gold rounded-[13px] max-w-[289px] py-[30px] px-[25px] mob:max-w-full"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[25px] text-center font-semibold mb-[14px] h-[56px] flex justify-center items-center">
                Quick Impact
              </Text>
              <Text className="text-[14px] text-center">
                Deliver your message powerfully in just a minute, perfect for
                capturing attention in today’s fast-paced digital world.
              </Text>
            </div>

            {/* 2 */}
            <div
              className="border border-gold rounded-[13px] max-w-[289px] py-[30px] px-[25px] mob:max-w-full"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[25px] text-center leading-[28px] font-semibold mb-[14px]">
                Creative Excellence
              </Text>
              <Text className="text-[14px] text-center">
                Our team excels in storytelling, ensuring your brand is
                presented in the most engaging and memorable way.
              </Text>
            </div>
            {/* 3 */}
            <div
              className="border border-gold rounded-[13px] max-w-[289px] py-[30px] px-[20px] mob:max-w-full"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[25px] text-center font-semibold mb-[14px] h-[56px] flex justify-center items-center">
                Tailored Approach
              </Text>
              <Text className="text-[14px] text-center">
                Every aspect of the video is customized to align with your brand
                and marketing goals.
              </Text>
            </div>
            {/* 4 */}
            <div
              className="border border-gold rounded-[13px] max-w-[289px] py-[30px] px-[5px] mob:px-5 mob:max-w-full"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[25px] text-center font-semibold mb-[14px] h-[56px] flex justify-center items-center">
                Versatility
              </Text>
              <Text className="text-[14px] text-center">
                Use your MOJO Minute across multiple platforms, from your
                website to social media, to maximize reach and engagement..
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMojoMinute;

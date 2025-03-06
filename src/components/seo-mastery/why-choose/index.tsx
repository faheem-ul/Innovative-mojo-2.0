import React from "react";

import Text from "@/components/ui/Text";
const ChooseSeoMastery = () => {
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
            <span className="text-gold">SEO Mastery Package?</span>
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
                Customized Strategies
              </Text>
              <Text className="text-[14px] text-center">
                Tailored SEO strategies designed to meet your unique business
                goals.
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
                Expert Team
              </Text>
              <Text className="text-[14px] text-center">
                A dedicated team of SEO specialists with years of experience.
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
                Results-Driven
              </Text>
              <Text className="text-[14px] text-center">
                A focus on delivering measurable results, from increased traffic
                to higher conversions.
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
                Transparent Communication
              </Text>
              <Text className="text-[14px] text-center">
                Regular updates and clear communication to keep you informed
                every step of the way.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSeoMastery;

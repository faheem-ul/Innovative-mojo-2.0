import React from "react";

import Text from "@/components/ui/Text";
const ChooseMojoFusion = () => {
  return (
    <div className="w-full h-full px-5 py-[119px] mob:py-[70px]">
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="w-full max-w-[926px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <Text as="h2" className="mb-[70px] text-center">
            Why Choose the  <span className="text-gold">Fusion Package</span>
          </Text>
          <div className="flex flex-wrap justify-center gap-[20px]">
            <div
              className="border border-gold rounded-[13px] max-w-[289px] py-[30px] px-[25px] mob:max-w-full"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[25px] text-center font-semibold mb-[14px] h-[56px] flex justify-center items-center">
                Complete Digital Solution
              </Text>
              <Text className="text-[14px] text-center">
                Combines videography, SEO, and web design into one powerful
                package, covering all your digital marketing needs.
              </Text>
            </div>

            {/* 2 */}
            <div
              className="border border-gold rounded-[13px] max-w-[289px] py-[20px] px-[25px] mob:max-w-full"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[25px] text-center font-semibold leading-[32px] mb-[13px]">
                Boost Your Online Presence
              </Text>
              <Text className="text-[14px] text-center">
                Gain a compelling video, a strategic SEO plan, and a stunning
                website that works together to elevate your brand.
              </Text>
            </div>
            {/* 3 */}
            <div
              className="border border-gold rounded-[13px] max-w-[289px] py-[20px] px-[20px] mob:max-w-full"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[25px] text-center font-semibold mb-[14px] leading-[32px]">
                Consistent and Cohesive Branding
              </Text>
              <Text className="text-[14px] text-center">
                Ensure a unified brand message across all platforms, with a
                seamless fusion of content and design.
              </Text>
            </div>
            {/* 4 */}
            <div
              className="border border-gold rounded-[13px] max-w-[289px] py-[20px] px-[20px] mob:px-5 mob:max-w-full"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[25px] text-center font-semibold mb-[14px] h-[56px] flex justify-center items-center">
                Maximize Impact and ROI
              </Text>
              <Text className="text-[14px] text-center">
                Crafted to deliver measurable results, from increased traffic
                and engagement to higher conversion rates.
              </Text>
            </div>
            {/* 5 */}
            <div
              className="border border-gold rounded-[13px] max-w-[289px] py-[30px] px-[5px] mob:px-5 mob:max-w-full"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[25px] text-center font-semibold mb-[14px] h-[56px] flex justify-center items-center">
                Expert Guidance
              </Text>
              <Text className="text-[14px] text-center">
                Our team of specialists handles every aspect, providing a smooth
                experience and a polished final product
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMojoFusion;

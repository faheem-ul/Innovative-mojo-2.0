import React from "react";

import Text from "@/components/ui/Text";

const AboutValues = () => {
  return (
    <div className="w-full h-full px-5 mb-[187px] mob:mb-[76px]">
      <div
        className="w-full h-full flex justify-center items-center"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="w-full max-w-[1236px] flex justify-between tab:flex-col tab:justify-center tab:items-center tab:gap-[50px]">
          <Text as="h2">
            Our <span className="text-gold">Values</span>{" "}
          </Text>
          <div className="flex flex-wrap gap-[56px] w-full max-w-[747px] mob:justify-center">
            <div
              className="py-[24px] px-[16px] border border-gold rounded-[16px] w-full max-w-[193px] mob:max-w-full mob:text-center"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[26px] leading-[40px] text-gold font-semibold mb-3">
                Innovation
              </Text>
              <Text className="text-[15px]">
                Always pushing creative boundaries
              </Text>
            </div>
            <div
              className="py-[24px] px-[16px] border border-gold rounded-[16px] w-full max-w-[220px] mob:max-w-full mob:text-center"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[26px] leading-[40px] text-gold font-semibold mb-3">
                Collaboration
              </Text>
              <Text className="text-[15px]">
                Teamwork and client partnerships.
              </Text>
            </div>
            <div
              className="py-[24px] px-[16px] border border-gold rounded-[16px] w-full max-w-[220px] mob:max-w-full mob:text-center"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[26px] leading-[40px] text-gold font-semibold mb-3">
                Transparency
              </Text>
              <Text className="text-[15px]">Clear and open communication</Text>
            </div>

            <div
              className="py-[24px] px-[16px] border border-gold rounded-[16px] w-full max-w-[193px] mob:max-w-full mob:text-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[24px] leading-[40px] text-gold font-semibold mb-3">
                Data-Driven
              </Text>
              <Text className="text-[15px]">
                Making informed decisions based on analytics.
              </Text>
            </div>
            <div
              className="py-[24px] px-[16px] border border-gold rounded-[16px] w-full max-w-[220px] mob:max-w-full mob:text-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[26px] leading-[40px] text-gold font-semibold mb-3">
                Integrity
              </Text>
              <Text className="text-[15px]">
                Honest and ethical marketing practices.
              </Text>
            </div>
            <div
              className="py-[24px] px-[16px] border border-gold rounded-[16px] w-full max-w-[220px] mob:max-w-full mob:text-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-[26px] leading-[40px] text-gold font-semibold mb-3">
                Customer-Centric
              </Text>
              <Text className="text-[15px]">
                Prioritizing client needs and audience engagement.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;

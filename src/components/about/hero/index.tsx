import React from "react";

import Text from "@/components/ui/Text";
const AboutHero = () => {
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
            About <span className="text-gold"> Innovative</span>
          </Text>
          <Text className="mb-[195px] w-full max-w-[875px] mt-[25px] mob:mb-[96px]">
            At Innovative MOJO, we harness the power of AI-driven marketing,
            SEO, and brand storytelling to create dynamic, data-driven
            strategies that elevate your brand. <br /> Just like the perfect
            fusion of art and intelligence, our approach blends AI precision
            with human creativity, driving smarter campaigns, deeper engagement,
            and faster growth.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

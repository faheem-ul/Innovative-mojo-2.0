import React from "react";

import Text from "@/components/ui/Text";
const ServicesHero = () => {
  return (
    <div className="w-full h-full px-5 mb-[358px] mob:mt-[50px] mt-[126px] mob:mb-[90px] relative overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] ">
          <Text as="h1" className="mb-[40px] mob:mb-[30px]">
            Innovative <span className="text-gold">Services</span>
          </Text>
          <Text className="max-w-[875px]">
            Capture your audience’s attention with a dynamic 45-60 second
            commercial that blends storytelling and SEO expertise to maximize
            your brand’s visibility. Whether on social media or search engines,
            we craft compelling content that connects, engages, and converts.
            Let’s take your brand to the next level!
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;

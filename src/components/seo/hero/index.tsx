import React from "react";

import Text from "@/components/ui/Text";

const SeoHero = () => {
  return (
    <div className="w-full h-full mt-[76px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <Text as="h1">
            Boost Your Visibility with Strategic,{" "}
            <span className="text-gold">Data-Driven SEO</span>
          </Text>
          <Text className="mt-[41px] mb-[167px] max-w-[1014px] mob:mb-[60px] mob:text-center mob:mt-3">
            At Innovative MOJO, we focus on authentic, sustainable SEO growth.
            Our experts use keyword research, technical optimization, and
            content strategies to boost your presence on search engines. From
            on-page improvements to authoritative link-building, we ensure your
            audience finds you first.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SeoHero;

import React from "react";

import Text from "@/components/ui/Text";

const SMMHero = () => {
  return (
    <div className="w-full h-full mt-[76px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <Text as="h1">
            Elevate Your <span className="text-gold">Brand Voice </span>Across
            Every Social Channel
          </Text>
          <Text className="mt-[40px] mb-[135px] max-w-[1143px] mob:mb-[60px] mob:text-center mob:mt-3">
            Social media is your brand’s frontline connection with your
            audience—and Innovative MOJO helps you make it count. We develop and
            execute tailored social strategies that captivate followers, spark
            conversations, and drive measurable results. Whether you need to
            build brand awareness, increase engagement, or convert followers
            into customers, we’ve got you covered.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SMMHero;

import React from "react";

import Text from "@/components/ui/Text";

const MojoMinuteHero = () => {
  return (
    <div className="w-full h-full mt-[76px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <Text as="h1">
            Mojo <span className="text-gold">Minute</span>
          </Text>
          <Text className="mb-[170px] mob:mb-[60px] mob:text-center mt-10">
            Elevate your brand&apos;s story in just a minute with our MOJO
            Minute Package. This dynamic videography solution is crafted to
            deliver maximum impact in a concise and engaging format. Perfect for
            commercials, social media reels, and more, our MOJO Minute captures
            your audience&apos;s attention and leaves a lasting impression—all
            in under 60 seconds.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default MojoMinuteHero;

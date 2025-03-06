import React from "react";

import Text from "@/components/ui/Text";

const MojoFusionHero = () => {
  return (
    <div className="w-full h-full mt-[76px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="w-full max-w-[1236px]"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <Text as="h1">
            Mojo <span className="text-gold"> Fusion</span>
          </Text>
          <Text className="mb-[170px] mob:mb-[60px] mob:text-center mt-10">
            Unleash the full potential of your brand with our MOJO Fusion
            Package, an all-encompassing solution that blends
            high-impactvideography, strategic SEO, and a custom-designed
            website. This package is designed to seamlessly fuse compelling
            storytelling with powerful digital strategies, providing you with
            everything you need to stand out online and connect with your
            audience.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default MojoFusionHero;

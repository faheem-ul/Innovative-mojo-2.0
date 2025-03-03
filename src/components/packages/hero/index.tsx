import React from "react";

import Text from "@/components/ui/Text";
const PackagesHero = () => {
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
            Innovative <span className="text-gold">Packages</span>
          </Text>
          <Text className="text-[32px] font-semibold leading-[38px] mt-4 mb-[75px] mob:mb-[60px] mob:text-center mob:mt-1">
            The <span className="text-gold"> Mojo</span>
            Digital Transformation Package
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PackagesHero;

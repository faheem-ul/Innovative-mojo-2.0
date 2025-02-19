import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import video from "@/public/images/home/hero-video.png";
const HomeHero = () => {
  return (
    <div className="w-full h-full mt-[76px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text as="h1">
            Innovative <span className="text-gold">Mojo</span>
          </Text>
          <Text className="text-[35px] font-semibold leading-[38px] mb-[121px]">
            Where AI meets creativity for unstoppable{" "}
            <span className="text-gold"> brand growth</span>
          </Text>
          <Image
            src={video}
            alt=""
            className="w-full min-h-[800px] mb-[174px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";
import Text from "@/components/ui/Text";

interface props {
  image: StaticImageData;
  title: string;
  description: string;
  classname?: string;
}
const ServiceReusable: React.FC<props> = ({
  image,
  title,
  description,
  classname,
}) => {
  return (
    <div
      className={cn(
        "w-full flex justify-between  flex-wrap navsize:justify-center navsize:gap-[50px] items-center",
        classname
      )}
    >
      <div className="overflow-hidden p-[3px] relative rounded-[20px] bg-[#181818]">
        <div className="glow inset-0 w-[400px] rounded-[20px] h-[400px] absolute rotate-45"></div>
        <div className="w-[611px] rounded-[16px] bg-[#181818] z-10 relative">
          <Image
            src={image}
            alt="service icon"
            className=" relative w-full rounded-[17px] h-full bg-secondary"
          />
        </div>
      </div>
      {/* <div className="overflow-hidden ">
      <Image
        src={image}
        alt="service icon"
        className="relative w-full max-w-[611px] "
      />
      </div> */}

      <div className="max-w-[504px]">
        <Text className="text-gold text-[25px] mob:text-[32px] font-semibold mb-[18px] text-center">
          {title}
        </Text>
        <Text className="text-[16px] text-center">{description}</Text>
      </div>
    </div>
  );
};

export default ServiceReusable;

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
        "w-full flex justify-between flex-wrap navsize:justify-center navsize:gap-[50px] items-center",
        classname
      )}
    >
      <Image src={image} alt="service icon" className="w-full max-w-[611px]" />
      <div className="max-w-[504px]">
        <Text className="text-gold text-[25px] mob:text-[32px] font-semibold mb-[18px] text-center">
          {title}
        </Text>
        <Text className="text-[16px]">{description}</Text>
      </div>
    </div>
  );
};

export default ServiceReusable;

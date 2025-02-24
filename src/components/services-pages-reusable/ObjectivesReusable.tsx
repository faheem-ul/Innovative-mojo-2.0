import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface props {
  icon: StaticImageData;
  title: string;
  description: string;
}

import Text from "../ui/Text";

const ObjectivesReusable: React.FC<props> = ({ icon, title, description }) => {
  return (
    <div className="w-full max-w-[400px] min-h-[318px] bg-secondary flex justify-center items-center rounded-tl-[16px] rounded-br-[16px]">
      <div className="px-5">
        <Image src={icon} alt="icon" className="mx-auto" />
        <Text
          as="h3"
          className="mt-[15px] text-center text-[25px] font-semibold"
        >
          {title}
        </Text>
        <Text className="mt-[38px] text-[14px] text-white">{description}</Text>
      </div>
    </div>
  );
};

export default ObjectivesReusable;

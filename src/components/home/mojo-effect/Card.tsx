import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import stars from "@/public/images/home/Stars.svg";

interface props {
  heading: string;
  description: string;
  yellowtext?: string;
}

const Card: React.FC<props> = ({ heading, description, yellowtext }) => {
  return (
    <div className="w-full h-[595px] mob:rounded-[50px] mob:border-none relative bottom-[-150px] mob:bottom-0 mx-auto max-w-[501px] border border-gold bg-secondary  px-[36px] flex justify-center items-center rounded-[50px]">
      <div>
        <Text as="h3" className="mt-5 text-center mob:mt-0">
          {heading}
        </Text>
        <Image src={stars} alt="stars" className="my-5 mx-auto"></Image>
        <Text className="w-full max-w-[384px] text-gold text-center mx-auto mb-4">
          {yellowtext}
        </Text>
        <Text className="text-center">{description}</Text>
      </div>
    </div>
  );
};

export default Card;

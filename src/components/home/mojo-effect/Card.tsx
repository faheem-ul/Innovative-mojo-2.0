import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import stars from "@/public/images/home/Stars.svg";

interface props {
  heading: string;
  description: string;
}

const Card: React.FC<props> = ({ heading, description }) => {
  return (
    <div className="w-full min-h-[555px] max-w-[446px] 2xl:max-w-[330px]  bg-secondary px-[36px] flex justify-center items-center rounded-[50px]">
      <div>
        <Text as="h3" className="mt-5 text-center">
          {heading}
        </Text>
        <Image src={stars} alt="stars" className="mt-5"></Image>
        <Text>{description}</Text>
      </div>
    </div>
  );
};

export default Card;

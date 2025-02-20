import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";

interface props {
  image: StaticImageData;
  className?: string;
  overlayText?: string;
  buttonText?: string;
  buttonHref?: string;
}
const ReusableProject: React.FC<props> = ({
  image,
  className,
  overlayText,
  buttonHref,
}) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <Image src={image} alt="image" className={`${className}`} />
      <div className="absolute inset-0 project-overlay rounded-[40px] flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-full max-w-[486px] justify-between items-center px-5">
          <Text className="text-[25px] font-semibold">{overlayText}</Text>
          <div className="mb-[30px] ml-auto w-full flex justify-end items-end mt-1">
            <a
              href={buttonHref}
              className="font-poppins bg-transparent hover:bg-transparent text-gold font-normal underline underline-offset-8 "
            >
              Visit Webiste
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableProject;

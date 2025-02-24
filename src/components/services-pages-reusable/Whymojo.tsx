import React from "react";

import Image from "next/image";
import { StaticImageData } from "next/image";

interface props {
  image: StaticImageData;
  bulletpoints: string[];
}

const Whymojo: React.FC<props> = ({ image, bulletpoints }) => {
  return (
    <div className="w-full flex justify-between items-start navsize:flex-col navsize:justify-center navsize:gap-[30px]">
      <Image src={image} alt="WhyMojo" className="w-full max-w-[605px]" />
      <ul className="font-poppins text-[25px] mob:text-[20px] mob:leading-[22px] font-normal text-white list-disc pl-[55px] navsize:pl-5">
        {bulletpoints.map((bullet, index) => (
          <li
            key={index}
            className="mb-[27px] leading-[44px] mob:leading-[27px]"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Whymojo;

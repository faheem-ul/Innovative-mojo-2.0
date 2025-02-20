import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

import Text from "@/components/ui/Text";

import linkedinsvg from "@/public/images/footer/linkedin.svg";
import instagramsvg from "@/public/images/footer/instagram.svg";

interface props {
  image: StaticImageData;
  name: string;
  role: string;
  linkedhref: string;
  instahref: string;
}
const ReusableSlide: React.FC<props> = ({
  image,
  name,
  role,
  linkedhref,
  instahref,
}) => {
  return (
    <div className="w-[393px]">
      <Image src={image} alt="team member image" className="w-full mb-[27px]" />
      <Text as="h3" className="mb-1">
        {name} <br />
        <span className="text-gold">{role}</span>
      </Text>
      <div className="flex gap-2">
        <a href={linkedhref} target="_blank">
          <Image src={linkedinsvg} alt="linkedin logo" />
        </a>
        <a href={instahref} target="_blank">
          <Image src={instagramsvg} alt="instagram logo" />
        </a>
      </div>
    </div>
  );
};

export default ReusableSlide;

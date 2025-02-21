import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";
import LinkButton from "@/components/ui/LinkButton";

interface props {
  heading: string;
  description: string;
  icon: StaticImageData;
  bonusBullets: string[];
  bonusText?: string;
  href: string;
}

const ReusablePackage: React.FC<props> = ({
  heading,
  description,
  icon,
  bonusBullets,
  bonusText,
  href,
}) => {
  return (
    <div className="bg-[#181818] w-full max-w-[393px] px-[27px] py-[45px] rounded-tr-[48px] rounded-bl-[48px] flex flex-col min-h-full">
      <div className="flex-grow">
        <Text className="text-[25px] font-semibold leading-[34px] mb-[39px] text-center text-gold">
          {heading}
        </Text>
        <Text className="text-[14px] text-gold mb-[39px] text-center min-h-[63px]">
          {description}
        </Text>
        <Image src={icon} alt="icon" className="mb-[39px] mx-auto" />
        {bonusBullets.map((bullet, index) => (
          <ul
            key={index}
            className="text-[14px] text-white font-poppins list-disc pl-5 leading-[20px] mb-[19px]"
          >
            <li className="text-[14px]">{bullet}</li>
          </ul>
        ))}
        {bonusText && (
          <Text className="text-gold text-[12px] text-center font-semibold mt-[39px] mb-[39px]">
            {bonusText}
          </Text>
        )}
      </div>
      {/* This ensures the button stays at the bottom */}
      <div className="mt-auto">
        <LinkButton
          className="w-[122px] h-[35px] text-[14px] mx-auto bg-gold text-center rounded-[6px]"
          href={href}
        >
          Learn more
        </LinkButton>
      </div>
    </div>
  );
};

export default ReusablePackage;

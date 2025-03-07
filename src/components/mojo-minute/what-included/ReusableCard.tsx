import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

interface props {
  icon: StaticImageData;
  heading: string;
  classname?: string;
  duration: string;
  description: string[];
}

const ReusableCard: React.FC<props> = ({
  icon,
  heading,
  classname,
  description,
  duration,
}) => {
  return (
    <div
      className={cn(
        "bg-secondary rounded-tl-[16px] rounded-bl-[16px] pt-[50px] pb-[48px] px-3 max-w-[401px]",
        classname
      )}
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration={duration}
      data-aos-easing="ease-in-out"
    >
      <div>
        <Image src={icon} alt="icon" className="mb-4 mx-auto" />
      </div>
      <div>
        <Text
          as="h3"
          className="text-[27px] mob:text-[20px] mob:min-h-max text-center min-h-[70px] flex justify-center items-center mb-[38px] mob:mb-5"
        >
          {heading}
        </Text>

        <ul className="text-[14px] font-poppins pl-6 list-disc text-white">
          {description.map((item, index) => {
            if (item.includes(":")) {
              const [boldText, normalText] = item
                .split(/:(.*)/)
                .filter(Boolean); // split into two parts only if the string : in it
              return (
                <li key={index} className="mb-[19px]">
                  <strong>{boldText}:</strong> {normalText}
                </li>
              );
            }
            return (
              <li key={index} className="mb-[19px]">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ReusableCard;

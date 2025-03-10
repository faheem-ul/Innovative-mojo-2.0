import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import LinkButton from "@/components/ui/LinkButton";

import vector from "@/public/images/projects/Vector.svg";

interface props {
  classname?: string;
}
const ReadytoStart: React.FC<props> = ({ classname }) => {
  return (
    <div
      className={cn(
        "w-full h-full px-5 mt-[261px] mb-[163px] mob:mt-[90px]",
        classname
      )}
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1224px] border-2 border-gold rounded-[40px]">
          <Text as="h2" className="text-center mt-[55px]">
            Ready to start your <span className="text-gold">project</span>
          </Text>
          <LinkButton
            href="/booking"
            className="w-[228px] h-[52px] bg-gold mt-[47px] mb-[70px] mx-auto"
          >
            <div className="flex gap-2">
              Get in touch
              <Image src={vector} alt="image" />
            </div>
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ReadytoStart;

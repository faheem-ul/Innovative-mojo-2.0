import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import selectheal from "@/public/images/mojo-minute/select-heal.webp";
import compilation from "@/public/images/mojo-minute/compilation.webp";
import intel from "@/public/images/mojo-minute/intel.webp";

const MojoMinuteWhatPossible = () => {
  return (
    <div className="w-full h-full mt-[76px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="w-full max-w-[1236px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <Text as="h2" className="mb-[60px] text-center">
            See What&apos;s <span className="text-gold">Possible</span>
          </Text>
          <div className="flex mb-[170px] mob:mb-[40px] justify-between navsize:flex-col navsize:items-center navsize:justify-center navsize:gap-[30px]">
            <div>
              <Image
                src={selectheal}
                alt="Select Heal"
                width={396}
                height={267}
                className="w-full max-w-[396px]"
              />
              <Text
                as="h3"
                className="mt-[20px] text-[25px] text-gold text-center"
              >
                Select Healing
              </Text>
            </div>
            <div>
              <Image
                src={compilation}
                alt="Compilation"
                width={396}
                height={267}
                className="w-full max-w-[396px]"
              />
              <Text
                as="h3"
                className="mt-[20px] text-[25px] text-gold text-center"
              >
                Compilation of work
              </Text>
            </div>
            <div>
              <Image
                src={intel}
                alt="Intel"
                width={396}
                height={267}
                className="w-full max-w-[396px]"
              />
              <Text
                as="h3"
                className="mt-[20px] text-[25px] text-gold text-center"
              >
                Intel
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MojoMinuteWhatPossible;

import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bulldog from "@/public/images/home/Bulldog.svg";
import google from "@/public/images/home/google.svg";
import intel from "@/public/images/home/intel.svg";
import tennese from "@/public/images/home/tennese.svg";
import foodie from "@/public/images/home/foodie.svg";
import ivry from "@/public/images/home/Iviry.svg";
import eee from "@/public/images/home/eee.svg";

const partners = [google, intel, tennese, foodie, ivry, bulldog, eee];

const HomeProudly = () => {
  return (
    <div className="w-full h-full mt-[174px] mob:mt-[60px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[992px]">
          <Text as="h2" className="mb-[123px] text-center">
            We have proudly <span className="text-gold">worked </span> with
          </Text>
          <div className="flex gap-[99px] flex-wrap justify-center items-center mob:gap-[50px]">
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={partner}
                alt=""
                className="mob:w-full max-w-[122px]"
              />
            ))}
            {/* <Image
              src="/images/home/partner-logos/amazon.png"
              alt=""
              className="w-[100px] h-[50px]"
            />
            <Image
              src="/images/home/partner-logos/google.png"
              alt=""
              className="w-[100px] h-[50px]"
            />
            <Image
              src="/images/home/partner-logos/microsoft.png"
              alt=""
              className="w-[100px] h-[50px]"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProudly;

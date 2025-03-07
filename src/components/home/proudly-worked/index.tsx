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
        <div
          className="w-full max-w-[1108px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Text as="h2" className="mb-[123px] text-center">
            We have proudly <span className="text-gold">worked </span> with
          </Text>
          <div className="flex gap-[99px] flex-wrap justify-center items-center mob:gap-[50px] mob:hidden">
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={partner}
                alt=""
                className="mob:w-full max-w-[276px]"
              />
            ))}
          </div>
          <div className="mob:flex hidden w-full justify-between px-[40px]">
            <Image src={google} alt="gogle" className="w-full max-w-[120px]" />
            <Image src={intel} alt="gogle" className="w-full max-w-[120px]" />
          </div>
          <Image
            src={tennese}
            className="w-full max-w-[276px] hidden mob:flex justify-center items-center mx-auto mt-[48px]"
            alt="image"
          />
          <div className="mob:flex hidden w-full justify-between px-[40px] mt-[48px]">
            <Image src={foodie} alt="gogle" className="w-full max-w-[130px]" />
            <Image src={ivry} alt="gogle" className="w-full max-w-[130px]" />
          </div>
          <div className="mob:flex hidden w-full justify-between px-[40px] mt-[48px]">
            <Image src={bulldog} alt="gogle" className="w-full max-w-[130px]" />
            <Image src={eee} alt="gogle" className="w-full max-w-[130px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProudly;

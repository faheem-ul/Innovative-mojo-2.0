import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import mojoimage from "@/public/images/home/mojoeffect.png";

import SwiperComponent from "./CardSwiper";
// import Card from "./Card";

const MojoEffect = () => {
  return (
    <div className="w-full h-full mojoeffect-gradient px-5 overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <Text as="h2" className="text-center mt-[40px] mb-[128px]">
            The <span className="text-gold">MOJO Effect</span> Isn&apos;t Just A
            Transaction <br /> It&apos;s A Transformation
          </Text>
          <div className="w-full pb-[62px] flex justify-between items-center flex-wrap mob:flex-col mob:gap-[70px] xl:gap-[70px] xl:justify-center">
            <Image
              src={mojoimage}
              alt="mojoimage"
              className="w-full max-w-[385px] mob:max-w-full"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
            <SwiperComponent />
            {/* <div className="flex flex-wrap 2xl:justify-center justify-between w-full max-w-[69%] gap-y-[44px] 2xl:max-w-[60%] 2xl:gap-10 mob:max-w-full">
              <Card
                heading="Innovative Mojo Effect"
                description="Discover the magic of Mojo by creating unique and captivating experiences for your customers."
              />
              <Card
                heading="Unstoppable Brand Growth"
                description="Boost your brand's success by leveraging Mojo's innovative AI-powered features to drive engagement, drive sales, and increase customer loyalty."
              />
              <Card
                heading="Customizable Solutions"
                description="Tailor Mojo's solutions to your specific needs, ensuring that you get the most out of your investment in brand growth."
              />
              <Card
                heading="Customizable Solutions"
                description="Tailor Mojo's solutions to your specific needs, ensuring that you get the most out of your investment in brand growth."
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MojoEffect;

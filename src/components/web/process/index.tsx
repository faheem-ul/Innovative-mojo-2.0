import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import ProcessResuable from "@/components/services-pages-reusable/ProcessResuable";

import ellipse from "@/public/images/services/Ellipse.svg";

const WebProcess = () => {
  return (
    <div className="w-full h-full px-5 relative overflow-hidden">
      <Image
        src={ellipse}
        alt="ellipse"
        className="absolute right-0 top-[-100px] h-[800px] mob:top-0 z-[-10]"
      />

      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] ">
          <Text
            as="h2"
            className="text-[60px] mob:text-[40px] mt-[160px] mb-[148px] mob:my-[50px] mob:text-center"
          >
            Our <span className="text-gold">Process</span>
          </Text>
          <div className="w-full flex flex-wrap justify-between xl:justify-center xl:gap-10 mob:justify-center mb-[167px] mob:mb-[70px]">
            <ProcessResuable
              processNumber="1"
              title="Discovery & Strategy"
              description="Understand your goals, audience, and brand identity to inform design and UX."
            />
            <ProcessResuable
              processNumber="2"
              title="Wireframing & Design"
              description="Translate insights into intuitive layouts, color palettes, and typography."
            />
            <ProcessResuable
              processNumber="3"
              title="Development & Testing"
              description="Build, test, and refine the site for speed, security, and cross-browser compatibility."
            />
            <ProcessResuable
              processNumber="4"
              title="Launch & Ongoing Support"
              description="Deploy the finished product and offer maintenance services to keep it running at peak performance."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProcess;

import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import ProcessResuable from "@/components/services-pages-reusable/ProcessResuable";

import ellipse from "@/public/images/services/Ellipse.svg";

const SeoProcess = () => {
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
              title="Discovery & Audit"
              description="Conduct a thorough technical audit and keyword research to identify opportunities."
            />
            <ProcessResuable
              processNumber="2"
              title="On-Page Optimization"
              description="Refine site structure, meta tags, headlines, and content for maximum impact."
            />
            <ProcessResuable
              processNumber="3"
              title="Content & Link Building"
              description="Craft high-quality content and build relationships that earn authoritative backlinks."
            />
            <ProcessResuable
              processNumber="4"
              title="Performance Tracking"
              description="Regularly measure rankings, traffic, and conversions to refine strategies over time."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoProcess;

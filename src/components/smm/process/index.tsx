import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import ProcessResuable from "@/components/services-pages-reusable/ProcessResuable";

import ellipse from "@/public/images/services/Ellipse.svg";

const SMMProcess = () => {
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
              title="Brand & Audience Audit"
              description="Understand your brand’s persona and the platforms most relevant to your audience."
            />
            <ProcessResuable
              processNumber="2"
              title="Content Calendar & Strategy"
              description="Plan out a balanced mix of content types, messaging, and posting frequencies."
            />
            <ProcessResuable
              processNumber="3"
              title="Community Management"
              description="Respond to comments, engage with followers, and nurture relationships to strengthen brand loyalty."
            />
            <ProcessResuable
              processNumber="4"
              title="Performance Review"
              description="Track metrics like reach, engagement, and conversions, and adjust tactics for continuous improvement."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMMProcess;

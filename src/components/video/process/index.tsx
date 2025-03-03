import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import ProcessResuable from "@/components/services-pages-reusable/ProcessResuable";

import ellipse from "@/public/images/services/Ellipse.svg";

const VideoProcess = () => {
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
              title="Concept & Script"
              description="Collaborate on storyboards, messaging, and narrative flow."
            />
            <ProcessResuable
              processNumber="2"
              title="Production"
              description="Leverage professional crews, equipment, and techniques to capture high-quality footage."
            />
            <ProcessResuable
              processNumber="3"
              title="Post-Production & Editing"
              description="Refine the footage with visual effects, color grading, music, and voiceovers."
            />
            <ProcessResuable
              processNumber="4"
              title="Distribution & Promotion"
              description="Ensure your videos reach the right audience through strategic placement and analytics-driven optimizations."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoProcess;

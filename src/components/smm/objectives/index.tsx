import React from "react";

import ObjectivesReusable from "@/components/services-pages-reusable/ObjectivesReusable";

import platform from "@/public/images/services/Devices.svg";
import engage from "@/public/images/services/UserSound.svg";
import data from "@/public/images/services/ChartBar.svg";
const SMMObjectives = () => {
  return (
    <div className="w-full h-full px-5 mojoeffect-gradient pt-[100px] pb-[100px] mob:py-[80px]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] flex flex-wrap justify-between xl:justify-center xl:gap-10 mob:justify-start">
          <ObjectivesReusable
            icon={platform}
            title="Platform Expertise"
            description="From Instagram and LinkedIn to TikTok and Facebook, we know how to optimize content and outreach for each unique channel."
          />
          <ObjectivesReusable
            icon={engage}
            title="Engaging Content"
            description="Our creative team crafts scroll-stopping posts, videos, and stories to keep your audience intrigued."
          />
          <ObjectivesReusable
            icon={data}
            title="Data-Driven Insights"
            description="We use analytics to refine your strategy, ensuring that every post and campaign hits its target goals."
          />
        </div>
      </div>
    </div>
  );
};

export default SMMObjectives;

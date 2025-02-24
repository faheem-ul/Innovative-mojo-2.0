import React from "react";

import ObjectivesReusable from "@/components/services-pages-reusable/ObjectivesReusable";

import custom from "@/public/images/services/BezierCurve.svg";
import mobile from "@/public/images/services/DeviceMobileSpeaker.svg";
import code from "@/public/images/services/Code.svg";
const WebObjectives = () => {
  return (
    <div className="w-full h-full px-5 mojoeffect-gradient pt-[97px] pb-[115px]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] flex flex-wrap justify-between xl:justify-center xl:gap-10 mob:justify-start">
          <ObjectivesReusable
            icon={custom}
            title="Custom Designs"
            description="Beautifully tailored interfaces that embody your brand’s unique personality."
          />
          <ObjectivesReusable
            icon={mobile}
            title="Mobile-First Approach"
            description="Seamless experiences on smartphones, tablets, and desktops."
          />
          <ObjectivesReusable
            icon={code}
            title="SEO-Friendly Code"
            description="We build with best practices to give you a strong foundation in search results."
          />
        </div>
      </div>
    </div>
  );
};

export default WebObjectives;

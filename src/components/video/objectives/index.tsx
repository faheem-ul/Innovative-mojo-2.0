import React from "react";

import ObjectivesReusable from "@/components/services-pages-reusable/ObjectivesReusable";

import platform from "@/public/images/services/Video.svg";
import engage from "@/public/images/services/FilmReel.svg";
import data from "@/public/images/services/CursorClick.svg";
const VideoObjectives = () => {
  return (
    <div className="w-full h-full px-5 mojoeffect-gradient pt-[100px] pb-[100px] mob:py-[80px]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] flex flex-wrap justify-between xl:justify-center xl:gap-10 mob:justify-start">
          <ObjectivesReusable
            icon={platform}
            title="Full-Service Production"
            description="Creative ideation, professional filming, editing, motion graphics, and sound design"
          />
          <ObjectivesReusable
            icon={engage}
            title="On-Brand Storytelling"
            description="Videos aligned with your visual identity and core messaging."
          />
          <ObjectivesReusable
            icon={data}
            title="Results-Oriented"
            description="Strategically optimized content to engage viewers and encourage conversions."
          />
        </div>
      </div>
    </div>
  );
};

export default VideoObjectives;

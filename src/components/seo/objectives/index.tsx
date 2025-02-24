import React from "react";

import ObjectivesReusable from "@/components/services-pages-reusable/ObjectivesReusable";

import longterm from "@/public/images/services/lonterm.svg";
import transparent from "@/public/images/services/transparent.svg";
import user from "@/public/images/services/user-centric.svg";
const SeoObjectives = () => {
  return (
    <div className="w-full h-full px-5 mojoeffect-gradient pt-[140px] pb-[150px] mob:py-[80px]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] flex flex-wrap justify-between xl:justify-center xl:gap-10 mob:justify-start">
          <ObjectivesReusable
            icon={longterm}
            title="Long-Term Results"
            description="We build SEO strategies designed to deliver steady, cumulative gains rather than temporary spikes."
          />
          <ObjectivesReusable
            icon={user}
            title="User-Centric Focus"
            description="Our optimizations prioritize user experience, ensuring your site is fast, mobile-friendly, and easy to navigate."
          />
          <ObjectivesReusable
            icon={transparent}
            title="Transparent Reporting"
            description="Gain full visibility into your ranking progress, organic traffic growth, and keyword performance"
          />
        </div>
      </div>
    </div>
  );
};

export default SeoObjectives;

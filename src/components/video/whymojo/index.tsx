import React from "react";

import Whymojo from "@/components/services-pages-reusable/Whymojo";
import Text from "@/components/ui/Text";

import video from "@/public/images/services/video-prod.png";

const VideoBulletpoints = [
  "Award-winning team experienced in various formats and industries.",
  "Smooth, transparent process from pre-production planning to final delivery.",
  "Video marketing strategies that boost engagement, brand recall, and sales.",
];

const VideoWhyMojo = () => {
  return (
    <div className="w-full h-full px-5 relative overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] ">
          <Text as="h2" className="mb-[110px] text-center mob:mb-[50px]">
            Why Innovative <span className="text-gold">MOJO</span> for
            <span className="text-gold"> Video Production?</span>
          </Text>
          <div className="w-full flex justify-between items-center">
            <Whymojo image={video} bulletpoints={VideoBulletpoints} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoWhyMojo;

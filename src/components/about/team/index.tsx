import React from "react";

import Text from "@/components/ui/Text";

import TeamSlider from "./Slider";

const AboutTeam = () => {
  return (
    <div className="w-full h-full px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text as="h2" className="mb-[68px]">
            Our <span className="text-gold">Team </span>
          </Text>
          <TeamSlider />
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;

import React from "react";

import Text from "@/components/ui/Text";

import TeamSlider from "./Slider";

const AboutTeam = () => {
  return (
    <div className="w-full h-full px-5">
      <div
        className="w-full h-full flex justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="w-full max-w-[1236px]">
          <Text as="h2" className="mb-[28px]">
            Our <span className="text-gold">Team </span>
          </Text>
          <TeamSlider />
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;

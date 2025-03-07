import React from "react";

import Whymojo from "@/components/services-pages-reusable/Whymojo";
import Text from "@/components/ui/Text";

import sm from "@/public/images/services/social-media.png";

const SmmBulletpoints = [
  "  Creative minds backed by data-driven strategy.",
  "Proven engagement tactics to grow your follower base.",
  "End-to-end support, from content creation to community management.",
];

const SMMWhyMojo = () => {
  return (
    <div className="w-full h-full px-5 relative overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] ">
          <Text as="h2" className="mb-[110px] text-center mob:mb-[50px]">
            Why Innovative <span className="text-gold">MOJO</span> for
            <span className="text-gold"> Social Media?</span>
          </Text>
          <div className="w-full flex justify-between items-center">
            <Whymojo image={sm} bulletpoints={SmmBulletpoints} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMMWhyMojo;

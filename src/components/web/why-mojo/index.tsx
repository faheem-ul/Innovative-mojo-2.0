import React from "react";

import Whymojo from "@/components/services-pages-reusable/Whymojo";
import Text from "@/components/ui/Text";

import web from "@/public/images/services/web.png";

const WebBulletpoints = [
  "Designers and developers with a keen eye for both aesthetics and functionality.",
  "Transparent project timelines and collaborative feedback cycles.",
  "Long-term support and iterative improvements as your business grows.",
];

const WebWhyMojo = () => {
  return (
    <div className="w-full h-full px-5 relative overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] ">
          <Text as="h2" className="mb-[110px] text-center mob:mb-[50px]">
            Why Innovative <span className="text-gold">MOJO</span> for
            <span className="text-gold"> Web Design?</span>
          </Text>
          <div className="w-full flex justify-between items-center">
            <Whymojo image={web} bulletpoints={WebBulletpoints} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebWhyMojo;

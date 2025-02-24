import React from "react";

import Whymojo from "@/components/services-pages-reusable/Whymojo";
import Text from "@/components/ui/Text";

import seo from "@/public/images/services/whyforseo.png";

const SeoBulletpoints = [
  "A team of seasoned SEO specialists with a track record of growing organic traffic.",
  "Tailored approaches for your industry and audience.",
  "Ongoing support to adapt to search algorithm changes and market trends.",
];

const SeoWhyMojo = () => {
  return (
    <div className="w-full h-full px-5 relative overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] ">
          <Text as="h2" className="mb-[110px] mob:text-center mob:mb-[50px]">
            Why Innovative <span className="text-gold">MOJO</span> for
            <span className="text-gold"> SEO?</span>
          </Text>
          <div className="w-full flex justify-between items-center">
            <Whymojo image={seo} bulletpoints={SeoBulletpoints} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoWhyMojo;

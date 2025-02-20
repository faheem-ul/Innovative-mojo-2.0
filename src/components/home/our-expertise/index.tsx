import React from "react";

import Text from "@/components/ui/Text";

const marketing = [
  "Search Engine Optimization",
  "Social Media Management",
  "Data Driven SEO",
  "Google ADS",
];
const design = [
  "Brand Design",
  "Web Design",
  "User Interface Design",
  "Frontend Development",
];

const video = ["Motion Graphics", "Professional Filming", "Sound Design"];

const HomeExpertise = () => {
  return (
    <div className="w-full h-full px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] flex flex-wrap justify-between xl:justify-center xl:gap-10 mob:justify-start">
          <Text as="h2" className="">
            Our <span className="text-gold">Expertise</span>
          </Text>
          <div>
            <Text as="h3" className="mb-[25px] text-gold">
              Marketing
            </Text>
            {marketing.map((item, index) => (
              <Text key={index} className="mb-[25px]">
                {item}
              </Text>
            ))}
          </div>
          <div>
            <Text as="h3" className="mb-[25px] text-gold">
              Design
            </Text>
            {design.map((item, index) => (
              <Text key={index} className="mb-[25px]">
                {item}
              </Text>
            ))}
          </div>
          <div>
            <Text as="h3" className="mb-[25px] text-gold">
              Video Production
            </Text>
            {video.map((item, index) => (
              <Text key={index} className="mb-[25px]">
                {item}
              </Text>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExpertise;

import React from "react";

import Text from "@/components/ui/Text";
const ProjectsHero = () => {
  return (
    <div className="w-full h-full mt-[126px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text as="h1">
            Innovative <span className="text-gold">Projects </span>
          </Text>
          <Text className="mb-[195px] w-full max-w-[875px] mt-[25px]">
            At Innovative MOJO, we bring more than 20 years of experience to the
            table—but we believe that the cornerstone of our success lies in
            real conversations, with real people, tackling real challenges.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHero;

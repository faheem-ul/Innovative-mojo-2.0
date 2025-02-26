import React from "react";

import Text from "@/components/ui/Text";
const NewsHero = () => {
  return (
    <div className="w-full h-full mt-[76px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <Text as="h1" className="">
            Innovative <span className="text-gold">News</span>
          </Text>
          <Text className="max-w-[875px] mb-[165px] mob:mb-[60px] mob:text-center mt-10 mob:mt-1">
            Looking to optimize your SEO or boost your marketing results? Learn
            how industry experts leverage AI to achieve breakthrough success and
            stay ahead of the competition. Our podcast brings you innovative
            strategies and actionable insights every week. in revenue
          </Text>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;

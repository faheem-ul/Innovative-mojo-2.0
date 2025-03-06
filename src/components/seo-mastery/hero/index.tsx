import React from "react";

import Text from "@/components/ui/Text";

const SeoMasteryHero = () => {
  return (
    <div className="w-full h-full mt-[76px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="w-full max-w-[1236px]"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <Text as="h1">
            Mojo <span className="text-gold">SEO Mastery</span>
          </Text>
          <Text className="mb-[170px] mob:mb-[60px] mob:text-center mt-10">
            Unlock the full potential of your online presence with our
            comprehensive SEO Mastery Package.This all-in-one solution is
            designed to propel your business to the top of search engine
            rankings,driving organic traffic, and converting visitors into loyal
            customers. Here&apos;s what you can expect:
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SeoMasteryHero;

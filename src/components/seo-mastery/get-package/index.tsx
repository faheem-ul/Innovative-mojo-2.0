import React from "react";
import Text from "@/components/ui/Text";
const SEOMasteryGet = () => {
  return (
    <div className="w-full h-full  px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="w-full max-w-[1236px]"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Text as="h2" className="mb-[50px] text-center">
            Get Your <span className="text-gold">SEO Mastery Package</span>Today
          </Text>
          <Text className="w-full max-w-[916px] text-center mx-auto">
            Ready to take your website to the next level? Our SEO Mastery
            Package is the key to unlockinghigher search engine rankings and
            attracting the right audience to your business. Contact ustoday to
            get started on your path to SEO success!
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SEOMasteryGet;

import React from "react";

import Text from "@/components/ui/Text";

const WebHero = () => {
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
            Crafting <span className="text-gold">Digital Experiences </span>{" "}
            <br className="mob:hidden" />
            That Convert & Delight
          </Text>
          <Text className="mt-[41px] mb-[149px] max-w-[1143px] mob:mb-[60px] mob:text-center mob:mt-3">
            Your website is more than a digital storefront—it’s the heart of
            your brand’s online presence. Innovative MOJO’s web designers and
            developers create visually stunning, user-friendly, and
            high-performing websites that reflect your brand ethos and guide
            visitors seamlessly through their journey. <br />
            <br />
            Responsive, secure, and optimized for search, our sites are
            engineered to impress your audience and convert them into customers.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default WebHero;

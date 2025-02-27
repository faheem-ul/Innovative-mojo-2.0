import React from "react";
import Text from "@/components/ui/Text";
const MojoMinuteGet = () => {
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
            Get Your <span className="text-gold">MOJO Minute</span>Today
          </Text>
          <Text className="w-full max-w-[916px] text-center mx-auto">
            Ready to make a big impact in just 60 seconds? Our MOJO Minute
            Package is the perfect wayto showcase your brand with creativity and
            flair. Contact us today to get started and discoverhow we can bring
            your story to life in the most engaging way possible.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default MojoMinuteGet;

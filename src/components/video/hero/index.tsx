import React from "react";

import Text from "@/components/ui/Text";

const VideoHero = () => {
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
            Bring Your Story to Life with Engaging,{" "}
            <span className="text-gold"> High-Impact Videos </span>{" "}
            <br className="mob:hidden" />
          </Text>
          <Text className="mt-[40px] mb-[135px] max-w-[1143px] mob:mb-[60px] mob:text-center mob:mt-3">
            Video is today’s most powerful storytelling medium. At Innovative
            MOJO, we produce exceptional video content—from concept development
            and scriptwriting to filming, editing, and distribution—that
            captivates viewers and drives results. Whether it’s a brand anthem
            video, product demo, testimonial, or social snippet, we tailor our
            productions to resonate with your audience and amplify your message.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;

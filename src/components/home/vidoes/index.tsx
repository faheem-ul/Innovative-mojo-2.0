import React from "react";
import Image from "next/image";

import videoimage1 from "@/public/images/home/videoimage1.png";
import videoimage2 from "@/public/images/home/videoimage2.png";
import videoimage3 from "@/public/images/home/videoimage3.png";
import videoimage4 from "@/public/images/home/videoimage4.png";
import videoimage5 from "@/public/images/home/videoimage5.png";

const HomeVideos = () => {
  return (
    <div className="w-full h-full mt-[122px] xl:px-5 mb-[127px] mob:mb-[66px]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <div className="w-full flex justify-between 2xl:justify-center gap-[22px] flex-wrap">
            <Image src={videoimage1} alt="" className="w-full max-w-[580px]" />
            <div className="flex justify-between xl:justify-center gap-[22px] w-full max-w-[50%] xl:max-w-full">
              <Image
                src={videoimage2}
                alt=""
                className="w-full max-w-[292px] mob:max-w-[187px]"
              />
              <Image
                src={videoimage3}
                alt=""
                className="w-full max-w-[292px] mob:max-w-[187px]"
              />
            </div>
          </div>

          <div className="flex justify-between 2xl:justify-center flex-wrap gap-[28px] w-full max-w-full mt-[12px]">
            <Image
              src={videoimage4}
              alt=""
              className="w-full max-w-[580px] 2xl:h-[400px] mob:h-full mob:max-w-full"
            />
            <Image
              src={videoimage5}
              alt=""
              className="w-full max-w-[620px] 2xl:h-[400px] mob:h-full mob:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideos;

import React from "react";

import ReusableProject from "./ReusableProject";

import foundation1890 from "@/public/images/projects/1890.png";
import bulldog from "@/public/images/projects/buldog.png";
import bulkbrothers from "@/public/images/projects/bulk-brothers.png";
import davidBacksmith from "@/public/images/projects/david-backsmith.png";
import eee from "@/public/images/projects/eee.png";
import foodie from "@/public/images/projects/foodie.png";
import iviry from "@/public/images/projects/iviry.png";
import selectHeal from "@/public/images/projects/select-heal.png";
import tactIq from "@/public/images/projects/tactIq.png";
import tenesse from "@/public/images/projects/tenesse.png";

const Projects = () => {
  return (
    <div className="w-full h-full px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <div
            className="flex justify-between w-full xl:flex-col xl:justify-center xl:items-center xl:gap-[20px] mob:hidden"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <ReusableProject
              image={tactIq}
              className="w-full max-w-[604px]"
              overlayText="TactIQ Website"
              buttonHref="https://wearetactiq.com/"
            />

            <ReusableProject
              image={foundation1890}
              className="w-full max-w-[604px]"
              overlayText="1890 Foundation"
              videoUrl="/videos/1890.mp4"
            />
          </div>
          <div
            className="flex justify-between mt-[31px] xl:flex-col xl:justify-center xl:items-center xl:gap-[20px] mob:hidden"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="flex flex-wrap w-full max-w-[604px] gap-[16px] justify-center items-center mob:w-full ">
              <ReusableProject
                image={tenesse}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="Tenessee State University"
                videoUrl="/videos/Tennesse state University.mp4"
              />

              <ReusableProject
                image={bulldog}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="Bulldog"
                buttonHref="/projects/bulldog"
              />

              <ReusableProject
                image={bulkbrothers}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="Bulk Brothers"
                buttonHref="https://bulkbrothersmove.com/"
              />
              <ReusableProject
                image={eee}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="EEE"
                buttonHref="https://www.eeecorpgroup.com/"
              />
            </div>
            <ReusableProject
              image={selectHeal}
              className="w-full max-w-[604px] h-full"
              overlayText="Select Healing"
              videoUrl="/videos/select healing.mp4"
            />
          </div>
          <div
            className="flex justify-between relative z-[0] w-full mt-[31px] xl:flex-col xl:justify-center xl:items-center xl:gap-[20px] mob:hidden"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <ReusableProject
              image={davidBacksmith}
              className="w-full max-w-[604px]"
              overlayText=" David Starbuck Smith"
              buttonHref="https://davidstarbucksmith.com/"
            />
            <div className="xl:w-full justify-center gap-[12px] flex xl:justify-center xl:gap-[20px] mob:flex-col">
              <ReusableProject
                image={iviry}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="Iviry"
                buttonHref="/projects/iviry"
              />
              <ReusableProject
                image={foodie}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="Foodie"
                buttonHref="/projects/foodie"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

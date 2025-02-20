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
          <div className="flex justify-between w-full xl:flex-col xl:justify-center xl:items-center xl:gap-[20px]">
            {/* <Image src={tactIq} alt="tactIq" className="w-full max-w-[604px]" /> */}
            <ReusableProject
              image={tactIq}
              className="w-full max-w-[604px]"
              overlayText="TactIQ Website"
              buttonHref="/"
            />
            {/* <Image
              src={foundation1890}
              alt="tactIq"
              className="w-full max-w-[604px]"
            /> */}
            <ReusableProject
              image={foundation1890}
              className="w-full max-w-[604px]"
              overlayText="1890 Foundation"
              buttonHref="/"
            />
          </div>
          <div className="flex justify-between mt-[31px] xl:flex-col xl:justify-center xl:items-center xl:gap-[20px]">
            <div className="flex flex-wrap w-full max-w-[604px] gap-[16px] justify-center items-center mob:w-full">
              {/* <Image
                src={tenesse}
                alt="bulldog"
                className="w-full max-w-[294px]"
              /> */}
              <ReusableProject
                image={tenesse}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="Tenessee State University"
                buttonHref="/"
              />
              {/* <Image
                src={bulldog}
                alt="bullbrothers"
                className="w-full max-w-[294px]"
              /> */}
              <ReusableProject
                image={bulldog}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="Bulldog"
                buttonHref="/"
              />
              {/* <Image
                src={bulkbrothers}
                alt="davidBacksmith"
                className="w-full max-w-[294px]"
              /> */}
              <ReusableProject
                image={bulkbrothers}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="Bulk Brothers"
                buttonHref="/"
              />
              <ReusableProject
                image={eee}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="EEE"
                buttonHref="/"
              />
            </div>
            {/* <Image src={eee} alt="tactIq" className="w-full max-w-[604px]" /> */}
            <ReusableProject
              image={selectHeal}
              className="w-full max-w-[604px] h-full"
              overlayText="Select Healing"
              buttonHref="/"
            />
          </div>
          <div className="flex justify-between w-full mt-[31px] xl:flex-col xl:justify-center xl:items-center xl:gap-[20px]">
            {/* <Image
              src={davidBacksmith}
              alt="davidBacksmith"
              className="w-full max-w-[604px]"
            /> */}
            <ReusableProject
              image={davidBacksmith}
              className="w-full max-w-[604px]"
              overlayText=" David Starbuck Smith"
              buttonHref="/"
            />
            {/* <Image src={iviry} alt="iviry" className="w-full max-w-[294px]" /> */}
            <div className="xl:w-full justify-center gap-[12px] flex xl:justify-center xl:gap-[20px] mob:flex-col">
              <ReusableProject
                image={iviry}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="Iviry"
                buttonHref="/"
              />
              {/* <Image src={foodie} alt="foodie" className="w-full max-w-[294px]" /> */}
              <ReusableProject
                image={foodie}
                className="w-full max-w-[294px] mob:max-w-full"
                overlayText="Foodie"
                buttonHref="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

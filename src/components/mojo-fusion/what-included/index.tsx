import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import videograpghy from "@/public/images/mojo-fusion/Video.svg";
import seomastery from "@/public/images/mojo-fusion/Ranking.svg";
import additional from "@/public/images/mojo-fusion/Gift.svg";

import ReusableCard from "@/components/mojo-minute/what-included/ReusableCard";

const videoGraphyBullets = [
  "We kick off with a personalized consultation to understand your brand, objectives, and target audience.",
  "Our creative team collaborates with you to develop a compelling concept that aligns with your brand's identity.",
  "We explore innovative ideas to make your 45 to 60-second video both memorable and effective.",
];

const scriptwritingBullets = [
  "Our expert scriptwriters craft a concise yet impactful script that conveys your message with clarity and creativity.",
  "We create a detailed storyboard to visualize the flow and key scenes of the video.",
  "Your input is invaluable—review and refine the script and storyboard to ensure the final product matches your vision. ",
];

const Additionaldescription = [
  " 45 to 60-Second Commercial: A compelling video that captures your brand's essence and communicates your message effectively.",
  "Five 15-Second Reels: Perfect for social media, these short, engaging reels offer a napshot of your brand in action.",
  "High-Quality Production: From start to finish, we ensure top-tier quality that reflects the professionalism and uniqueness of your brand.",
];
const MojoWhatIncluded = () => {
  return (
    <div className="w-full h-full mt-[76px]">
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <div className="w-full max-w-[1236px] px-5">
          <Text as="h2" className="mb-[6px] text-center">
            See What&apos;s <span className="text-gold">Included</span>
          </Text>
        </div>
        <div className="mojoeffect-gradient py-[85px] mob:px-5 w-full ">
          <div className="flex flex-wrap gap-[16px] max-w-[1236px] mx-auto row-gap justify-center">
            <ReusableCard
              classname="max-w-[610px]"
              heading="MOJO Minute Videography"
              icon={videograpghy}
              description={videoGraphyBullets}
              duration="800"
            />
            <ReusableCard
              classname="max-w-[610px]"
              heading="Scriptwriting & Storyboarding"
              icon={seomastery}
              description={scriptwritingBullets}
              duration="1000"
            />
          </div>
          <div
            className="bg-secondary rounded-tl-[16px] rounded-bl-[16px] pt-[50px] pb-[48px] px-3 max-w-[747px] mt-[70px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div>
              <Image src={additional} alt="icon" className="mb-4 mx-auto" />
            </div>
            <div>
              <Text
                as="h3"
                className="text-[25px] text-center min-h-[70px] flex justify-center items-center mb-[38px]"
              >
                Additional Features
              </Text>

              <ul className="text-[14px] font-poppins pl-6 list-disc text-white">
                {Additionaldescription.map((description, index) => {
                  const [boldText, normalText] = description.split(":");
                  return (
                    <li key={index} className="mb-[19px]">
                      <strong>{boldText}:</strong> {normalText}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MojoWhatIncluded;

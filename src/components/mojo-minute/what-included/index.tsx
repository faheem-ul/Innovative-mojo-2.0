import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import consultation from "@/public/images/mojo-minute/consult.svg";
import scriptwriting from "@/public/images/mojo-minute/scriptwriting.svg";
import vision from "@/public/images/mojo-minute/vision.svg";
import filimg from "@/public/images/mojo-minute/filimg.svg";
import final from "@/public/images/mojo-minute/final.svg";
import additional from "@/public/images/mojo-minute/additional.svg";

import ReusableCard from "./ReusableCard";

const consultationBullets = [
  "We kick off with a personalized consultation to understand your brand, objectives, and target audience.",
  "Our creative team collaborates with you to develop a compelling concept that aligns with your brand's identity.",
  "We explore innovative ideas to make your 45 to 60-second video both memorable and effective.",
];

const scriptwritingBullets = [
  "Our expert scriptwriters craft a concise yet impactful script that conveys your message with clarity and creativity.",
  "We create a detailed storyboard to visualize the flow and key scenes of the video.",
  "Your input is invaluable—review and refine the script and storyboard to ensure the final product matches your vision. ",
];

const visionBullets = [
  "We present a vision board showcasing the look and feel of your video, including style, color palette, and overall aesthetic.",
  "This step ensures that every visual element aligns perfectly with your brand’s personality and goals.",
  "We welcome your feedback to fine-tune the visual direction before filming begins.",
];

const filmingBullets = [
  "Our professional videographers bring your vision to life using state-of-the-art equipment.",
  "We focus on capturing the essence of your brand in a short, high-impact video.",
  "From stunning visuals to crystal-clear audio, we ensure every frame contributes to the story.",
];

const postProductionBullets = [
  "Our skilled editors craft your footage into a seamless, polished final cut.",
  "We add music, graphics, and any special effects needed to enhance the video and make it truly stand out.",
  "A draft is provided for your review, with revisions made to guarantee your complete satisfaction.",
];
const finalDeliveryBullets = [
  "  The final video is delivered in a format optimized for your preferred platforms, including social media, websites, and more.",
  "We offer guidance on how to maximize the impact of your MOJO Minute across different channels.",
  "Our team remains available for any follow-up support or additional edits.",
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
              heading="Consultation & Concept Development"
              icon={consultation}
              description={consultationBullets}
            />
            <ReusableCard
              heading="Scriptwriting & Storyboarding"
              icon={scriptwriting}
              description={scriptwritingBullets}
            />
            <ReusableCard
              heading="Vision Board & Style Presentation"
              icon={vision}
              description={visionBullets}
            />
            <ReusableCard
              heading="Filming & Production"
              icon={filimg}
              description={filmingBullets}
            />
            <ReusableCard
              heading="Post-Production & Editing"
              icon={filimg}
              description={postProductionBullets}
            />
            <ReusableCard
              heading="Final Delivery & Optimization"
              icon={final}
              description={finalDeliveryBullets}
            />{" "}
          </div>
          <div className="bg-secondary rounded-tl-[16px] rounded-bl-[16px] pt-[50px] pb-[48px] px-3 max-w-[747px] mt-[70px] mx-auto">
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

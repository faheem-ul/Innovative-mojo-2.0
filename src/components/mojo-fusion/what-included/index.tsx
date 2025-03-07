import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import videograpghy from "@/public/images/mojo-fusion/Video.svg";
import seomastery from "@/public/images/mojo-fusion/Ranking.svg";
import additional from "@/public/images/mojo-fusion/Gift.svg";

const videoGraphyBullets = [
  "Consultation & Concept Development: Begin with a personalized consultation to understand your brand's goals and audience, crafting a compelling 45 to 60-second commercial.",
  "Scriptwriting & Storyboarding: Our creative team develops a concise and impactful script, along with a detailed storyboard to ensure your vision comes to life.",
  "Vision Board Presentation: Get a visual preview of the video's style and aesthetic, ensuring every detail aligns with your brand’s personality.",
  "Filming & Production: Our professional videographers use state-of-the-art equipment to produce a high-quality video that tells your brand's story",
  "Post-Production & Editing: Our editors enhance the footage with music, graphics, and special effects, creating a polished final product.",
  " Five 15-Second Reels: Alongside the main commercial, receive five short reels optimized for social media to increase engagement and reach",
];

const seoMasteryBullets = [
  "  In-Depth SEO Audit: A comprehensive analysis of your current SEO performance, identifying areas for improvement and opportunities for growth.",
  "Keyword Research & Optimization: In-depth keyword research and on-page optimization to ensure your content targets high-converting search terms.",
  "Technical SEO Enhancements: Optimize your website’s technical aspects, including site speed and mobile responsiveness, for improved search engine performance.",
  "High-Quality Content Creation: Creation of SEO-friendly content that resonates with your audience and boosts your online visibility.",
  "Link Building & Off-Page SEO: Strategic link-building campaigns to improve your website’s domain authority and search engine rankings.",
  "Analytics & Reporting: Receive monthly performance reports with insights and recommendations to refine your SEO strategy for maximum results.",
];

const Additionaldescription = [
  " Custom Design: Get a professionally designed website tailored to your brand, providing a seamless user experience and showcasing your brand story.",
  "SEO-Optimized: Your new website is built with SEO best practices in mind, ensuring it ranks well on search engines right from the start.",

  "Responsive & User-Friendly: Designed to look great and function flawlessly on all devices, offering a top-notch experience for every visitor.",
  "Integrated Branding: The website seamlessly integrates with your video content and SEO strategy, delivering a cohesive and powerful brand presence.",
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
            <div
              className="bg-secondary rounded-tl-[16px] rounded-bl-[16px] pt-[90px] pb-[48px] px-3 max-w-[610px]  min-h-[759px] mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div>
                <Image src={videograpghy} alt="icon" className="mb-4 mx-auto" />
              </div>
              <div>
                <Text
                  as="h3"
                  className="text-[25px] text-center flex justify-center items-center mb-[38px]"
                >
                  MOJO Minute Videography
                </Text>

                <ul className="text-[14px] font-poppins pl-6 list-disc text-white">
                  {videoGraphyBullets.map((description, index) => {
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
            <div
              className="bg-secondary rounded-tl-[16px] rounded-bl-[16px] pt-[90px] pb-[48px] px-3 max-w-[610px]  min-h-[759px] mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div>
                <Image src={seomastery} alt="icon" className="mb-4 mx-auto" />
              </div>
              <div>
                <Text
                  as="h3"
                  className="text-[25px] text-center flex justify-center items-center mb-[38px]"
                >
                  SEO Mastery
                </Text>

                <ul className="text-[14px] font-poppins pl-6 list-disc text-white">
                  {seoMasteryBullets.map((description, index) => {
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
                Bonus: Free Professional Website
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

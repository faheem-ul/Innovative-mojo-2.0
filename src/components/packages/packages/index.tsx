import React from "react";

import ReusablePackage from "./ReusablePackage";

import mojominute from "@/public/images/packages/mojominute.svg";
import seomastery from "@/public/images/packages/ChartBar.svg";
import fusion from "@/public/images/packages/SketchLogo.svg";

const MojoMinuteBonusBullets = [
  "Concept Development: Tailored storytelling strategy to capture your brand’s essence.",
  "Professional Videography: 1 fully produced and edited video (45-60 seconds each).",
  "Scriptwriting: Engaging scripts crafted to resonate with your audience.",
  "Motion Graphics: Custom animations to enhance your brand message.",
  "Dedicated Project Manager: Personalized attention to ensure your vision comes to life",
  "Ideal For: Brands looking to make a powerful, lasting impression through high-quality video content.",
];

const MojoSeoMasterBullets = [
  "Comprehensive Site Audit: In-depth analysis of your website’s SEO performance.",
  "Keyword Research & Optimization: Targeted strategies to rank higher on search engines.",
  "Technical SEO Enhancements: Ensure your website is fully optimized for speed, mobile-friendliness, and user experience.",
  "Content Strategy & Creation: Monthly blog posts and content updates designed to attract and retain your target audience.",
  "Monthly Reporting: Detailed reports on performance, keyword rankings, and traffic improvements.",
  "Ongoing Support: Continuous adjustments to keep your SEO strategy ahead of the competition.",
  "Ideal For: Businesses committed to long-term growth and increased online visibility.",
];

const MojoFusionBullets = [
  "Everything in the Brand Storytelling Package: Concept development, videography, scriptwriting, motion graphics, and project management.",
  "We come to you: We will fly to anywhere in the world to capture your story",
  "Everything in the SEO Mastery Package: Site audit, keyword optimization, technical SEO, content strategy, monthly reporting, and support.",
  "Integrated Strategy: A seamless blend of video storytelling and SEO efforts to maximize impact.",
  "Quarterly Campaigns: Coordinated video and SEO campaigns, launched quarterly, to keep your brand fresh and top of mind.",
  "Priority Support: Top-tier access to our creative and technical teams for any needs.",
  "Ideal For: Brands ready to dominate their industry with a comprehensive approach to online presence and engagement.",
];

const Packages = () => {
  return (
    <div className="w-full h-full mt-[76px] px-5 mojoeffect-gradient py-[200px] mob:py-[100px]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px] flex justify-between flex-wrap xl:justify-center xl:gap-[68px]">
          <ReusablePackage
            heading="MOJO Minute"
            description="A dynamic 45-60 second commercial here to boost your brand’s visibility and connect with your audience on social media."
            icon={mojominute}
            bonusBullets={MojoMinuteBonusBullets}
            bonusText="Bonus - five engaging 15-second reels to connect with your audience on social media."
            href="/"
          />
          <ReusablePackage
            heading="MOJO SEO Mastery"
            description="Elevate your brand's online presence with expert SEO strategies."
            icon={seomastery}
            bonusBullets={MojoSeoMasterBullets}
            // bonusText="Bonus - five engaging 15-second reels to connect with your audience on social media."
            href="/"
          />
          <ReusablePackage
            heading="MOJO Fusion"
            description="A dynamic 45-60 second commercial here to boost your brand’s visibility and connect with your audience on social media."
            icon={fusion}
            bonusBullets={MojoFusionBullets}
            bonusText="Bonus: Free premium website"
            href="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Packages;

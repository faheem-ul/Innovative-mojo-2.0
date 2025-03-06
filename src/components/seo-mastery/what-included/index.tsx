import React from "react";

import Text from "@/components/ui/Text";

import inDepth from "@/public/images/seo-mastery/indepth.svg";
import search from "@/public/images/seo-mastery/search.svg";
import technical from "@/public/images/seo-mastery/technical.svg";
import content from "@/public/images/seo-mastery/Video.svg";
import link from "@/public/images/seo-mastery/Link.svg";
import analytical from "@/public/images/seo-mastery/analytical.svg";

import ReusableCard from "@/components/mojo-minute/what-included/ReusableCard";

const indepthBullets = [
  "Comprehensive analysis of your website's current SEO performance.",
  "Identification of technical issues, keyword opportunities, and backlink profiles.",
  "A detailed report outlining actionable insights to enhance your SEO strategy.",
];

const keywordSearchBullets = [
  "Extensive keyword research tailored to your industry and target audience.",
  "Optimization of on-page elements, including meta titles, descriptions, headings, and content, to align with high-converting keywords.",
  "Ongoing monitoring and adjustment to keep up with search engine algorithm changes.",
];

const technicalBullets = [
  "Optimization of site speed, mobile responsiveness, and overall user experience.",
  " Implementation of structured data and schema markup to enhance search engine understanding of your content.",
  "XML sitemap and robots.txt file optimization for better crawling and indexing.",
];

const highQualityBullets = [
  "Creation of SEO-friendly content that resonates with your audience and aligns with search intent.",
  "Blog posts, articles, and landing page copy crafted to engage visitors and boost rankings.",
  "Regular content updates to keep your website fresh and relevant.",
];

const linkbuildingBullets = [
  "Strategic outreach and link-building campaigns to establish your site's authority.",
  "    Development of high-quality backlinks from reputable sources to improve domain authority.",
  "    Social media and local SEO integration to expand your reach and visibility.",
];
const analyticalBullets = [
  "The final video is delivered in a format optimized for your preferred platforms, including social media, websites, and more.",
  "We offer guidance on how to maximize the impact of your MOJO Minute across different channels.",
  "Our team remains available for any follow-up support or additional edits.",
];

const SeoMasteryIncluded = () => {
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
              heading="In-Depth SEO Audit"
              icon={inDepth}
              description={indepthBullets}
              duration="800"
            />
            <ReusableCard
              heading="Keyword Research & Optimization"
              icon={search}
              description={keywordSearchBullets}
              duration="1000"
            />
            <ReusableCard
              heading="Technical SEO Enhancements"
              icon={technical}
              description={technicalBullets}
              duration="1200"
            />
            <ReusableCard
              heading="High-Quality Content Creation"
              icon={content}
              description={highQualityBullets}
              duration="1400"
            />
            <ReusableCard
              heading="Link Building & Off-Page SEO"
              icon={link}
              description={linkbuildingBullets}
              duration="1600"
            />
            <ReusableCard
              heading="Analytics & Reporting"
              icon={analytical}
              description={analyticalBullets}
              duration="1800"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoMasteryIncluded;

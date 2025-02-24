import React from "react";

import seo from "@/public/images/services/whyforseo.png";
import socialmedia from "@/public/images/services/social-media.png";
import web from "@/public/images/services/web.png";
import video from "@/public/images/services/video-prod.png";

import ServiceReusable from "./ServiceReusable";

const Services = () => {
  return (
    <div className="w-full h-full px-5 relative overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <ServiceReusable
            image={seo}
            title="Search Engine Optimization"
            classname="mb-[200px] mob:mb-[80px]"
            description="At Innovative MOJO, we believe that ranking high in search results isn’t about shortcuts—it’s about authentic, sustainable growth. Our SEO experts blend deep keyword research, technical optimization, and compelling content strategies to elevate your brand’s presence on Google and other search engines. From on-page enhancements to authoritative link-building, we help ensure that your audience finds you first."
          />
          <ServiceReusable
            image={socialmedia}
            title="Social media management"
            description="Social media is your brand’s frontline connection with your audience—and Innovative MOJO helps you make it count. We develop and execute tailored social strategies that captivate followers, spark conversations, and drive measurable results. Whether you need to build brand awareness, increase engagement, or convert followers into customers, we’ve got you covered."
            classname="flex-row-reverse mb-[200px] mob:mb-[80px]"
          />
          <ServiceReusable
            image={web}
            title="Web design development"
            classname="mb-[200px] mob:mb-[80px]"
            description="Your website is more than a digital storefront—it’s the heart of your brand’s online presence. Innovative MOJO’s web designers and developers create visually stunning, user-friendly, and high-performing websites that reflect your brand ethos and guide visitors seamlessly through their journey. Responsive, secure, and optimized for search, our sites are engineered to impress your audience and convert them into customers."
          />
          <ServiceReusable
            image={video}
            classname="flex-row-reverse"
            title="Video Production and marketing"
            description="Video is today’s most powerful storytelling medium. At Innovative MOJO, we produce exceptional video content—from concept development and scriptwriting to filming, editing, and distribution—that captivates viewers and drives results. Whether it’s a brand anthem video, product demo, testimonial, or social snippet, we tailor our productions to resonate with your audience and amplify your message."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

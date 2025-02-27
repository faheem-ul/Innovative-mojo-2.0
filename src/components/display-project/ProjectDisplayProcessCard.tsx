import React from "react";

import Text from "@/components/ui/Text";

const cardsContent = [
  {
    number: "1",
    title: "Design",
    description:
      "Designed a new website that captured current services and implemented new ones seamlessly.",
    duration: "1100",
  },
  {
    number: "2",
    title: "Marketing",
    description: "Developed a multi-channel marketing strategy.",
    duration: "1200",
  },
  {
    number: "3",
    title: "SEO",
    description: "SEO-optimized content",
    duration: "1300",
  },
  {
    number: "4",
    title: "Outreach",
    description: "Partnership Outreach",
    duration: "1400",
  },
  {
    number: "5",
    title: "Campaign Management",
    description: "Managed campaign rollouts and monitored performance metrics.",
    duration: "1500",
  },
];

const ProjectDisplayProcessCard = () => {
  return (
    // <div className="flex justify-between flex-wrap w-full">
    <div className="w-full flex justify-between items-center flex-wrap navsize:justify-center navsize:gap-[30px] ">
      {cardsContent.map((card, index) => (
        <div
          key={index}
          className="w-full max-w-[232px] mob:max-w-full px-2 min-h-[241px] border border-gold rounded-[14px] flex flex-col pt-[40px] pb-2 items-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration={card.duration}
          data-aos-easing="ease-in-out"
        >
          <div className="w-[33px] h-[33px] rounded-full mb-[10px] border border-gold flex justify-center items-center">
            <Text className="text-[16px] text-center">{card.number}</Text>
          </div>
          <Text className="text-[23px] mob:text-[23px] font-semibold text-center mb-[10px]">
            {card.title}
          </Text>
          <Text className="text-[16px] text-center">{card.description}</Text>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default ProjectDisplayProcessCard;

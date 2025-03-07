import React from "react";
import Text from "@/components/ui/Text";

interface Card {
  title: string;
  description: string;
}

interface ProjectDisplayProcessCardProps {
  cardsContent?: Card[];
}

const ProjectDisplayProcessCard: React.FC<ProjectDisplayProcessCardProps> = ({
  cardsContent,
}) => {
  if (!cardsContent || cardsContent.length === 0) {
    return null; // or render a fallback message if needed
  }

  return (
    <div className="w-full flex justify-between items-center flex-wrap navsize:justify-center navsize:gap-[30px]">
      {cardsContent.map((card, index) => (
        <div
          key={index}
          className="w-full max-w-[232px] mob:max-w-full px-2 h-[250px] border border-gold rounded-[14px] flex flex-col pt-[30px] pb-2 items-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration={1100 + index * 100}
          data-aos-easing="ease-in-out"
        >
          <div className="w-[33px] h-[33px] rounded-full mb-[10px] border border-gold flex justify-center items-center">
            <Text className="text-[16px] text-center">{index + 1}</Text>
          </div>
          <Text className="text-[23px] mob:text-[23px] font-semibold text-center mb-[10px]">
            {card.title}
          </Text>
          <Text className="text-[12px] text-center">{card.description}</Text>
        </div>
      ))}
    </div>
  );
};

export default ProjectDisplayProcessCard;

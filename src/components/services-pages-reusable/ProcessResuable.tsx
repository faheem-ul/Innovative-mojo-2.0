import React from "react";

import Text from "../ui/Text";

interface props {
  processNumber: string;
  title: string;
  description: string;
}

const ProcessResuable: React.FC<props> = ({
  processNumber,
  title,
  description,
}) => {
  return (
    <div className=" border border-[#F5D06F] mob:max-w-full rounded-[14px] w-full max-w-[297px] min-h-[261px] flex justify-center items-center">
      <div className="w-full px-5">
        <div className="w-[35px] h-[35px] rounded-full border border-gold flex justify-center items-center mx-auto">
          <Text className="text-[19px] font-semibold">{processNumber}</Text>
        </div>
        <Text className="text-center font-semibold text-[21px] mob:text-[21px] mt-[15px] leading-[30px] flex justify-center items-center">
          {title}
        </Text>
        <Text className="mt-[8px] text-center text-[14px] mob:text-[14px]">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default ProcessResuable;

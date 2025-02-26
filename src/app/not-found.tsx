import React from "react";

import Text from "@/components/ui/Text";
import LinkButton from "@/components/ui/LinkButton";
const NotFound = () => {
  return (
    <div className="mt-[152px] flex justify-center items-center flex-col">
      <Text className="text-white text-[32px] font-semibold text-center">
        Ooosps!! sorry <br />
        we couldn’t find what you were looking for
      </Text>
      <Text className="text-[300px] mob:text-[180px] font-black bg-gradient-to-b from-[#EBC15C] to-[#856D34] bg-clip-text text-transparent mb-[8px]">
        404
      </Text>
      <LinkButton
        href="/"
        className="bg-gold w-[251px] h-[62px] text-[18px] mb-[100px]"
      >
        Back to the homepage
      </LinkButton>
    </div>
  );
};

export default NotFound;

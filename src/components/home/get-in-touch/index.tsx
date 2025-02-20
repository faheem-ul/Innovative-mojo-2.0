import React from "react";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const HomeGetinTouch = () => {
  return (
    <div className="w-full h-full px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text as="h2" className="text-center mt-[159px] mb-[190px]">
            Dive Into Unparalleled{" "}
            <span className="text-gold">Digital Transformation</span>
            With Innovative MOJO
          </Text>
          <div className="flex justify-between xl:flex-col xl:justify-center xl:items-center">
            <div>
              <Text as="h2" className="mb-[20px] text-gold">
                Get in touch
              </Text>
              <Text>
                Tell your story. Bolden your brand. Shape your future. <br />
                Let’s build a digital legacy that lasts.
              </Text>
            </div>
            <div className="w-full max-w-[50%] xl:max-w-fi">
              <form action="" className="w-full">
                <input
                  type="text"
                  placeholder="Your full Name*"
                  className="w-full bg-transparent text-white placeholder:text-white placeholder:font-poppins font-poppins focus:outline-none "
                />
                <div className="input-gradient w-full h-[1px] mt-[9px] mb-[45px]"></div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-transparent text-white placeholder:text-white placeholder:font-poppins font-poppins focus:outline-none "
                />
                <div className="input-gradient w-full h-[1px] mt-[9px] mb-[45px]"></div>
                <input
                  type="text"
                  placeholder="Phone*"
                  className="w-full bg-transparent text-white placeholder:text-white placeholder:font-poppins font-poppins focus:outline-none "
                />
                <div className="input-gradient w-full h-[1px] mt-[9px] mb-[45px]"></div>
                <input
                  type="text"
                  placeholder="Name company*"
                  className="w-full bg-transparent text-white placeholder:text-white placeholder:font-poppins font-poppins focus:outline-none "
                />
                <div className="input-gradient w-full h-[1px] mt-[9px] mb-[45px]"></div>
                <input
                  type="text"
                  placeholder="Country*"
                  className="w-full bg-transparent text-white placeholder:text-white placeholder:font-poppins font-poppins focus:outline-none "
                />
                <div className="input-gradient w-full h-[1px] mt-[9px]"></div>
                <Button className="w-[154px] h-[45px] mt-[75px] ml-auto mb-[150px]">
                  Send now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGetinTouch;

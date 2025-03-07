"use client";

import React, { useState } from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

import selectheal from "@/public/images/mojo-minute/select-heal.webp";
import compilation from "@/public/images/mojo-minute/compilation.webp";
import intel from "@/public/images/mojo-minute/intel.webp";

import { IoMdClose } from "react-icons/io";

interface props {
  classname?: string;
}

const MojoMinuteWhatPossible: React.FC<props> = ({ classname }) => {
  // Holds the video path to play, or null if no video is open
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  // Opens the modal with the corresponding video
  const handleOpenVideo = (videoPath: string) => {
    setOpenVideo(videoPath);
  };

  // Closes the modal
  const handleCloseVideo = () => {
    setOpenVideo(null);
  };

  return (
    <div className="w-full h-full mt-[76px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="w-full max-w-[1236px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <Text as="h2" className="mb-[60px] text-center">
            See&nbsp;What&apos;s <span className="text-gold">Possible</span>
          </Text>
          <div
            className={cn(
              "flex mb-[170px] mob:mb-[40px] justify-between navsize:flex-col navsize:items-center navsize:justify-center navsize:gap-[30px]",
              classname
            )}
          >
            <div
              onClick={() => handleOpenVideo("/videos/select healing.mp4")}
              className="cursor-pointer"
            >
              <Image
                src={selectheal}
                alt="Select Heal"
                className="w-full max-w-[396px]"
              />
              <Text
                as="h3"
                className="mt-[20px] text-[25px] text-gold text-center"
              >
                Select Healing
              </Text>
            </div>
            <div
              onClick={() => handleOpenVideo("/videos/ourteamvid.mp4")}
              className="cursor-pointer"
            >
              <Image
                src={compilation}
                alt="Compilation"
                className="w-full max-w-[396px]"
              />
              <Text
                as="h3"
                className="mt-[20px] text-[25px] text-gold text-center"
              >
                Compilation of work
              </Text>
            </div>
            <div
              onClick={() => handleOpenVideo("/videos/intalvideo.mp4")}
              className="cursor-pointer"
            >
              <Image src={intel} alt="Intel" className="w-full max-w-[396px]" />
              <Text
                as="h3"
                className="mt-[20px] text-[25px] text-gold text-center"
              >
                Intel
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Video Player */}
      {openVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-slideDown">
          <div className="relative max-w-[700px] w-full px-5">
            {/* Close Icon */}
            <button
              onClick={handleCloseVideo}
              className="absolute top-2 right-2 text-white z-10 mx-5"
            >
              <IoMdClose size={30} />
            </button>
            <video className="w-full" controls autoPlay>
              <source src={openVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
        @keyframes slideDown {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default MojoMinuteWhatPossible;

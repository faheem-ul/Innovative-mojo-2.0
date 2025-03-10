"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { StaticImageData } from "next/image";

import { IoMdClose } from "react-icons/io";

import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

interface props {
  image: StaticImageData;
  className?: string;
  overlayText?: string;
  buttonText?: string;
  buttonHref?: string;
  videoUrl?: string;
}

const ReusableProject: React.FC<props> = ({
  image,
  className,
  overlayText,
  buttonHref,
  videoUrl,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (videoUrl) {
      e.preventDefault();
      setShowVideo(true);
    }
  };

  // the video modal.
  const videoModal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-5">
      {/* Blurred dark background on the opening of video*/}
      <div
        className="absolute inset-0 bg-black bg-opacity-70"
        onClick={() => setShowVideo(false)}
      ></div>
      {/* Video container with centered layout. */}
      <div className="relative z-[100] max-w-[800px] w-full mx-auto ">
        <video controls autoPlay className="w-full max-h-screen">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={() => setShowVideo(false)}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full w-[30px] h-[30px] flex justify-center items-center"
        >
          <IoMdClose className="text-[18px]" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative group overflow-hidden rounded-lg">
      {/* for mobile side */}
      <div className="hidden mob:block">
        <Text className="mob:text-[38px] mob:leading-[44px] font-semibold">
          {overlayText}
        </Text>
        <div className="mb-[30px] w-full flex justify-start items-end mt-1">
          {videoUrl ? (
            <button
              onClick={handleClick}
              className="font-poppins bg-transparent text-[20px] mt-3 text-gold font-normal underline underline-offset-8"
            >
              Play Video
            </button>
          ) : (
            <a
              href={buttonHref}
              onClick={handleClick}
              className="font-poppins bg-transparent text-[20px] mt-3 text-gold font-normal underline underline-offset-8"
            >
              Visit Website
            </a>
          )}
        </div>
        <Image
          src={image}
          alt="image"
          className={cn("mob:block hidden mb-[47px]", className)}
        />
      </div>

      {/* for mobile side */}

      {/* FOR DESKTOP VIEW */}
      {/* Image */}
      <Image
        src={image}
        alt="image"
        className={cn("mob:hidden block", className)}
      />

      {/* Overlay */}
      <div className="absolute inset-0 project-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[40px] flex items-end justify-center mob:hidden">
        <div className="w-full justify-between items-center px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-2000">
          <Text className="text-[25px] font-semibold">{overlayText}</Text>
          <div className="mb-[30px] ml-auto w-full flex justify-end items-end mt-1">
            {videoUrl ? (
              <button
                onClick={handleClick}
                className="font-poppins bg-transparent hover:bg-transparent text-gold font-normal underline underline-offset-8"
              >
                Play Video
              </button>
            ) : (
              <a
                href={buttonHref}
                onClick={handleClick}
                className="font-poppins bg-transparent hover:bg-transparent text-gold font-normal underline underline-offset-8"
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Render video modal using a portal so that it overlays all other content */}
      {showVideo &&
        videoUrl &&
        typeof window !== "undefined" &&
        ReactDOM.createPortal(videoModal, document.body)}
    </div>
  );
};

export default ReusableProject;

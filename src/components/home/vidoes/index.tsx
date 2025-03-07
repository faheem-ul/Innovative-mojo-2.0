"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import videoimage1 from "@/public/images/home/videoimage1.png";
import videoimage2 from "@/public/images/home/videoimage2.png";
import videoimage3 from "@/public/images/home/videoimage3.png";
import videoimage4 from "@/public/images/home/videoimage4.png";
import videoimage5 from "@/public/images/home/videoimage5.png";

const HomeVideos = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const cloneRef = useRef<HTMLVideoElement | null>(null);
  const originalRect = useRef<DOMRect | null>(null);

  // Define video paths for each image.
  // Update these paths to match your video files located in the public/videos folder.
  const videoPath1 =
    "/videos/_Far From Home_ - Shot on the Canon EOS R5 C (1).mp4";
  const videoPath2 = "/videos/intalvideo.mp4";
  const videoPath3 = "/videos/Tennesse state University.mp4";
  const videoPath4 = "/videos/Meet Your Director.mp4";
  const videoPath5 = "/videos/select healing.mp4";

  useEffect(() => {
    gsap.fromTo(
      ".video-image",
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Updated openLightbox to accept a video source as an argument
  const openLightbox = (
    videoSrc: string,
    e: React.MouseEvent<HTMLImageElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    originalRect.current = rect;
    setSelectedVideo(videoSrc);

    setTimeout(() => {
      // Create a video element instead of an image element
      const clone = document.createElement("video");
      clone.src = videoSrc;
      clone.autoplay = true;
      clone.controls = true;
      clone.playsInline = true;
      // Optionally set muted if required (e.g., for autoplay on mobile)
      // clone.muted = true;

      clone.style.position = "fixed";
      clone.classList.add("fixed", "rounded-lg", "shadow-lg");
      clone.style.top = `${rect.top}px`;
      clone.style.left = `${rect.left}px`;
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.objectFit = "cover";
      clone.style.zIndex = "100";
      clone.style.opacity = "0"; // Start hidden
      document.body.appendChild(clone);
      cloneRef.current = clone;

      // Ensure the lightbox overlay is visible
      gsap.set(".lightbox-overlay", { opacity: 0, display: "block" });

      const tl = gsap.timeline();
      tl.to(
        ".lightbox-overlay",
        {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.8,
          ease: "power2.out",
        },
        0
      ).to(
        clone,
        {
          top: "50%",
          left: "50%",
          scale: 1.4,
          transform: "translate(-50%, -50%)",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        0
      );
    }, 10);
  };

  const closeLightbox = () => {
    if (cloneRef.current && originalRect.current) {
      gsap
        .timeline()
        .to(
          cloneRef.current,
          {
            left: originalRect.current.left,
            top: originalRect.current.top,
            scale: 1,
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => {
              cloneRef.current?.remove();
              setSelectedVideo(null);
            },
          },
          0
        )
        .to(
          ".lightbox-overlay",
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.6,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(".lightbox-overlay", { display: "none" });
            },
          },
          0
        );
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full mt-[122px] xl:px-5 mb-[127px] mob:mb-[66px]"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <div className="w-full flex justify-between 2xl:justify-center gap-[22px] flex-wrap">
            <Image
              src={videoimage1}
              alt=""
              className="w-full max-w-[580px] video-image transition-transform duration-1000"
              onClick={(e) => openLightbox(videoPath1, e)}
            />
            <div className="flex justify-between xl:justify-center gap-[22px] w-full max-w-[50%] xl:max-w-full">
              <Image
                src={videoimage2}
                alt=""
                className="w-full max-w-[292px] mob:max-w-[187px] video-image transition-transform duration-1000"
                onClick={(e) => openLightbox(videoPath2, e)}
              />
              <Image
                src={videoimage3}
                alt=""
                className="w-full max-w-[292px] mob:max-w-[187px] video-image transition-transform duration-1000"
                onClick={(e) => openLightbox(videoPath3, e)}
              />
            </div>
          </div>

          <div className="flex justify-between 2xl:justify-center flex-wrap gap-[28px] w-full max-w-full mt-[12px]">
            <Image
              src={videoimage4}
              alt=""
              className="w-full max-w-[580px] mob:h-full mob:max-w-full video-image transition-transform duration-1000"
              onClick={(e) => openLightbox(videoPath4, e)}
            />
            <Image
              src={videoimage5}
              alt=""
              className="w-full max-w-[620px] mob:h-full mob:max-w-full video-image transition-transform duration-1000"
              onClick={(e) => openLightbox(videoPath5, e)}
            />
          </div>
        </div>
      </div>
      {selectedVideo && (
        <div
          className="lightbox-overlay fixed inset-0 top-0 left-0 w-full h-full z-50 bg-black bg-opacity-80 opacity-0"
          onClick={closeLightbox}
        />
      )}
    </div>
  );
};

export default HomeVideos;

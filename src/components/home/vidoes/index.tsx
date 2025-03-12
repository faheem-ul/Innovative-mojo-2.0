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

  // Outer container for extra vertical scroll space.
  const outerContainerRef = useRef<HTMLDivElement | null>(null);
  // Main sticky container that holds the UI.
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const cloneRef = useRef<HTMLVideoElement | null>(null);
  const originalRect = useRef<DOMRect | null>(null);

  // Video paths
  const videoPath1 =
    "/videos/_Far From Home_ - Shot on the Canon EOS R5 C (1).mp4";
  const videoPath2 = "/videos/intalvideo.mp4";
  const videoPath3 = "/videos/Tennesse state University.mp4";
  const videoPath4 = "/videos/Meet Your Director.mp4";
  const videoPath5 = "/videos/select healing.mp4";

  useEffect(() => {
    if (containerRef.current) {
      // Apply entrance animation similar to your first snippet.
      gsap.fromTo(
        containerRef.current,
        { x: "80%", scale: 0.9 },
        {
          x: "0%",
          scale: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
            // duration: "1000",
            // markers: true,
          },
        }
      );
    }
  }, []);

  const openLightbox = (
    videoSrc: string,
    e: React.MouseEvent<HTMLImageElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    originalRect.current = rect;
    setSelectedVideo(videoSrc);

    setTimeout(() => {
      const clone = document.createElement("video");
      clone.src = videoSrc;
      clone.autoplay = true;
      clone.controls = true;
      clone.playsInline = true;
      clone.style.position = "fixed";
      clone.classList.add("fixed", "rounded-lg", "shadow-lg");
      clone.style.top = `${rect.top}px`;
      clone.style.left = `${rect.left}px`;
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.objectFit = "cover";
      clone.style.zIndex = "100";
      clone.style.opacity = "0";
      document.body.appendChild(clone);
      cloneRef.current = clone;

      gsap.set(".lightbox-overlay", { opacity: 0, display: "block" });

      const isMobile = window.innerWidth < 768;
      let finalWidth;
      let finalHeight;
      const aspectRatio = rect.width / rect.height;

      if (isMobile) {
        finalWidth = window.innerWidth - 40;
        finalHeight = finalWidth / aspectRatio;
      } else {
        finalWidth = rect.width * 1.4;
        finalHeight = rect.height * 1.4;
      }

      // For the first video, cap the width at 880px.
      if (videoSrc === videoPath1) {
        finalWidth = Math.min(finalWidth, 1280);
        finalHeight = finalWidth / aspectRatio;
      }

      gsap
        .timeline()
        .to(
          ".lightbox-overlay",
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.8,
            ease: "power2.out",
          },
          0
        )
        .to(
          clone,
          {
            top: "50%",
            left: "50%",
            width: finalWidth,
            height: finalHeight,
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
      cloneRef.current.pause();
      cloneRef.current.currentTime = 0;

      gsap
        .timeline()
        .to(
          cloneRef.current,
          {
            left: originalRect.current.left,
            top: originalRect.current.top,
            width: originalRect.current.width,
            height: originalRect.current.height,
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
    // Outer container provides extra scroll height.
    <div className="flex justify-center items-center w-full">
      <div ref={outerContainerRef} className="relative w-full overflow-hidden">
        {/* Sticky container holding the UI */}
        <div ref={containerRef} className="sticky top-0 w-full">
          <div className="w-full h-full mt-[122px] xl:px-5 mb-[127px] mob:mb-[66px]">
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-full max-w-[1240px]">
                <div className="w-full">
                  {/* Updated max-width for the first video */}
                  <Image
                    src={videoimage1}
                    alt=""
                    className="w-full  video-image transition-transform duration-1000"
                    onClick={(e) => openLightbox(videoPath1, e)}
                  />
                  <div className="flex justify-between xl:justify-center flex-wrap w-full gap-[22px] mt-[20px]">
                    <Image
                      src={videoimage2}
                      alt=""
                      className="w-full max-w-[700px] xl:max-w-full video-image transition-transform duration-1000"
                      onClick={(e) => openLightbox(videoPath2, e)}
                    />
                    <Image
                      src={videoimage3}
                      alt=""
                      className="w-full max-w-[505px] xl:max-w-full video-image transition-transform duration-1000"
                      onClick={(e) => openLightbox(videoPath3, e)}
                    />
                  </div>
                </div>

                <div className="flex justify-between flex-wrap xl:justify-center gap-[22px] w-full max-w-full mt-[20px]">
                  <Image
                    src={videoimage4}
                    alt=""
                    className="w-full max-w-[700px] xl:max-w-full mob:h-full mob:max-w-full video-image transition-transform duration-1000"
                    onClick={(e) => openLightbox(videoPath4, e)}
                  />
                  <Image
                    src={videoimage5}
                    alt=""
                    className="w-full max-w-[505px] mob:h-full xl:max-w-full mob:max-w-full video-image transition-transform duration-1000"
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
        </div>
      </div>
    </div>
  );
};

export default HomeVideos;

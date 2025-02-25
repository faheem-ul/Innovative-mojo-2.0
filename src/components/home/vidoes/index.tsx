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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const cloneRef = useRef<HTMLImageElement | null>(null);
  const originalRect = useRef<DOMRect | null>(null);

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
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",

          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const openLightbox = (src: string, e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    originalRect.current = rect;
    setSelectedImage(src);

    setTimeout(() => {
      const clone = document.createElement("img");
      clone.src = src;
      clone.style.position = "fixed";
      clone.classList.add("fixed", "rounded-lg", "shadow-lg");
      clone.style.top = `${rect.top}px`;
      clone.style.left = `${rect.left}px`;
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.objectFit = "cover";
      clone.style.animationDuration = "500";
      clone.style.zIndex = "100";
      document.body.appendChild(clone);
      cloneRef.current = clone;
      gsap.to(clone, {
        top: "50%",
        left: "50%",
        // width: "500px",
        // height: "375px",
        transform: "translate(-50%, -50%)",
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(".lightbox-overlay", {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5,
      });
    }, 10);
  };

  const closeLightbox = () => {
    if (cloneRef.current && originalRect.current) {
      gsap.to(cloneRef.current, {
        duration: 0.5,
        ease: "power3.inOut",
        left: originalRect.current.left,
        top: originalRect.current.top,
        width: originalRect.current.width,
        height: originalRect.current.height,
        opacity: 0,

        onCompleted: () => {
          cloneRef.current?.remove();
          setSelectedImage(null);
        },
      });
      gsap.to(".lightbox-overlay", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
      });
    }
  };

  return (
    <div className="w-full h-full mt-[122px] xl:px-5 mb-[127px] mob:mb-[66px]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <div className="w-full flex justify-between 2xl:justify-center gap-[22px] flex-wrap">
            <Image
              src={videoimage1}
              alt=""
              className="w-full max-w-[580px] video-image transition-transform duration-1000"
              onClick={(e) => openLightbox(videoimage1.src, e)}
            />
            <div className="flex justify-between xl:justify-center gap-[22px] w-full max-w-[50%] xl:max-w-full">
              <Image
                src={videoimage2}
                alt=""
                className="w-full max-w-[292px] mob:max-w-[187px] video-image transition-transform duration-1000"
                onClick={(e) => openLightbox(videoimage2.src, e)}
              />
              <Image
                src={videoimage3}
                alt=""
                className="w-full max-w-[292px] mob:max-w-[187px] video-image transition-transform duration-1000"
                onClick={(e) => openLightbox(videoimage3.src, e)}
              />
            </div>
          </div>

          <div className="flex justify-between 2xl:justify-center flex-wrap gap-[28px] w-full max-w-full mt-[12px]">
            <Image
              src={videoimage4}
              alt=""
              className="w-full max-w-[580px] 2xl:h-[400px] mob:h-full mob:max-w-full video-image transition-transform duration-1000"
              onClick={(e) => openLightbox(videoimage4.src, e)}
            />
            <Image
              src={videoimage5}
              alt=""
              className="w-full max-w-[620px] 2xl:h-[400px] mob:h-full mob:max-w-full video-image transition-transform duration-1000"
              onClick={(e) => openLightbox(videoimage5.src, e)}
            />
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          className="lightbox-overlay fixed inset-0 top-0 left-0 w-full h-full z-50 bg-black bg-opacity-80"
          onClick={closeLightbox}
        />
      )}
    </div>
  );
};

export default HomeVideos;

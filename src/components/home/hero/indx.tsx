"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/components/ui/Text";
import TypeWriterText from "@/components/ui/TypeWriterText";

import video from "@/public/images/home/hero-video.png";

gsap.registerPlugin(ScrollTrigger);

const HomeHero = () => {
  const imageRef = useRef(null);
  const wrapperRef = useRef(null); // Parent container for perspective

  useEffect(() => {
    if (imageRef.current && wrapperRef.current) {
      gsap.set(wrapperRef.current, { perspective: 1200 }); // Set perspective on parent

      gsap.fromTo(
        imageRef.current,
        {
          rotateX: 18,
          // opacity: 0.8,
        },
        {
          rotateX: 0, // End tilt
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-full h-full mt-[76px] px-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <Text as="h1" className="flex gap-6 mob:flex-col mob:gap-0">
            Innovative{" "}
            <span>
              <TypeWriterText
                AnimatatedWords={[
                  "Mojo",
                  "AI",
                  "Design",
                  "Marketing",
                  "Development",
                ]}
              />
            </span>
          </Text>

          <Text className="text-[32px] font-semibold leading-[38px] mb-[121px] mt-2 mob:mb-[60px] mob:text-center mob:mt-1">
            Where AI meets creativity for unstoppable{" "}
            <span className="text-gold"> brand growth</span>
          </Text>
        </div>
      </div>

      {/* Parent wrapper with perspective applied */}
      <div
        className="perspective-container relative w-full overflow-hidden flex justify-center mb-[200px] mob:mb-[60px]"
        ref={wrapperRef}
      >
        <div
          className="relative overflow-hidden transition-all duration-500 z-10 h-auto w-full"
          ref={imageRef}
        >
          <Image
            src={video}
            alt="Animated Hero Video"
            className="w-full object-cover max-w-[1232px] mx-auto"
            style={{ aspectRatio: "16/9" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

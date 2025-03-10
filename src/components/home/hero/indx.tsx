"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/components/ui/Text";
import TypeWriterText from "@/components/ui/TypeWriterText";

gsap.registerPlugin(ScrollTrigger);

const HomeHero = () => {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && wrapperRef.current) {
      // Set perspective and transform origin
      gsap.set(wrapperRef.current, { perspective: 1200 });
      gsap.set(videoRef.current, {
        transformOrigin: "center center",
        force3D: true,
      });

      // Use a fromTo tween with a symmetric easing for smooth, equal transitions in both directions
      gsap.fromTo(
        videoRef.current,
        {
          rotateX: 25,
          scale: 1.02,
        },
        {
          rotateX: 0,
          scale: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 0.2,
            // markers: true,
          },
        }
      );
    }

    if (textRef.current) {
      // Fade out the text on scroll and fade back in when scrolling up
      gsap.fromTo(
        textRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 45%",
            end: "top 20%",
            scrub: true,
            // markers: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      className="w-full h-full mt-[76px] px-5"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]" ref={textRef}>
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

      <div
        className="relative overflow-hidden mx-auto flex justify-center mb-[200px] mob:mb-[60px]"
        ref={wrapperRef}
        style={{ width: "90vw" }}
      >
        <div
          className="relative overflow-hidden transition-all duration-500 z-10 h-auto w-full"
          ref={videoRef}
        >
          <video
            src="/videos/ourteamvid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover mx-auto rounded-[50px]"
            style={{ aspectRatio: "16/9" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

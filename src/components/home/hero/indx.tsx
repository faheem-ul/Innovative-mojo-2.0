"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

import Text from "@/components/ui/Text";
import TypeWriterText from "@/components/ui/TypeWriterText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HomeHero = () => {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const smootherRef = useRef(null);
  useEffect(() => {
    // Initialize ScrollSmoother
    // const smoother = ScrollSmoother.create({
    //   smooth: 0.7,
    //   effects: true,
    // });
     ScrollSmoother.create({
    smooth: 0.7,
    effects: true,
  });

 
    if (videoRef.current && wrapperRef.current) {
      gsap.set(wrapperRef.current, { perspective: 1200 });
      gsap.set(videoRef.current, {
        transformOrigin: "center center",
        force3D: true,
      });

      gsap.fromTo(
        videoRef.current,
        {
          rotateX: 20,
          scale: 1.02,
        },
        {
          rotateX: 0,
          scale: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 90%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0.1,
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 45%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
    ref={smootherRef}
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
        className="relative w-full overflow-hidden items-center flex justify-center mb-[200px] mob:mb-[60px]"
        ref={wrapperRef}
      >
        <div
          className="relative w-full max-w-[1240px] xl:max-w-[1100px] mx-auto z-10 h-auto"
          ref={videoRef}
          
        >
          <video
            src="/videos/ourteamvid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover max-w-full rounded-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

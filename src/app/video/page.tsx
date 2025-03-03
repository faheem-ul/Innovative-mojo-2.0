import React from "react";
import VideoHero from "@/components/video/hero";
import VideoObjectives from "@/components/video/objectives";
import VideoProcess from "@/components/video/process";
import VideoWhyMojo from "@/components/video/whymojo";
import ReadytoStart from "@/components/projects/ready-to-start";

const VideoPage = () => {
  return (
    <>
      <VideoHero />
      <VideoObjectives />
      <VideoProcess />
      <VideoWhyMojo />
      <ReadytoStart />
    </>
  );
};

export default VideoPage;

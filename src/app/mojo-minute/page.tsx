import React from "react";
import MojoMinuteHero from "@/components/mojo-minute/hero";
import MojoMinuteWhatPossible from "@/components/mojo-minute/what-possible";
import MojoWhatIncluded from "@/components/mojo-minute/what-included";
import ChooseMojoMinute from "@/components/mojo-minute/why-choose";
import MojoMinuteGet from "@/components/mojo-minute/get-mojo";
import ReadytoStart from "@/components/projects/ready-to-start";
const MojoMinutePage = () => {
  return (
    <>
      <MojoMinuteHero />
      <MojoMinuteWhatPossible />
      <MojoWhatIncluded />
      <ChooseMojoMinute />
      <MojoMinuteGet />
      <ReadytoStart />
    </>
  );
};

export default MojoMinutePage;

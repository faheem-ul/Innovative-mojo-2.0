import React from "react";
import MojoFusionHero from "@/components/mojo-fusion/hero";
import MojoFusionWhatIncluded from "@/components/mojo-fusion/what-included";
import MojoFusionMinuteGet from "@/components/mojo-fusion/get-mojo";
import MojoMinuteWhatPossible from "@/components/mojo-minute/what-possible";
import ReadytoStart from "@/components/projects/ready-to-start";

const MojoFusionPage = () => {
  return (
    <>
      <MojoFusionHero />
      <MojoFusionWhatIncluded />
      <MojoFusionMinuteGet />
      <MojoMinuteWhatPossible />
      <ReadytoStart />
    </>
  );
};

export default MojoFusionPage;

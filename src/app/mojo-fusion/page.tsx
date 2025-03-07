import React from "react";
import MojoFusionHero from "@/components/mojo-fusion/hero";
import MojoFusionWhatIncluded from "@/components/mojo-fusion/what-included";
import ChooseMojoFusion from "@/components/mojo-fusion/choose-package";
import MojoFusionMinuteGet from "@/components/mojo-fusion/get-mojo";
import MojoMinuteWhatPossible from "@/components/mojo-minute/what-possible";
import ReadytoStart from "@/components/projects/ready-to-start";

const MojoFusionPage = () => {
  return (
    <>
      <MojoFusionHero />
      <MojoFusionWhatIncluded />
      <ChooseMojoFusion />
      <MojoFusionMinuteGet />
      <MojoMinuteWhatPossible classname="mb-0" />
      <ReadytoStart classname="mt-[190px]" />
    </>
  );
};

export default MojoFusionPage;

import React from "react";

import SeoMasteryHero from "@/components/seo-mastery/hero";
import SeoMasteryIncluded from "@/components/seo-mastery/what-included";
import ChooseSeoMastery from "@/components/seo-mastery/why-choose";
import SEOMasteryGet from "@/components/seo-mastery/get-package";
import ReadytoStart from "@/components/projects/ready-to-start";
const MojoMinutePage = () => {
  return (
    <>
      <SeoMasteryHero />
      <SeoMasteryIncluded />
      <ChooseSeoMastery />
      <SEOMasteryGet />
      <ReadytoStart />
    </>
  );
};

export default MojoMinutePage;

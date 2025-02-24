import React from "react";
import SMMHero from "@/components/smm/hero";
import SMMObjectives from "@/components/smm/objectives";
import SMMProcess from "@/components/smm/process";
import SMMWhyMojo from "@/components/smm/why-mojo";
import ReadytoStart from "@/components/projects/ready-to-start";

const SeoPage = () => {
  return (
    <>
      <SMMHero />
      <SMMObjectives />
      <SMMProcess />
      <SMMWhyMojo />
      <ReadytoStart />
    </>
  );
};

export default SeoPage;

import React from "react";
import SeoHero from "@/components/seo/hero";
import SeoObjectives from "@/components/seo/objectives";
import SeoProcess from "@/components/seo/process";
import SeoWhyMojo from "@/components/seo/why-mojo";
import ReadytoStart from "@/components/projects/ready-to-start";

const SeoPage = () => {
  return (
    <>
      <SeoHero />
      <SeoObjectives />
      <SeoProcess />
      <SeoWhyMojo />
      <ReadytoStart />
    </>
  );
};

export default SeoPage;

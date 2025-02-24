import React from "react";
import WebHero from "@/components/web/hero";
import WebObjectives from "@/components/web/objectives";
import WebProcess from "@/components/web/process";
import WebWhyMojo from "@/components/web/why-mojo";
import ReadytoStart from "@/components/projects/ready-to-start";

const SeoPage = () => {
  return (
    <>
      <WebHero />
      <WebObjectives />
      <WebProcess />
      <WebWhyMojo />
      <ReadytoStart />
    </>
  );
};

export default SeoPage;

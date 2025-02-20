import React from "react";
import AboutHero from "@/components/about/hero";
import AboutTeam from "@/components/about/team";
import AboutServices from "@/components/about/services";
import ReadytoStart from "@/components/projects/ready-to-start";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutTeam />
      <AboutServices />
      <ReadytoStart />
    </>
  );
};

export default AboutPage;

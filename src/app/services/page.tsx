import React from "react";
import ServicesHero from "@/components/services/hero";
import Services from "@/components/services/services";
import ReadytoStart from "@/components/projects/ready-to-start";
const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <Services />
      <ReadytoStart />
    </>
  );
};

export default ServicesPage;

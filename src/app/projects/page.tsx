import React from "react";

import ProjectsHero from "@/components/projects/hero";
import Projects from "@/components/projects/projects";
import ProjectsMobSlider from "@/components/projects/projects/ProjectsMobSlider";
import ReadytoStart from "@/components/projects/ready-to-start";

const ProjectsPage = () => {
  return (
    <>
      <ProjectsHero />
      <Projects />
      <ProjectsMobSlider />
      <ReadytoStart />
    </>
  );
};

export default ProjectsPage;

import React from "react";

import ProjectsHero from "@/components/projects/hero";
import Projects from "@/components/projects/projects";
import ReadytoStart from "@/components/projects/ready-to-start";

const ProjectsPage = () => {
  return (
    <>
      <ProjectsHero />
      <Projects />
      <ReadytoStart />
    </>
  );
};

export default ProjectsPage;

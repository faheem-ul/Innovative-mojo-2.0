import React from "react";
import ProjectPage from "@/components/display-project";

type Params = Promise<{ projectId: string }>;

export default async function ProjectDisplay({ params }: { params: Params }) {
  const { projectId } = await params;

  return <ProjectPage params={{ projectId }} />;
}

import { notFound } from "next/navigation";
import Image from "next/image";
// import Link from "next/link";

import { projectsData } from "@/lib/projectsData";
import ProjectDisplayProcessCard from "./ProjectDisplayProcessCard";
import Text from "@/components/ui/Text";

interface ProjectPageProps {
  params: { projectId: string };
}

// Pre-generate static paths
export async function generateStaticParams() {
  return Object.keys(projectsData).map((projectId) => ({
    projectId,
  }));
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const project = projectsData[params.projectId];

  if (!project) {
    return notFound();
  }

  return (
    <div className="w-full h-full px-5 mt-[76px] mb-[236px]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          {/* Hero Section */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Text as="h1" className="text-gold">
              {project.title}
            </Text>
            <Text className="mt-[29px] max-w-[875px] mob:text-center">
              {project.description}
            </Text>
          </div>
          {/* Hero Section */}

          {/* Process Section */}
          <div className="flex justify-between flex-wrap navsize:justify-center navsize:gap-[40px] w-full mt-[236px] mob:my-[70px] mb-[302px]">
            <div
              className="w-full max-w-[610px]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Text className="text-gold mb-[25px] navsize:mb-[20px]" as="h2">
                Process
              </Text>
              <Text>{project.processDescription}</Text>
            </div>
            <Image
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              src={project.image}
              alt="image"
              className="w-full max-w-[600px] hover:scale-110 transition-all duration-1000"
            />
          </div>
          {/* Process Section */}

          {/* Process Cards */}
          <ProjectDisplayProcessCard />
          {/* Process Cards */}

          {/* results */}
          <div className="flex justify-between flex-wrap 2xl:justify-center w-full mob:gap-[40px] mt-[179px] mob:my-[80px] mb-[211px]">
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Text as="h2" className="text-gold mb-[90px] mob:mb-[20px]">
                Results
              </Text>
              <Text className="text-[32px] font-semibold mob:text-[25px] mb-[100px] mob:mb-[20px]">
                The collaboration was a resounding success
              </Text>
              {project.Results?.map((result, index) => (
                <div
                  className="mb-[20px] border border-transparent hover:border-gold hover:text-gold group rounded-[16px] hover:p-4 duration-700"
                  key={index}
                >
                  <Text className=" group-hover:text-gold">{result}</Text>
                </div>
              ))}
            </div>
            <Image
              src={project.ResultImage}
              alt="result image"
              className="w-full max-w-[488px] hover:scale-110 duration-700"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
          </div>
          {/* results */}

          {/* Testimonials */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Text as="h2" className="text-gold mb-[68px]">
              Testimonial
            </Text>
            <Text>
              {project.testimonialDescription
                .split("<br />")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </Text>
          </div>

          {/* Testimonials */}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

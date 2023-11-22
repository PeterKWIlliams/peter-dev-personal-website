import { FC } from "react";
import { ProjectCard, projects } from "./project-card";

interface ProjectShellProps {}

const ProjectShell: FC<ProjectShellProps> = () => {
  return (
    <section className=" flex flex-col space-y-8 justify-self-center ">
      <h2 className=" flex w-full justify-center text-2xl tracking-wider text-black sm:col-span-2 ">
        <span className="border-spacing-3   border-8 border-solid border-black px-2 py-1 text-3xl tracking-wider text-black">
          PROJECTS
        </span>
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShell;

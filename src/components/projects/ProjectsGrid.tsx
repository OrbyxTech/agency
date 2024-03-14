import { GetProjectsResponse } from "../../lib/axios/types";
import ProjectsGridItem from "./ProjectsGridItem";

interface Props {
  className?: string;
  data: GetProjectsResponse;
}

const ProjectsGrid = ({ data, className }: Props) => {
  return (
    <div
      className={`my-20 grid grid-cols-1 sm:grid-cols-2 max-lg:gap-y-12 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center ${className}`}
    >
      {data?.data?.length > 0
        ? data.data.map((project) => (
            <ProjectsGridItem key={`project-${project.id}`} project={project} />
          ))
        : "There is no project"}
    </div>
  );
};

export default ProjectsGrid;

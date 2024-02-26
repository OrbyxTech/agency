import { useTranslation } from "react-i18next";
import ProjectCard_1 from "./ProjectCard_1";
import getBaseUrl from "../utils/base-url";

import { motion } from "framer-motion";

interface Props {
  className: string;
  projects: any;
  title: string;
  isInView?: boolean;
}

function ProjectsSection({
  className,
  projects,
  title,
  isInView = true,
}: Props) {
  const [t] = useTranslation();

  return (
    <div className={"w-full " + className}>
      <p className="text-4xl lg:text-5xl text-slate-800 font-medium">{title}</p>
      {isInView && (
        <motion.div
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 place-items-center"
        >
          {projects?.map((project) => (
            <ProjectCard_1
              key={project.id}
              id={project.id}
              img={getBaseUrl() + project.img}
              title={project.title}
              desc={project.desc}
              link={getBaseUrl() + project.link}
              cta_text={t("home.projects.read-more-text")}
              showDesc={false}
              showReadMoreButton={true}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default ProjectsSection;

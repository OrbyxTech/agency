import ProjectCard_1 from "./ProjectCard_1"

interface Props {
    className: string,
    projects: any,
    title: string
}

function ProjectsSection({className, projects, title}: Props) {
  return (
    <div className={"w-full " + className}>
        <p className="text-4xl lg:text-5xl text-slate-800 font-medium">{title}</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 place-items-center">
        {
            projects?.map(project => (
            <ProjectCard_1
                key={project.id}
                id={project.id}
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
            />
            ))
        }
        </div>
    </div>
  )
}

export default ProjectsSection
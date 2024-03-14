import { useTranslation } from "react-i18next";
import ProjectsSection from "../components/ProjectsSection";
import Banner_1 from "../components/Banner_1";
import useGetHomePageDetails from "../hooks/useGetHomePageDetails";
import { useGetProjects } from "../lib/react-query";
import ProjectsGrid from "../components/projects/ProjectsGrid";

function Projects() {
  const [t] = useTranslation();

  const { homePageDetails, isHomePageDetailsLoading } = useGetHomePageDetails();
  const { data: projectsData, isLoading: projectsDataLoading } = useGetProjects(
    { searchTerm: "" }
  );

  if (isHomePageDetailsLoading || projectsDataLoading) {
    return (
      <div className="w-full h-[80vh] bg-gray-100 grid place-items-center">
        <p className="text-lg font-medium">Loading ....</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
        <p className="text-white text-6xl lg:text-7xl">
          {t("our-projects.title")}
        </p>
        <p className="text-lg mt-3 text-white/60">
          {t("our-projects.subtitle")}
        </p>
      </div>

      {/* Blog Grid  */}
      {projectsDataLoading ? (
        <div className="w-full h-[40rem] bg-gray-100 grid place-items-center">
          <p className="text-lg font-medium">Loading ....</p>
        </div>
      ) : projectsData?.data?.length > 0 ? (
        <ProjectsGrid data={projectsData} />
      ) : (
        "There is no article"
      )}

      <Banner_1
        text={homePageDetails.data.attributes.cta1__title}
        btnText={homePageDetails.data.attributes.cta1__btnText}
        bgColor={homePageDetails.data.attributes.cta1__bgColor}
        className="mt-20 w-full"
        tel={"+989112223344"}
      />
    </div>
  );
}

export default Projects;

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useGetHomePageDetails from "../hooks/useGetHomePageDetails";
import { useGetProjects } from "../lib/react-query";
import useDebounce from "../hooks/useDebounce";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import Search from "../components/shared/Search";
import Banner_1 from "../components/Banner_1";

function Projects() {
  const [t] = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");

  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  useEffect(() => {
    if (debouncedSearchTerm.trim() !== "") {
      setSearchParams({ q: debouncedSearchTerm });
    }
  }, [debouncedSearchTerm, setSearchParams]);

  const { homePageDetails, isHomePageDetailsLoading } = useGetHomePageDetails();
  const { data: projectsData, isLoading: projectsDataLoading } = useGetProjects(
    { searchTerm }
  );

  if (isHomePageDetailsLoading) {
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

      {/* Search */}
      <Search
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        containerClasses="max-w-sm mx-auto my-10"
        placeholder="Search Projects"
      />

      {/* Projects Grid  */}
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

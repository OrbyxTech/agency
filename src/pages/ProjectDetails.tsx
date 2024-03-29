import { useTranslation } from "react-i18next";
import Banner_1 from "../components/Banner_1";
import ProjectDetialsCard from "../components/ProjectDetialsCard";
import { useEffect } from "react";
import getBaseUrl from "../utils/base-url";
import useGetHomePageDetails from "../hooks/useGetHomePageDetails";

function ProjectDetails() {
  const [t] = useTranslation();

  const { homePageDetails, isHomePageDetailsLoading } = useGetHomePageDetails();
  if (isHomePageDetailsLoading) {
    return (
      <div className="w-full h-[80vh] bg-gray-100 grid place-items-center">
        <p className="text-lg font-medium">Loading ....</p>
      </div>
    );
  }

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
        <p className="text-white text-6xl lg:text-7xl">
          {t("project-details.title")}
        </p>
        <p className="text-lg mt-3 text-white/60">
          {t("project-details.subtitle")}
        </p>
      </div>

      <div className="mt-20 flex flex-col gap-y-12 reverse-even-child">
        {((): any => t("project-details.items"))().map((item) => (
          <ProjectDetialsCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            desc={item.desc}
            button_text={item["button-text"]}
            img={getBaseUrl() + item.img}
            workProperties={item.workProperties}
          />
        ))}
      </div>

      <Banner_1
        text={homePageDetails.data.attributes.cta1__title}
        btnText={homePageDetails.data.attributes.cta1__btnText}
        bgColor={homePageDetails.data.attributes.cta1__bgColor}
        className="mt-20"
        tel={"+989112223344"}
      />
    </div>
  );
}

export default ProjectDetails;

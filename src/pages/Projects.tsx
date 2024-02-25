import { useTranslation } from "react-i18next"
import ProjectsSection from "../components/ProjectsSection"
import Banner_1 from "../components/Banner_1"
import useGetHomePageDetails from "../hooks/useGetHomePageDetails"

function Projects() {
    const [t] = useTranslation()

    const { homePageDetails, isHomePageDetailsLoading, isHomePageDetailsValidating } = useGetHomePageDetails()
    if (isHomePageDetailsLoading || isHomePageDetailsValidating) {
        return <div className="w-full h-[80vh] bg-gray-100 grid place-items-center">
            <p className="text-lg font-medium">Loading ....</p>
        </div>
    }

    return (
        <div className="w-full min-h-screen">

            <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
                <p className="text-white text-6xl lg:text-7xl">{t("our-projects.title")}</p>
                <p className="text-lg mt-3 text-white/60">{t("our-projects.subtitle")}</p>
            </div>

            <ProjectsSection projects={t("home.projects.items")} title={t("home.projects.title")} className="mt-20 px-4 lg:px-10" />

            <Banner_1
                text={homePageDetails.data.attributes.cta1__title}
                btnText={homePageDetails.data.attributes.cta1__btnText}
                bgColor={homePageDetails.data.attributes.cta1__bgColor}
                className="mt-20 w-full"
            />

        </div>
    )
}

export default Projects
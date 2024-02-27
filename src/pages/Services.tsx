import { useTranslation } from "react-i18next";
import StatsSection_1 from "../components/StatsSection_1";
import Services_1 from "../components/Services_1";
import LatestNewsSection from "../components/LatestNewsSection";
import Banner_1 from "../components/Banner_1";
import useGetHomePageDetails from "../hooks/useGetHomePageDetails";

function Services() {
  const [t] = useTranslation();

  const { homePageDetails, isHomePageDetailsLoading } = useGetHomePageDetails();
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
          {t("our-services.title")}
        </p>
        <p className="text-lg mt-3 text-white/60">
          {t("our-services.subtitle")}
        </p>
      </div>

      <Services_1
        title={homePageDetails.data.attributes.services__title}
        text={homePageDetails.data.attributes.services__text}
        items={homePageDetails.data.attributes.ourServices}
        showReadMoreButton={false}
        className="mt-16"
      />

      <StatsSection_1
        items={homePageDetails.data.attributes.countDown}
        className="px-4 lg:px-10"
        stats={t("home.stats")}
      />

      <LatestNewsSection
        className="mt-24 w-full px-4 lg:px-10"
        title={t("home.latest-news.title")}
        readMoreText={t("home.latest-news.read-more-text")}
        showReadMoreButton={false}
      />

      <Banner_1
        text={homePageDetails.data.attributes.cta1__title}
        btnText={homePageDetails.data.attributes.cta1__btnText}
        bgColor={homePageDetails.data.attributes.cta1__bgColor}
        className="mt-24"
        tel={"+989112223344"}
      />
    </div>
  );
}

export default Services;

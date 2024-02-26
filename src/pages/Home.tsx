import AboutUs_1 from "../components/AboutUs_1";
import Hero from "../components/Hero";
import Services_1 from "../components/Services_1";
import { useTranslation } from "react-i18next";
import StatsSection_1 from "../components/StatsSection_1";
import ProjectsSection from "../components/ProjectsSection";
import WhyChooseUs from "../components/WhyChooseUs";
// import OurTeamSection from "../components/OurTeamSection"
// import LatestNewsSection from "../components/LatestNewsSection"
import Banner_1 from "../components/Banner_1";
import ScrollToTop from "react-scroll-to-top";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import useGetHomePageDetails from "../hooks/useGetHomePageDetails";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Home() {
  const [t, i18n] = useTranslation();
  const container = useRef(null);
  const location = useLocation();

  const { ref: aboutUsRef, inView: aboutUsInView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const {
    homePageDetails,
    isHomePageDetailsLoading,
    isHomePageDetailsValidating,
    homePageDetailsError,
  } = useGetHomePageDetails();

  useEffect(() => {
    if (location.hash.length > 0) {
      setTimeout(() => {
        document.getElementById(location.hash.slice(1)).scrollIntoView();
      }, 200);
    }
  }, []);

  if (isHomePageDetailsLoading || isHomePageDetailsValidating) {
    return (
      <div className="w-full h-[80vh] bg-gray-100 grid place-items-center">
        <p className="text-lg font-medium">Loading ....</p>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <Hero
        title={homePageDetails.data.attributes.heroTitle}
        text={homePageDetails.data.attributes.heroText}
        image={
          import.meta.env.VITE_PUBLIC_SERVER_BASE_URL +
          homePageDetails.data.attributes.heroImage.data.attributes.url
        }
      />

      {homePageDetails.data.attributes.showAboutUsSection ? (
        <motion.div ref={aboutUsRef} id="about-us-section">
          <AboutUs_1
            title={homePageDetails.data.attributes.aboutUs__title}
            text={homePageDetails.data.attributes.aboutUs__text}
            image={
              import.meta.env.VITE_PUBLIC_SERVER_BASE_URL +
              homePageDetails.data.attributes.aboutUs__image.data.attributes.url
            }
            isInView={aboutUsInView}
          />
        </motion.div>
      ) : null}

      {homePageDetails.data.attributes.showServicesSection ? (
        <motion.div ref={servicesRef} id="our-services-section">
          <Services_1
            title={homePageDetails.data.attributes.services__title}
            text={homePageDetails.data.attributes.services__text}
            items={homePageDetails.data.attributes.ourServices}
            showReadMoreButton={false}
            className="mt-16"
            isInView={servicesInView}
          />
        </motion.div>
      ) : null}

      {homePageDetails.data.attributes.showCountDownSection ? (
        <StatsSection_1
          items={homePageDetails.data.attributes.countDown}
          className="mt-14 px-4 lg:px-10"
          stats={t("home.stats")}
        />
      ) : null}

      {homePageDetails.data.attributes.showProjectsSection ? (
        <div ref={projectsRef} id="our-projects-section">
          <ProjectsSection
            projects={t("home.projects.items")}
            title={homePageDetails.data.attributes.projects__title}
            className="mt-20 px-4 lg:px-10"
            isInView={projectsInView}
          />
        </div>
      ) : null}

      {homePageDetails.data.attributes.showWhyChooseUsSection ? (
        <WhyChooseUs
          title={homePageDetails.data.attributes.whyChooseUs__title}
          text={homePageDetails.data.attributes.whyChooseUs__text}
          items={homePageDetails.data.attributes.whyChooseUs__reasons}
          className="mt-28 px-4 lg:px-10"
        />
      ) : null}

      {/* <OurTeamSection
        className="mt-28 px-4 lg:px-10"
        teamMembers={t("home.our-team.items")}
        readMoreButtonText={i18n.dir(i18n.language) === "ltr" ? "Read more" : "مشاهده بیشتر"}
        title={t("home.our-team.title")}
        subtitle={t("home.our-team.subtitle")}
      /> */}
      {/* <LatestNewsSection
        className="mt-28 w-full px-4 lg:px-10"
        title={t("home.latest-news.title")}
        readMoreText={t("home.latest-news.read-more-text")}
      /> */}

      {homePageDetails.data.attributes.showCta1Section ? (
        <Banner_1
          text={homePageDetails.data.attributes.cta1__title}
          btnText={homePageDetails.data.attributes.cta1__btnText}
          bgColor={homePageDetails.data.attributes.cta1__bgColor}
          className="mt-28 px-4 lg:px-10"
          tel={"+989112223344"}
        />
      ) : null}

      <ScrollToTop
        smooth
        top={600}
        width="1.1rem"
        height="1.1rem"
        className="grid xl:scale-110 2xl:scale-125 place-items-center shadow-md shadow-black/20 bg-slate-50"
      />
    </div>
  );
}

export default Home;

import { useTranslation } from "react-i18next";
// import AwardsAccordion from "../components/AwardsAccordion"
// import OurTeamSection from "../components/OurTeamSection";
// import WhyChooseUs from "../components/WhyChooseUs";
import Banner_1 from "../components/Banner_1";
import getBaseUrl from "../utils/base-url";
import useGetHomePageDetails from "../hooks/useGetHomePageDetails";

import { MapPin, PhoneIcon, MailIcon } from "lucide-react";
import { useGetAboutUs } from "../lib/react-query/index.ts";
import Map from "../components/shared/Map.tsx";
import DescStats from "../components/AboutUs/DescStats.tsx";
import Social from "../components/shared/Social.tsx";
import { IMAGE_BASE_URL } from "../constants/index.ts";

function AboutUs() {
  const [t, i18n] = useTranslation();

  const {
    data: aboutUsResponse,
    isLoading: aboutUsIsLoading,
    // error: aboutUsError,
  } = useGetAboutUs();

  const { homePageDetails, isHomePageDetailsLoading } = useGetHomePageDetails();
  if (isHomePageDetailsLoading || aboutUsIsLoading) {
    return (
      <div className="w-full h-[80vh] bg-gray-100 grid place-items-center">
        <p className="text-lg font-medium">Loading ....</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
        <p className="text-white text-6xl lg:text-7xl">{t("about-us.title")}</p>
        <p className="text-lg mt-3 text-white/60">{t("about-us.subtitle")}</p>
      </div>

      <div className="w-full lg:px-10 px-4 grid-cols-1 grid lg:grid-cols-[7fr_5fr] gap-x-8 gap-y-12 my-20 place-items-center">
        <div className=" max-lg:order-2">
          <p className="text-5xl lg:text-6xl font-[iranyekan400] text-slate-900 leading-[4.2rem]">
            {aboutUsResponse?.data?.attributes.name}
          </p>
          <p className="text-base text-slate-700 mt-5 font-[iranyekan300] leading-7">
            {aboutUsResponse?.data?.attributes.description}
          </p>

          <div className="space-y-2 mt-4">
            {aboutUsResponse?.data?.attributes.email_1 !== null && (
              <DescStats
                title={aboutUsResponse.data.attributes.email_1}
                icon={<MailIcon />}
              />
            )}

            {aboutUsResponse?.data?.attributes.email_2 !== null && (
              <DescStats
                title={aboutUsResponse.data.attributes.email_2}
                icon={<MailIcon />}
              />
            )}

            {aboutUsResponse?.data?.attributes.phone_1 !== null && (
              <a href={"tel:" + aboutUsResponse.data.attributes.phone_1}>
                <DescStats
                  title={aboutUsResponse.data.attributes.phone_1}
                  icon={<PhoneIcon />}
                />
              </a>
            )}

            {aboutUsResponse?.data?.attributes.phone_2 !== null && (
              <a href={"tel:" + aboutUsResponse.data.attributes.phone_2}>
                <DescStats
                  title={aboutUsResponse.data.attributes.phone_2}
                  icon={<PhoneIcon />}
                />
              </a>
            )}
            {aboutUsResponse?.data?.attributes.address !== null && (
              <DescStats
                title={aboutUsResponse.data.attributes.address}
                icon={<MapPin />}
              />
            )}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3.5 mt-4">
            {aboutUsResponse.data.attributes.socials.length > 0 &&
              aboutUsResponse.data.attributes.socials.map((social) => (
                <Social
                  key={`socials-about-${social.id}`}
                  title={social.title}
                  link={social.link}
                  icon={social.icon?.data?.attributes?.url}
                />
              ))}
          </div>
          {/* <div className="mt-9">
            <AwardsAccordion />
          </div> */}
        </div>

        <img
          loading="lazy"
          alt=""
          src={
            IMAGE_BASE_URL +
            aboutUsResponse.data.attributes.image.data.attributes.url
          }
          className="w-full h-auto object-cover max-h-[33rem] rounded-sm max-lg:max-h-[33rem] max-lg:w-auto max-lg:order-1"
        />
      </div>

      <div>
        <Map
          position={[
            aboutUsResponse?.data?.attributes.latitude,
            aboutUsResponse?.data?.attributes.longitude,
          ]}
        />
      </div>

      {/*<WhyChooseUs*/}
      {/*  title={homePageDetails.data.attributes.whyChooseUs__title}*/}
      {/*  text={homePageDetails.data.attributes.whyChooseUs__text}*/}
      {/*  items={homePageDetails.data.attributes.whyChooseUs__reasons}*/}
      {/*  className="w-full px-4 lg:px-10 mb-20"*/}
      {/*/>*/}

      {/*<OurTeamSection*/}
      {/*  className="mt-28 px-4 lg:px-10"*/}
      {/*  teamMembers={t("home.our-team.items")}*/}
      {/*  readMoreButtonText={*/}
      {/*    i18n.dir(i18n.language) === "ltr" ? "Read more" : "مشاهده بیشتر"*/}
      {/*  }*/}
      {/*  title={t("home.our-team.title")}*/}
      {/*  subtitle={t("home.our-team.subtitle")}*/}
      {/*/>*/}

      <Banner_1
        text={homePageDetails.data.attributes.cta1__title}
        btnText={homePageDetails.data.attributes.cta1__btnText}
        bgColor={homePageDetails.data.attributes.cta1__bgColor}
        className=" px-4 lg:px-10"
        tel={"+989112223344"}
      />
    </div>
  );
}

export default AboutUs;

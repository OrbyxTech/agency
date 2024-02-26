import { useTranslation } from "react-i18next";
// import AwardsAccordion from "../components/AwardsAccordion"
// import OurTeamSection from "../components/OurTeamSection";
// import WhyChooseUs from "../components/WhyChooseUs";
import Banner_1 from "../components/Banner_1";
import getBaseUrl from "../utils/base-url";
import useGetHomePageDetails from "../hooks/useGetHomePageDetails";

import { MapPin, PhoneIcon } from "lucide-react";
import Map from "../components/shared/Map.tsx";
import { useGetAboutUs } from "../lib/swr";
import { EmailIcon } from "@chakra-ui/icons";

function AboutUs() {
  const [t, i18n] = useTranslation();

  const {
    data: aboutUsResponse,
    isLoading: aboutUsIsLoading,
    error: aboutUsError,
  } = useGetAboutUs();

  const {
    name,
    description,
    address,
    phone_1,
    phone_2,
    email_1,
    email_2,
    latitude,
    longitude,
  } = aboutUsResponse?.data?.attributes;

  const {
    homePageDetails,
    isHomePageDetailsLoading,
    isHomePageDetailsValidating,
  } = useGetHomePageDetails();
  if (
    isHomePageDetailsLoading ||
    isHomePageDetailsValidating ||
    aboutUsIsLoading
  ) {
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
            {name}
          </p>
          <p className="text-base text-slate-700 mt-5 font-[iranyekan300] leading-7">
            {description}
          </p>
          {email_1 !== name && (
            <p className="flex items-center gap-2 text-base text-slate-700 mt-5 font-[iranyekan300] leading-7">
              <EmailIcon /> <span>{email_1}</span>
            </p>
          )}

          {email_2 !== null && (
            <p className="flex items-center gap-2 text-base text-slate-700 mt-5 font-[iranyekan300] leading-7">
              <EmailIcon /> <span>{email_2}</span>
            </p>
          )}

          {phone_1 !== null && (
            <p className="flex items-center gap-2 text-base text-slate-700 mt-5 font-[iranyekan300] leading-7">
              <PhoneIcon /> <span>{phone_1}</span>
            </p>
          )}

          {phone_2 !== null && (
            <p className="flex items-center gap-2 text-base text-slate-700 mt-5 font-[iranyekan300] leading-7">
              <PhoneIcon /> <span>{phone_2}</span>
            </p>
          )}
          {address !== null && (
            <p className="flex items-center gap-2 text-base text-slate-700 mt-5 font-[iranyekan300] leading-7">
              <MapPin /> <span>{address}</span>
            </p>
          )}

          {/* <div className="mt-9">
            <AwardsAccordion />
          </div> */}
        </div>

        <img
          loading="lazy"
          alt=""
          src={getBaseUrl() + "/assets/images/img-4.jpg"}
          className="w-full h-auto object-cover max-h-[33rem] rounded-sm max-lg:max-h-[33rem] max-lg:w-auto max-lg:order-1"
        />
      </div>

      <div>
        <Map position={[latitude, longitude]} />
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

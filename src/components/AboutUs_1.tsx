
import { useTranslation } from "react-i18next"
// import AwardsAccordion from "./AwardsAccordion"
import getBaseUrl from "../utils/base-url"

function AboutUs_1() {

    const [t] = useTranslation()

    return (
        <section className="w-full px-4 lg:px-10 grid grid-cols-1 gap-6 gap-y-12 lg:grid-cols-[45%_55%] place-items-center max-lg:mt-16 lg:-translate-y-6">

            <img
                alt=""
                src={getBaseUrl()+"/assets/images/about-us-bg.jpg"}
                className="w-full h-auto max-h-[42rem] block mx-auto object-center object-cover rounded-sm"
            />

            <div className="flex flex-col gap-y-6 w-full">

                <p className="text-5xl font-normal text-slate-800 tracking-wide">{t("home.about-us.title")}</p>
                <p className="text-base text-slate-700/80 tracking-wide font-medium max-w-prose">
                    {t("home.about-us.subtitle")}
                </p>
                {/* <p className="text-2xl font-normal text-slate-800 tracking-wide">{t("home.awards.title")}</p> */}

                {/* <AwardsAccordion /> */}


            </div>

        </section>
    )
}

export default AboutUs_1
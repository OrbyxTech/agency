import { useTranslation } from "react-i18next";
// import AwardsAccordion from "./AwardsAccordion"
import getBaseUrl from "../utils/base-url";
import { StepIndicatorProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  text: string;
  image: string;
  isInView?: boolean;
}

function AboutUs_1({ image, text, title, isInView = true }: Props) {
  const [t] = useTranslation();

  return (
    <section className="w-full px-4 lg:px-10 grid grid-cols-1 gap-6 gap-y-12 lg:grid-cols-[45%_55%] place-items-center max-lg:mt-16 lg:-translate-y-6">
      {isInView && (
        <motion.img
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          alt=""
          src={image}
          className="w-full h-auto max-h-[42rem] block mx-auto object-center object-cover rounded-sm"
        />
      )}

      {isInView && (
        <motion.div
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-y-6 w-full"
        >
          <p className="text-5xl font-normal text-slate-800 tracking-wide">
            {title}
          </p>
          <p className="text-base text-slate-700/80 tracking-wide font-medium max-w-prose">
            {text}
          </p>
          {/* <p className="text-2xl font-normal text-slate-800 tracking-wide">{t("home.awards.title")}</p> */}

          {/* <AwardsAccordion /> */}
        </motion.div>
      )}
    </section>
  );
}

export default AboutUs_1;

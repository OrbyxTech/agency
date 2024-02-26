import getBaseUrl from "../utils/base-url";
import ServiecCard_1 from "./ServiecCard_1";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

interface props {
  className?: string;
  showReadMoreButton?: boolean;
  title: string;
  text: string;
  items: Array<{
    id: string | number;
    title: string;
    text: string;
  }>;
  isInView?: boolean;
}

function Services_1({
  className = "",
  showReadMoreButton = true,
  items,
  text,
  title,
  isInView = true,
}: props) {
  const [t] = useTranslation();

  return (
    <div className={"w-full px-4 lg:px-10" + " " + className}>
      <p className="text-4xl lg:text-5xl text-slate-900 font-medium tracking-wide">
        {title}
      </p>
      <p className="text-base font-normal tracking-wide leading-6 text-slate-700/90 mt-3">
        {text}
      </p>

      {isInView && (
        <motion.div
          initial={{ opacity: 0, y: "-50vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 w-full grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items?.map((item) => (
            <ServiecCard_1
              key={item.id}
              img={getBaseUrl() + "/assets/images/service-img-1.png"}
              title={item.title}
              description={item.text}
              readMoreText={""}
              showReadMore={false}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Services_1;

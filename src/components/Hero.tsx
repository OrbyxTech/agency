
import { useTranslation } from "react-i18next"
import getBaseUrl from "../utils/base-url"


interface Props {
    title: string;
    text: string;
    image: string;
}

function Hero({ image, text, title }: Props) {
    const [t] = useTranslation()

    return (
        <div className="w-full grid grid-cols-1 grid-rows-1">
            <img
                loading="lazy"
                alt=""
                src={image}
                className="w-full h-[45rem] object-center object-cover row-start-1 col-start-1"
            />

            <div className="row-start-1 col-start-1 bg-black/40 flex flex-col items-center justify-center p-4">
                <h1 className="text-white text-3xl lg:text-4xl font-medium">{title}</h1>
                <p className="text-4xl lg:text-6xl text-center text-white font-semibold mt-6">{text}</p>
                {/* <p className="text-white tracking-wide text-lg lg:text-xl font-normal mt-10 max-w-prose">
                {t("home.hero.description")}
            </p> */}
                {/* <button
                className="text-white text-lg lg:text-xl font-normal tracking-wide rounded-sm bg-gray-950 py-4 px-8 mt-7
                active:scale-95 transition-transform duration-300 inline-block"
            >
                {t("home.hero.cta-text")}
            </button> */}
            </div>
        </div>
    )
}

export default Hero
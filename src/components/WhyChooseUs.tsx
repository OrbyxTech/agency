
import { useTranslation } from "react-i18next"
import ReadMoreButton_1 from "./ReadMoreButton_1"

interface Props {
    className: string;
    title: string;
    text: string;
    items: string[]
}

function WhyChooseUs({ className, items, text, title }: Props) {
    const [t] = useTranslation()

    return (
        <div className={"w-full " + className}>
            <p className="text-3xl lg:text-4xl text-slate-800 font-normal tracking-wide">{title}</p>
            <p
                className="mt-3 text-slate-600 font-normal leading-6 text-base"
            >
                {text}
            </p>
            <div
                className="w-full grid grid-cols-1 sm:grid-cols-2 max-lg:gap-y-12 lg:grid-cols-3 gap-7 mt-12"
            >
                {
                    items.map((item, index) => (
                        <div key={item + index} className="flex flex-col gap-y-3">
                            <p className="text-2xl text-slate-900/90 border-b border-b-slate-200 pb-0.5 w-max font-medium tracking-wide">{item}</p>
                            {/* <p className="text-slate-600 font-normal text-base mt-2">
                            {item.desc}
                        </p> */}
                            {/* <ReadMoreButton_1 text={item} className="mt-4" /> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhyChooseUs
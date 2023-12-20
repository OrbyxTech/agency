import { Link } from "react-router-dom"

interface Props {
    text: string,
    className?: string,
    link?: string
}

function ReadMoreButton_1({ text, className="", link }: Props) {
  return (
    <Link
        to={link}
        className={`border-none w-max focus:outline-foreground bg-transparent text-slate-800 text-lg
        font-medium hover:text-slate-700/90 transition-colors duration-200 ` + className }
    >
        { text }
    </Link>
  )
}

export default ReadMoreButton_1
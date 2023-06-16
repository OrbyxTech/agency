import { useEffect, useState } from "react";
import ArticleCard_1 from "./ArticleCard_1"
import { latestNews } from "../utils/http";
import { latestNewsOutPut } from "../utils/http/latestNews";

interface Props {
    className: string,
    readMoreText: string,
    title: string
}

function LatestNewsSection({ className, readMoreText, title }: Props) {
    const [news, setNews] = useState(Array<latestNewsOutPut>)

    useEffect(
      () => {
        setTimeout(() => {
          latestNews()
          .then(data => setNews(data))
        }, 1000);
      },
      []
    )
    return (
        <div className={"w-full " + className}>
            <p className="text-3xl text-slate-800 font-normal tracking-wide text-center">{title}</p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 mt-14 place-items-center">
            {
                news.map(item => (
                <ArticleCard_1
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    pubDate={item.pubDate}
                    commentsCount={item.commentsCount}
                    link={item.link}
                    readMoreText={readMoreText}
                />
                ))
            }
            </div>
        </div>
    )
}

export default LatestNewsSection
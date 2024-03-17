import { Link } from "react-router-dom";

import { IMAGE_BASE_URL } from "../../constants";
import { ArticleDataEntity } from "../../lib/axios/types";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useTranslation } from "react-i18next";

interface Props {
  article: ArticleDataEntity;
}

const BlogGridItem = ({ article }: Props) => {
  const [t] = useTranslation();

  return (
    <div className="w-full max-w-sm border border-gray-200 rounded-xl p-2 group">
      <Link to={`/blog/${article.id}`}>
        <img
          alt=""
          src={
            IMAGE_BASE_URL + article.attributes.thumbnail.data.attributes.url
          }
          className="w-full h-[200px] sm:h-[360px] object-cover max-w-sm rounded-xl block mx-auto scale-90 group-hover:scale-100 transition-transform duration-300"
        />
      </Link>
      <div className="mt-4 px-2 flex flex-col gap-y-1">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-lg text-slate-800 font-medium">
              {article.attributes.name}
            </p>

            <p className="line-clamp-3 text-sm tracking-wide text-slate-700/90 font-normal">
              {article.attributes.description}
            </p>
          </div>

          <div className="flex items-center gap-2 justify-end">
            <AiOutlineLike className="w-6 h-6 text-black/60" />
            {article.attributes.likesCount ? article.attributes.likesCount : 0}
            <AiOutlineDislike className="w-6 h-6 text-black/60" />
            {article.attributes.dislikesCount
              ? article.attributes.dislikesCount
              : 0}
          </div>
        </div>

        <Link to={`/blog/${article.id}`}>
          <button className="w-[50%] group-hover:w-full bg-black/95 transition-all duration-500 active:scale-95 text-xs sm:text-base font-[iranyekan300] text-white py-3 px-4 rounded mt-7">
            {t("BlogPage.BlogGridItemComponent.read-more")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogGridItem;

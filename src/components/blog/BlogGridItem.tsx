import { Link } from "react-router-dom";

import { IMAGE_BASE_URL } from "../../constants";
import { ArticleDataEntity } from "../../lib/axios/types";

interface Props {
  article: ArticleDataEntity;
}

const BlogGridItem = ({ article }: Props) => {
  return (
    <div className="w-full max-w-sm ">
      <img
        alt=""
        src={IMAGE_BASE_URL + article.attributes.thumbnail.data.attributes.url}
        className="w-full h-[400px] object-cover max-w-sm rounded-xl block mx-auto shadow-md shadow-black/10"
      />
      <div className="mt-4 px-2 flex flex-col gap-y-1">
        <Link to={`/blog/${article.id}`}>
          <p className="text-lg text-slate-800 font-medium">
            {article.attributes.name}
          </p>
        </Link>
        <p className="line-clamp-3 text-sm tracking-wide text-slate-700/90 font-normal">
          {article.attributes.description}
        </p>
      </div>
    </div>
  );
};

export default BlogGridItem;

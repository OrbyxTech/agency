import { Link } from "react-router-dom";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import parse from "html-react-parser";

import { IMAGE_BASE_URL } from "../../constants";
import { GetProjectsDatum } from "../../lib/axios/types";
import { useAuth } from "../../context/AuthContext";
import {
  useGetUserLikeForProject,
  useLikeOrDislikeProject,
} from "../../lib/react-query";

interface Props {
  project: GetProjectsDatum;
}

const ProjectsGridItem = ({ project }: Props) => {
  const { user } = useAuth();

  const { mutate: likeOrDislikeMutate, isLoading: likeOrDislikeLoading } =
    useLikeOrDislikeProject(project?.id);

  const likeOrDislikeHandler = ({
    id,
    val,
  }: {
    id: string | number;
    val: boolean;
  }) => {
    if (user === null) {
      return alert("Please Login");
    }
    likeOrDislikeMutate({ id, val });
  };

  // Queries
  const { data: userLikeForArticle } = useGetUserLikeForProject({
    userId: user?.id,
    projectId: project?.id,
  });

  return (
    <div className="w-full max-w-sm border border-gray-200 rounded-xl p-2 group">
      <img
        alt=""
        src={IMAGE_BASE_URL + project.attributes.thumbnail.data.attributes.url}
        className="w-full h-[200px] sm:h-[360px] object-cover max-w-sm rounded-xl block mx-auto scale-95 hover:scale-100 transition-transform duration-300"
      />
      <div className="mt-4 px-2 flex flex-col gap-y-1">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-lg text-slate-800 font-medium">
              {project.attributes.title}
            </p>

            <p className="line-clamp-3 text-sm tracking-wide text-slate-700/90 font-normal">
              {parse(project.attributes.description)}
            </p>
          </div>

          {/* Like */}
          <div className="flex items-center gap-3 justify-end">
            <button
              className="flex items-center gap-1 cursor-pointer disabled:cursor-default"
              disabled={likeOrDislikeLoading}
              onClick={() =>
                likeOrDislikeHandler({ id: project?.id, val: true })
              }
            >
              <AiOutlineLike
                className={`w-6 h-6 ${
                  user?.id ===
                    userLikeForArticle?.data[0]?.attributes?.author?.data?.id &&
                  userLikeForArticle?.data[0]?.attributes?.like === true
                    ? "text-red-500"
                    : "text-black/60"
                }`}
              />
              {project.attributes.likesCount}
            </button>
            <button
              className="flex items-center gap-1 cursor-pointer disabled:cursor-default"
              disabled={likeOrDislikeLoading}
              onClick={() =>
                likeOrDislikeHandler({ id: project?.id, val: false })
              }
            >
              <AiOutlineDislike
                className={`w-6 h-6 ${
                  user?.id ===
                    userLikeForArticle?.data[0]?.attributes?.author?.data?.id &&
                  userLikeForArticle?.data[0]?.attributes?.like === false
                    ? "text-red-500"
                    : "text-black/60"
                }`}
              />
              <span>{project.attributes.dislikesCount}</span>
            </button>
          </div>
        </div>

        {/* <Link to={`/blog/${project.id}`}>
          <button className="w-[50%] group-hover:w-full bg-black/95 transition-all duration-500 active:scale-95 text-xs sm:text-base font-[iranyekan300] text-white py-3 px-4 rounded mt-7">
            Read More
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default ProjectsGridItem;

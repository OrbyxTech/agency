import { ArticleCommentsData } from "../../lib/axios/types";
import { timeAgo } from "../../lib/utils";
import parse from "html-react-parser";

interface Props {
  comment: ArticleCommentsData;
}

const Comment = ({ comment }: Props) => {
  return (
    <div className="p-4 border rounded-xl">
      {/* Content */}
      <p className="">{parse(comment.attributes.content)}</p>

      <p className="mt-2 text-black/60">
        <span>{comment.attributes.author.data.attributes.username}</span>
        &nbsp;-&nbsp;
        <span className="text-xs sm:text-sm">
          {timeAgo(comment.attributes.createdAt)}
        </span>
      </p>

      {/* TODO:Add a feature to reply if user is admin */}
    </div>
  );
};

export default Comment;

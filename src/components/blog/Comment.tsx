import { DeleteIcon } from "@chakra-ui/icons";
import { ArticleCommentsData } from "../../lib/axios/types";
import { timeAgo } from "../../lib/utils";
import parse from "html-react-parser";
import { useAuth } from "../../context/AuthContext";
import { useDeleteComment } from "../../lib/react-query";

interface Props {
  comment: ArticleCommentsData;
  articleId?: string | number;
}

const Comment = ({ comment, articleId }: Props) => {
  const { user } = useAuth();

  const { mutate: deleteComment, isLoading } = useDeleteComment(articleId);

  const onDelete = () => {
    deleteComment(comment.id);
  };

  return (
    <div className="p-4 border rounded-xl">
      {/* Content */}
      <div className="flex justify-between gap-3">
        <p>{parse(comment.attributes.content)}</p>
        {user.id === comment.attributes.author.data.id && (
          <button disabled={isLoading} onClick={onDelete}>
            <DeleteIcon />
          </button>
        )}
      </div>

      <p className="mt-2 text-black/60">
        <span>{comment.attributes.author.data.attributes.username}</span>
        &nbsp;-&nbsp;
        <span className="text-xs sm:text-sm">
          {timeAgo(comment.attributes.createdAt)}
        </span>
      </p>

      {comment.attributes.reply.length > 0 && (
        <p>Admin Answer: {comment.attributes.reply}</p>
      )}
    </div>
  );
};

export default Comment;

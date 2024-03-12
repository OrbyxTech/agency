import { useParams } from "react-router-dom";
import {
  useCreateComment,
  useGetArticleComments,
  useGetSingleArticle,
  useGetUserLikeForArticle,
  useLikeOrDislikeArticle,
} from "../lib/react-query";
import { IMAGE_BASE_URL } from "../constants";

import parse from "html-react-parser";
import { stringToArray, timeAgo } from "../lib/utils";
import { Badge, Button, Textarea } from "@chakra-ui/react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useState } from "react";
import Comment from "../components/blog/Comment";
import { useAuth } from "../context/AuthContext";

const BlogDetail = () => {
  const { id } = useParams();

  const { user } = useAuth();

  const { mutate: likeOrDislikeMutate, isLoading: likeOrDislikeLoading } =
    useLikeOrDislikeArticle(id);

  const { mutate, isLoading: isCreateCommentIsLoading } = useCreateComment(id);
  const { data, isLoading } = useGetSingleArticle(id);
  const { data: commentsData, isLoading: commentsIsLoading } =
    useGetArticleComments(id);
  const { data: userLikeForArticle, isLoading: userLikeForArticleLoading } =
    useGetUserLikeForArticle({ userId: user?.id, articleId: id });

  const [comment, setComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (comment.trim().length === 0) {
      return alert("Please enter a comment");
    }

    if (user === null) {
      return alert("Please Login");
    }

    mutate({ articleId: id, content: comment });

    setComment("");
  };

  if (isLoading || commentsIsLoading || userLikeForArticleLoading) {
    return (
      <div className="w-full h-[80vh] bg-gray-100 grid place-items-center">
        <p className="text-lg font-medium">Loading ....</p>
      </div>
    );
  }

  commentsData.data.sort(
    (a, b) =>
      new Date(b.attributes.createdAt).getTime() -
      new Date(a.attributes.createdAt).getTime()
  );

  const keywordsArray = stringToArray(data.data.attributes.keywords, ",");

  return (
    <div className="my-20 p-4 w-full max-w-3xl mx-auto">
      {/* Cover Image */}
      <div>
        <img
          src={IMAGE_BASE_URL + data.data.attributes.cover.data.attributes.url}
          alt="IMAGE"
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

      <div className="mt-10 flex justify-between items-start">
        {/* Author */}
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
          <p className="mt-2 text-black/60">
            <span>{data.data.attributes.author.data.attributes.username}</span>
            &nbsp;-&nbsp;
            <span className="text-xs sm:text-sm">
              {timeAgo(data.data.attributes.createdAt)}
            </span>
          </p>
        </div>
        {/* Like */}
        <div className="flex items-center gap-3 justify-end">
          <button
            className="flex items-center gap-1 cursor-pointer disabled:cursor-default"
            disabled={user === null || likeOrDislikeLoading}
            onClick={() => likeOrDislikeMutate({ id, val: true })}
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
            {data.data.attributes.likesCount}
          </button>
          <button
            className="flex items-center gap-1 cursor-pointer disabled:cursor-default"
            disabled={user === null || likeOrDislikeLoading}
            onClick={() => likeOrDislikeMutate({ id, val: false })}
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
            <span>{data.data.attributes.dislikesCount}</span>
          </button>
        </div>
      </div>

      {/* Title & Description */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold underline">
          {data.data.attributes.name}
        </h2>
        <p>{data.data.attributes.description}</p>
      </div>

      {/* Content */}
      <div className="mt-4 prose">{parse(data.data.attributes.content)}</div>

      {/* Keywords */}
      <div className="mt-4 flex items-center gap-2">
        {keywordsArray.map((key) => (
          <Badge paddingY={1} paddingX={2} key={`keyword-${key}`}>
            {key}
          </Badge>
        ))}
      </div>

      {/* Comments */}
      <div className="mt-8">
        <h3 className="text-3xl font-bold">Comments</h3>

        {/* Input */}
        <form onSubmit={onSubmit} className="mt-4 space-y-2">
          <Textarea
            placeholder="Share your comment with us"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            disabled={isCreateCommentIsLoading}
            type="submit"
            ml={"auto"}
            colorScheme="gray"
          >
            Submit
          </Button>
        </form>

        {/* Comments */}
        <div className="mt-8 space-y-2">
          {!commentsIsLoading
            ? commentsData.data.map((comment) => (
                <Comment
                  key={`comment-${comment.id}`}
                  comment={comment}
                  articleId={id}
                />
              ))
            : "Loading"}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

import { useParams } from "react-router-dom";
import { useGetSingleArticle } from "../lib/react-query";
import { IMAGE_BASE_URL } from "../constants";

import parse from "html-react-parser";
import { stringToArray } from "../lib/utils";
import { Badge, Button, Textarea } from "@chakra-ui/react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useState } from "react";

const BlogDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleArticle(id);

  const [comment, setComment] = useState("");

  const keywordsArray = stringToArray(data.data.attributes.keywords, ",");

  const onSubmit = (e) => {
    e.preventDefault();

    setComment("");
  };

  if (isLoading) {
    return (
      <div className="w-full h-[80vh] bg-gray-100 grid place-items-center">
        <p className="text-lg font-medium">Loading ....</p>
      </div>
    );
  }

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
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <div>{data.data.attributes.author.data.attributes.username}</div>
        </div>
        {/* Like */}
        <div className="flex items-center gap-2 justify-end">
          <AiOutlineLike className="w-6 h-6 cursor-pointer" />
          <AiOutlineDislike className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Title & Description */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">{data.data.attributes.name}</h2>
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
          <Button type="submit" ml={"auto"} colorScheme="gray">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetail;

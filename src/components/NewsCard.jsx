import PropTypes from "prop-types";
import React from "react";
import CardWrapper from "./CardWrapper";

const NewsCard = ({ variant, data }) =>
  data ? (
    <CardWrapper variant={variant} testId="news_card">
      <div className="flex h-full flex-col space-y-2 relative">
        <img
          className={`${
            variant === "normal" ? "h-60" : "h-full"
          } object-cover dark:filter dark:brightness-90`}
          src={data.urlToImage}
          alt={data.title}
        />
        <div
          className={`${
            variant === "normal" ? "h-3/4" : "h-1/2"
          } w-full absolute bottom-0 bg-gradient-to-b from-transparent to-white dark:to-gray-700`}
        />
        <div className="absolute bottom-0 px-2 pb-2 dark:text-white dark:font-bold">
          <span className="text-xs">{data.source.name}</span>
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
            href={data.url}
          >
            <h2 className="leading-tight">{data.title}</h2>
          </a>
          <span className="text-xs capitalize">By {data.author}</span>
        </div>
      </div>
    </CardWrapper>
  ) : (
    <CardWrapper variant={variant} testId="skeleton_card">
      <div className="animate-pulse flex flex-col space-y-2">
        <div className=" bg-gray-300 w-full h-48" />
        <div className="flex-1 space-y-2 p-1">
          <div className="h-4 bg-gray-400 rounded w-3/4" />
          <div className="space-y-2">
            <div className="h-2 bg-gray-400 rounded w-5/6" />
            <div className="h-2 bg-gray-400 rounded" />
          </div>
        </div>
      </div>
    </CardWrapper>
  );

export default NewsCard;

NewsCard.defaultProps = {
  variant: "normal",
  data: null,
};
NewsCard.propTypes = {
  variant: PropTypes.string,
  data: PropTypes.exact({
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    source: PropTypes.exact({
      id: PropTypes.any,
      name: PropTypes.string,
    }),
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string,
  }),
};

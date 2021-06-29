import PropTypes from "prop-types";
import React from "react";

const Card = ({ variant, data }) => {
  let CardClasses =
    "w-full mx-auto rounded-md shadow dark:bg-gray-600 bg-gray-300 col-span-full overflow-hidden" +
    " ";
  switch (variant) {
    case "large":
      CardClasses = CardClasses.concat("sm:col-span-2 sm:row-span-2");
      break;
    case "wide":
      CardClasses = CardClasses.concat("sm:col-span-3");
      break;
    case "tall":
      CardClasses = CardClasses.concat("sm:col-span-1 row-span-2");
      break;
    case "normal":
      CardClasses = CardClasses.concat("sm:col-span-1");
      break;
    default:
      throw new Error("Card variant not found");
  }
  return data ? (
    <div className={`${CardClasses}`} data-testid="news_card">
      <div className="flex flex-col space-y-2 relative">
        <img
          className="h-60 object-cover dark:filter dark:brightness-90"
          src={data.urlToImage}
          alt={data.title}
        />
        <div className="w-full absolute bottom-0 h-3/4 bg-gradient-to-b from-transparent to-white dark:to-gray-700" />
        <div className="absolute bottom-0 px-2 dark:text-white dark:font-bold">
          <p>{data.source.name}</p>
          <p>{data.title}</p>
          <p>{data.author}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className={`${CardClasses}`} data-testid="skeleton_card">
      <div className="animate-pulse flex flex-col space-y-2">
        <div className=" bg-gray-400 w-full h-24" />
        <div className="flex-1 space-y-2 p-1">
          <div className="h-4 bg-gray-400 rounded w-3/4" />
          <div className="space-y-2">
            <div className="h-2 bg-gray-400 rounded w-5/6" />
            <div className="h-2 bg-gray-400 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  variant: "normal",
  data: null,
};
Card.propTypes = {
  variant: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any,
};

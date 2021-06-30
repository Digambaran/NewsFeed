import PropTypes from "prop-types";
import React from "react";

const CardWrapper = ({ children, variant, testId }) => {
  let CardClasses =
    "w-full mx-auto rounded-md shadow dark:bg-gray-600 bg-gray-300 col-span-full overflow-hidden" +
    " ";
  switch (variant) {
    case "large":
      CardClasses = CardClasses.concat("sm:col-span-2 sm:row-span-2");
      break;
    case "wide":
      CardClasses = CardClasses.concat("sm:col-span-2");
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

  return (
    <div className={`${CardClasses}`} data-testid={testId}>
      {children}
    </div>
  );
};

CardWrapper.defaultProps = {
  variant: "normal",
};
CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  testId: PropTypes.string.isRequired,
};

export default CardWrapper;

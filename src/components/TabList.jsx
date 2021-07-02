import PropTypes from "prop-types";
import React from "react";

const TabList = ({ handleTabClick, items, listName }) => (
  <div className="flex space-x-2">
    {items.map((value) => (
      <label
        key={value}
        className="relative leading-loose hover:bg-white cursor-pointer px-2"
        htmlFor={value}
      >
        <input
          className="appearance-none absolute border-blue-700 w-full -mx-2 cursor-pointer checked:border-b-2 h-8 "
          id={value}
          type="radio"
          name={listName}
          value={value}
          onClick={handleTabClick}
        />
        {value}
      </label>
    ))}
  </div>
);

export default TabList;

TabList.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  items: PropTypes.instanceOf([PropTypes.string]).isRequired,
  listName: PropTypes.string.isRequired,
};

import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "./CardWrapper";

const WeatherCard = ({ data }) => {
  console.log(data);
  return (
    <CardWrapper variant="wide" testId="weather_card">
      {data.main ? (
        <div className="h-full">
          <h4>{data.main.temp}</h4>
          <span>feels like: {data.main.feels_like}</span>
          <span>{data.name}</span>
        </div>
      ) : (
        <div className="h-full">
          <p>loading weather</p>
        </div>
      )}
    </CardWrapper>
  );
};

export default React.memo(WeatherCard);
// WeatherCard.defaultProps = {
//   data: {
//     loading: true,
//   },
// };
WeatherCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

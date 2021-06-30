import React from "react";
import CardWrapper from "./CardWrapper";

const WeatherCard = () => (
  <CardWrapper variant="wide" testId="weather_card">
    <div className="h-full">
      <p>Here goes weather</p>
    </div>
  </CardWrapper>
);

export default WeatherCard;

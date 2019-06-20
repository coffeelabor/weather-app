import React from "react";

const WeatherAlerts = props => {
  const {
    alert: {
      properties: { headline, event, descriptions, effective, expires }
    }
  } = props;
  return (
    <div className="card">
      <div>{headline}</div>
      <div>{event}</div>
      <div>{descriptions}</div>
      <div>{effective}</div>
      <div>{expires}</div>
    </div>
  );
};

export default WeatherAlerts;

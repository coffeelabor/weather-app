import React, { Component } from "react";

import { connect } from "react-redux";
import { getAlerts } from "../actions";

import WeatherAlert from "./WeatherAlerts";

class WeatherViewContainer extends Component {
  componentDidMount() {
    console.log("WeatherView mount");
    this.props.getAlerts();
  }

  render() {
    return (
      <div className="weather-container">
        {this.props.alerts.map(alert => (
          <WeatherAlert alert={alert} key={alert.id} />
        ))}
        {/* <WeatherAlert /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alerts: state.alerts,
  fetching: state.fetching
});

export default connect(
  mapStateToProps,
  { getAlerts }
)(WeatherViewContainer);

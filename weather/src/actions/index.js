import axios from "axios";

export const FETCH_ALERT_START = "FETCH_ALERT_START";
export const FETCH_ALERT_SUCCESS = "FETCH_ALERT_SUCCESS";
export const FETCH_ALERT_ERROR = "FETCH_ALERT_ERROR";

export const getAlerts = () => dispatch => {
  dispatch({ type: FETCH_ALERT_START });
  axios
    .get("https://api.weather.gov/alerts")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_ALERT_SUCCESS, payload: res.data.features });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_ALERT_ERROR, payload: "bummer" });
    });
};

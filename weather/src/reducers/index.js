import {
  FETCH_ALERT_START,
  FETCH_ALERT_SUCCESS,
  FETCH_ALERT_ERROR
} from "../actions";

const initialState = {
  alerts: [],
  fetching: false,
  errors: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALERT_START:
      return {
        ...state,
        errors: "",
        fetching: true
      };
    case FETCH_ALERT_SUCCESS:
      return {
        ...state,
        fetching: false,
        errors: null,
        alerts: action.payload
      };
    case FETCH_ALERT_ERROR:
      return {
        ...state,
        fetching: false,
        errors: action.payload
      };
    default:
      return state;
  }
};

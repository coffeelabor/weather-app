// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

// import rootReducer from "./reducers";
// import { composeWithDevTools } from "redux-devtools-extention";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );

// export default store;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducer
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;

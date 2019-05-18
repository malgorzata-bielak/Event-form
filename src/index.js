import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

import configureStore from "./store/store";
import EventContainer from "./container/EventContainer";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <EventContainer />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

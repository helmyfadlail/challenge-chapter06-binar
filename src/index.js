import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
const store = createStore(reducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

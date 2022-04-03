import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import MainReducer from "./reducers/MainReducer";
import Table from "./containers/Table";
import CreateTodo from "./containers/CreateTodo";

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore)(MainReducer);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById("root")

  <Provider store={store}>
    <CreateTodo />
    <Table />
  </Provider>,
  document.getElementById("root")
);
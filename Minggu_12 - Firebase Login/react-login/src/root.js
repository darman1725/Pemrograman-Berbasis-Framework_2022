import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import configureStore from "./configureStore";
const store = configureStore();
function root() {
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    ); 
} 
export default root;

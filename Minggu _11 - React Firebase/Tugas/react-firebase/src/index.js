import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import "./style.css";
import routes from "./routes.js";
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebase.config.js';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is Logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header />

          <Switch>
            {routes.map(route => (
              <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
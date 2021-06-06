import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cookies from "js-cookie";
import "./App.css";

// Containers
import Home from "./containers/Home";
import Admin from "./containers/Admin";
import Login from "./containers/Login";

// Context
import { UserContext } from "./tools/UserContext";

function App() {
  const [token, setToken] = useState(Cookies.get("tokenUser") || null);

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookies.set("tokenUser", tokenToSet, { expires: 20 });
      setToken(tokenToSet);
    } else {
      Cookies.remove("tokenUser");
      setToken(null);
    }
  };

  return (
    <UserContext.Provider value={{ userToken: token, updateUser: setUser }}>
      <Router>
        <Switch>
          <Route path="/admin">
            {token ? (
              <Admin />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                }}
              />
            )}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

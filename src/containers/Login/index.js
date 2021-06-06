import React, { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import users from "../../data/userList.json";

// Context
import { UserContext } from "../../tools/UserContext";

import "./index.css";

const Login = () => {
  let history = useHistory();
  const { userToken, updateUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const apiResponse = users;
    let user = apiResponse.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        const token = user.token;
        updateUser(token);
        history.push("/");
      } else {
        setError("Wrong password");
      }
    } else {
      setError("User does not exist");
    }
  };
  return !userToken ? (
    <section className="login">
      <div className="login_container">
        <form className="login_form" onSubmit={handleSubmit}>
          <h2 className="login_title">Sign in</h2>
          <div>
            <p
              className={
                email ? "login_floating_label" : "login_floating_label_disabled"
              }
            >
              Your email
            </p>
            <input
              className="login_input_text"
              type="email"
              onChange={handleEmail}
              value={email}
              placeholder="Your email"
            />
          </div>

          <div>
            <p
              className={
                password
                  ? "login_floating_label"
                  : "login_floating_label_disabled"
              }
            >
              Your password
            </p>
            <input
              className="login_input_text"
              type="password"
              onChange={handlePassword}
              value={password}
              placeholder="Your password"
            />
          </div>
          <input className="login_submit_btn" type="submit" value="LOGIN" />
        </form>
      </div>
      <div>
        <p className="login_error_message">{error}</p>
      </div>
    </section>
  ) : (
    <Redirect
      to={{
        pathname: "/",
      }}
    />
  );
};

export default Login;

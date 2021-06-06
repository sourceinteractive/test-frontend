import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

// UserList Fake API
import users from "../../data/userList.json";

// Components
import Header from "../../components/Header";

// Context
import { UserContext } from "../../tools/UserContext";

import "./index.css";

const Home = () => {
  const { userToken } = useContext(UserContext);

  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // With REAL API we could use:
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // }
    // The backend route could give us all user's information

    const apiResponse = users;
    setCurrentUser(apiResponse.find((user) => user.token === userToken));
    setIsLoading(false);
  }, [userToken]);

  return userToken ? (
    isLoading ? (
      <div className="loading">
        <Loader
          type="Oval"
          color="#09aeb8"
          height={100}
          width={100}
          timeout={99999}
        />{" "}
      </div>
    ) : (
      <>
        <Header currentUser={currentUser} />
        <main className="home">
          <p>Utilisateur en cours :</p>
          <p>Email : {currentUser.email}</p>
          <p>Password : {currentUser.password}</p>
          <p>Firstname : {currentUser.firstName}</p>
          <p>Lastname : {currentUser.lastName}</p>
          <p>Token : {currentUser.token}</p>
        </main>
      </>
    )
  ) : (
    <Redirect
      to={{
        pathname: "/login",
      }}
    />
  );
};

export default Home;

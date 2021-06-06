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

const Admin = () => {
  const { userToken } = useContext(UserContext);

  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const apiResponse = users;
    setUserList(apiResponse);

    // With REAL API we could use:
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // }
    // The backend route could give us all user's information

    setCurrentUser(apiResponse.find((user) => user.token === userToken));
    setIsLoading(false);
  }, [userToken]);

  return isLoading ? (
    <div className="loading">
      <Loader
        type="Oval"
        color="#09aeb8"
        height={100}
        width={100}
        timeout={99999}
      />
    </div>
  ) : currentUser.role === "admin" ? (
    <>
      <Header currentUser={currentUser} />

      <section className="admin">
        {userList.map((user, index) => {
          let userNumber = index + 1;
          return (
            <div className="admin_user_container" key={index}>
              <p>Utilisateur {userNumber}</p>
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
          );
        })}
      </section>
    </>
  ) : (
    <Redirect
      to={{
        pathname: "/",
      }}
    />
  );
};

export default Admin;

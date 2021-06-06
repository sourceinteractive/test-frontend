import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { UserContext } from "../../tools/UserContext";

import "./index.css";

const Header = ({ currentUser }) => {
  const { updateUser } = useContext(UserContext);

  const logout = () => {
    updateUser(null);
  };

  return (
    <section>
      <nav>
        <Link to="/">Home</Link>
        {currentUser?.role === "admin" && <Link to="/admin">Admin</Link>}
        <button onClick={logout}>logout</button>
      </nav>
    </section>
  );
};

export default Header;

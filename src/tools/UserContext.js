import React from "react";

export const UserContext = React.createContext({
  userToken: null,
  updateUser: () => {},
});

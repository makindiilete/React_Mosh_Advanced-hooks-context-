import React, { useContext } from "react";
const UserContext = React.createContext();
//ds will be use to identify ds particular context in the app because we can have many of them
UserContext.displayName = "UserContext";
export default UserContext;

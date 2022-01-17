import React, { useContext } from "react";
import UserContext from "./userContext";

const Login = () => {
  const userContext = useContext(UserContext);
  return (
    <div>
      {/*  we call the onLoggedIn method and pass the name to use to update the context*/}
      <button onClick={() => userContext.onLoggedIn("Oluwamayowa")}>
        Login
      </button>
      <button onClick={() => userContext.onLoggedIn("")}>Logout</button>
    </div>
  );
};

export default Login;

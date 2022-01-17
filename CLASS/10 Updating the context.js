/*
To update our context, we are going to provide a function handler inside the root component where we have the state defined and then pass the function as prop to the Provider
*/
//App.jsx
import React from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/Login";

class App extends React.Component {
  state = { currentUser: { name: null } };

  //ds method is used to update the context from any component
  handleLoggedIn = (username) => {
    console.log("Getting the user : " + username);
    const user = { name: username };
    this.setState({ currentUser: user });
  };
  render() {
    //passing a new props
    return (
      <>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <MoviePage />
          <Login />
        </UserContext.Provider>
      </>
    );
  }
}

export default App;

//Login.jsx
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

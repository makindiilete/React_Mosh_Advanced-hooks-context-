import React from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/Login";
import CartContext from "./context/cartContext";

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
        <CartContext.Provider value={[]}>
          <UserContext.Provider
            value={{
              currentUser: this.state.currentUser,
              onLoggedIn: this.handleLoggedIn,
            }}
          >
            <MoviePage />
            <Login />
          </UserContext.Provider>
        </CartContext.Provider>
      </>
    );
  }
}

export default App;

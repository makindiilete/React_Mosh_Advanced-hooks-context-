/*
We will see how to use the context api in functional component which looks easier and smoother.
*/

//MovieRow.jsx
import React, { useContext } from "react";
import UserContext from "./userContext";

const MovieRow = () => {
  const currentUser = useContext(UserContext);
  console.log("User = ", currentUser);
  return <div>{currentUser.name}</div>;
};

export default MovieRow;

//MoviePage.jsx
import * as React from "react";
import MovieList from "./MovieList";
import MovieRow from "./MovieRow";

class MoviePage extends React.Component {
  render() {
    return (
      <div>
        <MovieList />
        <MovieRow />
      </div>
    );
  }
}

export default MoviePage;

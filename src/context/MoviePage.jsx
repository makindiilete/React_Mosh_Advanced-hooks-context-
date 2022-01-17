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

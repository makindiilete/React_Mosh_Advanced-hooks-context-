import * as React from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends React.Component {
  //here we set our context type
  static contextType = UserContext;

  //And now we can access our context via "this.context"
  componentDidMount() {
    console.log("Context = ", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List:{" "}
            {userContext.currentUser ? userContext.currentUser.name : ""}{" "}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;

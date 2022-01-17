/*
We will see how to implement the context api in class component.
1)  We start by creating a new dir "Context" >> Inside it we create 2 files "MoviePage.jsx" & "MovieList.jsx"
The MoviePage will be the parent to MovieList and all of them will be children of App.js.

In the App.js file, we want to define a state containing the User and we want to pass the user object to MovieList which is the child component to all of them
*/

//MovieList.jsx
import * as React from "react";

class MovieList extends React.Component {
  render() {
    return <div>Movie List</div>;
  }
}

export default MovieList;

//MoviePage.jsx
import * as React from "react";
import MovieList from "./MovieList";

class MoviePage extends React.Component {
  render() {
    return (
      <div>
        <MovieList />
      </div>
    );
  }
}

export default MoviePage;

//App.js
import React from "react";
import MoviePage from "./context/MoviePage";

class App extends React.Component {
  state = { user: { name: "Michaelz" } };
  render() {
    //passing a new props
    return (
      <>
        <MoviePage />
      </>
    );
  }
}

export default App;

/*
SETTING UP CONTEXT
1)  Create a context object : - Create a new file in the dir "userContext.js"

import React from "react";
const UserContext = React.createContext();
export default UserContext;

2)  Provide the context object to the root component by wrapping the components inside the root component by a provider component and passing the object we want to pass down as "value" attribute

import React from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class App extends React.Component {
  state = { currentUser: { name: "Michaelz" } };
  render() {
    //passing a new props
    return (
      <>
        <UserContext.Provider value={this.state.currentUser}>
          <MoviePage />
        </UserContext.Provider>
      </>
    );
  }
}

3.  We then need to consume the context down the tree to one of our component

import * as React from "react";
import UserContext from "./userContext";

class MovieList extends React.Component {
  render() {
    return (
      <UserContext.Consumer>{() => <div>Movie List</div>}</UserContext.Consumer>
    );
  }
}

export default MovieList;

export default App;

Currently if we inspect the app with react dev tool we can see we have : -
App.js
Context.Provider
MoviePage
MovieList
Context.Consumer

#   When building complex apps, we might have different contexts in the app so it is a good practise to identify each one with a unique display name and so we can refactor our context code to this : -

import React, { useContext } from "react";
const UserContext = React.createContext();
//ds will be use to identify ds particular context in the app because we can have many of them
UserContext.displayName = "UserContext";
export default UserContext;


And now the component tree looks like this : -

App.js
UserContext.Provider
MoviePage
MovieList
UserContext.Consumer


EXTRACTING VALUES FROM THE CONTEXT

import * as React from "react";
import UserContext from "./userContext";

class MovieList extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => <div>Movie List {userContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;

*/

//App.js
import React from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class App extends React.Component {
  state = { currentUser: { name: "Michaelz" } };
  render() {
    //passing a new props
    return (
      <>
        <UserContext.Provider value={this.state.currentUser}>
          <MoviePage />
        </UserContext.Provider>
      </>
    );
  }
}

export default App;

// userContext.js
import React, { useContext } from "react";
const UserContext = React.createContext();
//ds will be use to identify ds particular context in the app because we can have many of them
UserContext.displayName = "UserContext";
export default UserContext;

//MoviePage.jsx
import * as React from "react";
import MovieList from "./MovieList";

class MoviePage extends React.Component {
  render() {
    return (
      <div>
        <MovieList />
      </div>
    );
  }
}

export default MoviePage;

//MovieList.jsx
import * as React from "react";
import UserContext from "./userContext";

class MovieList extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => <div>Movie List {userContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;

/*
HOW TO CONSUME CONTEXT OUTSIDE THE RENDER METHOD E.G. INSIDE A LIFECYCLE HOOK

METHOD 1
import * as React from "react";
import UserContext from "./userContext";

class MovieList extends React.Component {

  //And now we can access our context via "this.context"
  componentDidMount() {
    console.log("Context = ", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => <div>Movie List {userContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}

//Here we set our context type so we can use it outside render()
MovieList.contextType = UserContext;
export default MovieList;


METHOD 2
import * as React from "react";
import UserContext from "./userContext";

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
        {(userContext) => <div>Movie List {userContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;

*/

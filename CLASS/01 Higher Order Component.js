/*
We use higher order component to reuse logic among components e.g If we want to render a loading icon while we await for data from the backend, we will reuse this logic across many components so instead of implementing the loader logic in multiple components, we can have the logic inside a wrapper component. Let see how to get this done

IMPLEMENTING HIGHER ORDER COMPONENT
1.  Create a New Directory "hoc", all our codes for higher order component will be placed inside this folder
2.  Add a new file in the Dir "Movie.jsx", we create this as a class component.
Now we need to add a tool tip functionality to this component but we will not implement it inside Movie.jsx, instead we
3.  Create a new file "withToolTip.jsx" >> Inside this function, we create a function that takes an existing component as an argument
*/

//Movie.jsx
import * as React from "react";

class Movie extends React.Component {
  render() {
    return <div>Movie</div>;
  }
}

export default Movie;

//withToolTips.jsx
//We create a function that takes a component as argument
import * as React from "react";

function withToolTip(Component) {
  //We return a new component that wraps around our original component
  return class WithToolTip extends React.Component {
    render() {
      return (
        <div>
          {/*Here we return our component argument passed to the function*/}
          <Component />
        </div>
      );
    }
  };
}

export default withToolTip;

//App.js
import React from "react";
import Movie from "./hoc/Movie";

const App = () => {
  return <Movie />;
};

export default App;

/*
Now to implement our higher order component, we go back to the Movie component and wrap the export statement with our higher order component i.e. withToolTip


import * as React from "react";
import withToolTip from "./withToolTips";

class Movie extends React.Component {
  render() {
    return <div>Movie</div>;
  }
}

export default withToolTip(Movie);

We can use react dev tool to confirm the component hierarchy and there we will see we have App.js >> WithToolTip >> Movie
Now we going to implement all our tool tip functionality inside the higher order component
*/

//withToolTips.jsx
//We create a function that takes a component as argument
import * as React from "react";

function withToolTip(Component) {
  //We return a new component that wraps around our original component
  return class WithToolTip extends React.Component {
    state = { showToolTip: false };

    //function called on mouseOver
    mouseOver = () => {
      this.setState({ showToolTip: true });
    };

    //function called on mouseout
    mouseOut = () => {
      this.setState({ showToolTip: false });
    };
    render() {
      return (
        //  Here we handle the mouse event of this component
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          {/*Here we return our component argument passed to the function and we pass the "showToolTip" state as props to the component*/}
          <Component showToolTip={this.state.showToolTip} />
        </div>
      );
    }
  };
}

export default withToolTip;

//Movie.jsx
import * as React from "react";
import withToolTip from "./withToolTips";

class Movie extends React.Component {
  render() {
    return (
      <>
        <div>Movie</div>
        {/*Here we check if the value of the showToolTip props is true, we return this div*/}
        {this.props.showToolTip && <div>Some Tool TIp</div>}
      </>
    );
  }
}

export default withToolTip(Movie);

/*
Now if we inspect with react dev tools, we see that we have the "showToolTip" as a state in the wrapper component and it is passed as props to the Movie component.
*/

/*
PROBLEM WITH CURRENT IMPLEMENTATION

If we pass another props to the movie component from another component outside the wrapper e.g. from App.js, the props will not get to the Movie component because we are only passing the showToolTip props to the movie component from the wrapper and the props from the wrapper takes higher precedence... To fix this, we simply pass {...this.props} as arg to the Movie component inside the wrapper
*/

//App.js
import React from "react";
import Movie from "./hoc/Movie";

const App = () => {
  //passing a new props
  return <Movie id={1} />;
};

export default App;

//Movie.jsx
import * as React from "react";
import withToolTip from "./withToolTips";

class Movie extends React.Component {
  render() {
    return (
      <>
        <div>Movie</div>
        {/*Here we check if the value of the showToolTip props is true, we return this div*/}
        {this.props.showToolTip && <div>Some Tool TIp</div>}
      </>
    );
  }
}

export default withToolTip(Movie);

//withToolTips.jsx
//We create a function that takes a component as argument
import * as React from "react";

function withToolTip(Component) {
  //We return a new component that wraps around our original component
  return class WithToolTip extends React.Component {
    state = { showToolTip: false };

    //function called on mouseOver
    mouseOver = () => {
      this.setState({ showToolTip: true });
    };

    //function called on mouseout
    mouseOut = () => {
      this.setState({ showToolTip: false });
    };
    render() {
      return (
        //  Here we handle the mouse event of this component
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          {/*Here we return our component argument passed to the function and we pass the "showToolTip" state as props to the component*/}
          <Component {...this.props} showToolTip={this.state.showToolTip} />
        </div>
      );
    }
  };
}

export default withToolTip;

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

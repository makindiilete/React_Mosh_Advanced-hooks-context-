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

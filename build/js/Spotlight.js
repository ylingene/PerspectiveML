import React from "react";

export default class Spotlight extends React.Component {
  render() {
    return (
      <div id="spotlight">
        <img src={this.props.spot_src}/>
      </div>
    );
  }
}

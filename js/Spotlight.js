import React from "react";

export default class Spotlight extends React.Component {
  render() {
    return (
      <div id="spotlight">
        <img title={this.props.focal} src={this.props.spot_src}/>
      </div>
    );
  }
}

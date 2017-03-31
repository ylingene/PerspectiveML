import React from "react";

import Header from "./Header";

export default class SecondReturn extends React.Component {
  render() {
    return (
      <div>
        <h1>Your input focal length is {this.props.match.params.focalParam}</h1>
      </div>
    );
  }
}

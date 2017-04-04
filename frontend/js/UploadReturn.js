import React from "react";

import Header from "./Header";

export default class UploadReturn extends React.Component {
  render() {
    return (
      <div>
        <h1>The predicted input focal length is {this.props.match.params.focalParam}</h1>
      </div>
    );
  }
}

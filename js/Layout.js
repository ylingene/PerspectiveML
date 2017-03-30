import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Spotlight from "./Spotlight";
import Stage from "./Stage";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      spot_src: "static/default.png",
      focal: 69,
    };
  }

  changeSpot(spot_src, focal) {
    console.log(focal);
    this.setState({spot_src, focal});
  }

  render() {
    return (
      <div>
        <Header />
        <h4>Upload your own image <Link to="second">here</Link></h4>
        <Spotlight focal={this.state.focal} spot_src={this.state.spot_src} />
        <h4 id="prompt">Choose a photo to see if you can guess the focal length</h4>
        <h6>Hover over the above photo to see the correct focal length</h6>
        <Stage changeSpot={this.changeSpot.bind(this)} />
      </div>
    );
  }
}

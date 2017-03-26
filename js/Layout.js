import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Spotlight from "./Spotlight";
import Stage from "./Stage";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      spot_src: "default.png"
    };
  }

  changeSpot(spot_src) {
    this.setState({spot_src});
  }

  render() {
    return (
      <div>
        <Header />
        <Link to="second">Go to second page</Link>
        <Spotlight spot_src={this.state.spot_src} />
        <Stage changeSpot={this.changeSpot.bind(this)} />
      </div>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <Link to="/"><header>
        <h1 id="title">Perspective Machine Learning</h1>
      </header></Link>
    );
  }
}

import React from "react";

import Row from "./Stage/Row";

export default class Stage extends React.Component {
  constructor() {
    super();
    this.state = {
      random: Math.ceil(Math.random() * 20)
    }
  }

  render() {
    var rowList = [];
    for (var i = this.state.random; i < this.state.random + 15; i += 5) {
      rowList.push(<Row key={i % 4} count={i} changeSpot={this.props.changeSpot} />);
    }

    return (
      <ul id="stage">
        { rowList }
      </ul>
    );
  }
}

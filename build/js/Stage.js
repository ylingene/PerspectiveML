import React from "react";

import Row from "./Stage/Row";

export default class Stage extends React.Component {
  render() {
    var rowList = [];
    for (var i = 1; i < 3 * 5 + 1; i += 5) {
      rowList.push(<Row key={i % 4} count={i} changeSpot={this.props.changeSpot} />);
    }

    return (
      <ul id="stage">
        { rowList }
      </ul>
    );
  }
}

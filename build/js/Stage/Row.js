import React from "react";

import Box from "./Row/Box";

export default class Row extends React.Component {

  render() {
    var imgList = [];
    for (var i = this.props.count; i < this.props.count + 5; i++) {
      imgList.push(<Box key={i} src={"imgs/" + i + ".jpg"} changeSpot={this.props.changeSpot} />);
    }

    return (
      <ul className="box_row">
        { imgList }
      </ul>
    );
  }
}

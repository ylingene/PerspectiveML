import React from "react";

export default class Box extends React.Component {
  handleChange(e) {
    const spot_src = e.target.src;
    this.props.changeSpot(spot_src);
  }

  render() {
    return (
      <div className="box">
        <img src={this.props.src} onClick={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

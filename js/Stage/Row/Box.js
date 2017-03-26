import React from "react";

export default class Box extends React.Component {
  handleChange(e) {
    const spot_src = e.target.src;
    const focal = e.target.alt;
    this.props.changeSpot(spot_src, focal);
  }

  render() {
    return (
      <div className="box">
        <img alt={this.props.focal} src={this.props.src} onClick={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

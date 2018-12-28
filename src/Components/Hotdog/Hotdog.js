import React, { Component } from "react";
import "./Hotdog.css";

class Hotdog extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }
  toggleHotdog = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div>
        <div
          className={
            expanded ? "hotdog-container-expanded" : "hotdog-container"
          }
          onClick={this.toggleHotdog}
        >
          <div />
          <div />
          <div />
        </div>
        <div className={expanded ? "hotdog-menu-expanded" : "hotdog-menu"}>
          <h1> hello </h1>
        </div>
      </div>
    );
  }
}

export default Hotdog;

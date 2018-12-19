import React, { Component } from "react";
import "./Hotdog.css";

class Hotdog extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }
  render() {
    return (
      <div className="hotdog-container">
        <div />
        <div />
        <div />
      </div>
    );
  }
}

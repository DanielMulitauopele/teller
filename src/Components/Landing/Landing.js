import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      news: []
    };
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    const { active } = this.state;
    return (
      <div className="landing-literal">
        <h1> Hello </h1>
      </div>
    );
  }
}

export default Landing;

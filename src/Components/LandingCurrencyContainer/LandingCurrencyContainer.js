import React, { Component } from "react";
import "./LandingCurrencyContainer.css";

class LandingCurrencyContainer extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  render() {
    return <div className="currency-container" />;
  }
}

export default LandingCurrencyContainer;

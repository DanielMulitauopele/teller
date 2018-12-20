import React, { Component } from "react";
import "./LandingCurrency.css";

class LandingCurrency extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  expand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    return (
      <div className="currency-card" onClick={this.expand}>
        <div className="cc-left">
          <p>BTC</p>
          <p>$2000.00</p>
        </div>
        <div className="cc-center">
          <p>$150.00</p>
          <p>.0382 coin</p>
        </div>
        <div clasName="cc-right">
          <p> +2.86% </p>
        </div>
        {this.state.expanded && (
          <div className="expanded-currency">
            <h4 className="nearby-achievements-header"> Achievements:</h4>
            <ul className="nearby-achievement-list" />
          </div>
        )}
      </div>
    );
  }
}

export default LandingCurrency;

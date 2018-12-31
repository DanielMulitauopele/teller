import React, { Component } from "react";
import "./LandingCurrency.css";
import Heart from "../../Assets/heart.svg";
import { Icons } from "../../Assets/cryptoIcons/cryptoIcons";

class LandingCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  expand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  printToConsole = () => {
    console.log("hey");
  };

  render() {
    const { symbol, name, price, percent_change, rank } = this.props.currency;
    const { expanded } = this.state;
    return (
      <div className="currency-card">
        <div className="card-inside-text">
          <div className="cc-left">
            <img src={Icons[this.props.currency.symbol]} />
          </div>
          <div className="cc-center">
            <p>{symbol}</p>
            <p>{name}</p>
          </div>
          <div className="cc-center-right">
            <p>$ {price}</p>
          </div>
          <div className="cc-right">
            <p>{percent_change}</p>
          </div>
          <div
            className={expanded ? "expansion-dots-glowing" : "expansion-dots"}
            onClick={this.expand}
          >
            <div />
            <div />
            <div />
          </div>
        </div>
        {this.state.expanded && (
          <div className="expanded-currency">
            <div className="ec-right">
              <p>{name}</p>
              <p>{rank}</p>
            </div>
            <img
              src={Heart}
              onClick={this.printToConsole}
              className="fave-this"
            />
          </div>
        )}
      </div>
    );
  }
}

export default LandingCurrency;

import React, { Component } from "react";
import "./Hotdog.css";

class Hotdog extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      activeMenu: "Home"
    };
  }
  toggleHotdog = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  changeActiveRoute = e => {
    this.setState({
      activeMenu: e.target.innerText
    });
    console.log(e.target);
    console.log(this.state);
  };

  render() {
    const { expanded } = this.state;
    const activeColor = { color: "#fc599f" };
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
          <div className="menu-card">
            <h1> teller.</h1>
            <ul>
              <li onClick={this.changeActiveRoute}>Home</li>
              <li onClick={this.changeActiveRoute}>Crypto News</li>
              <li onClick={this.changeActiveRoute}>Notes</li>
              <li onClick={this.changeActiveRoute}>About</li>
              <li onClick={this.changeActiveRoute}>Log Out</li>
            </ul>
            <div className="donate">
              <p>Enjoying this app?</p>
              <p className="wallet-ID">Q2E9RH128EYG9Y1HE88U2T</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hotdog;

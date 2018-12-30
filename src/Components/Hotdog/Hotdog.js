import React, { Component } from "react";
import "./Hotdog.css";
import Home from "../../Assets/home.svg";
import Blog from "../../Assets/newspaper.svg";
import Notes from "../../Assets/blogging.svg";
import Code from "../../Assets/code.svg";
import Exit from "../../Assets/exit.svg";

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
            <h1>
              {" "}
              t<span>eller</span>.
            </h1>
            <ul>
              <li className="home-li" onClick={this.changeActiveRoute}>
                <img src={Home} alt="home-icon" />
                <span>Home</span>
              </li>
              <li onClick={this.changeActiveRoute}>
                <img src={Blog} alt="blog-icon" />
                <span>Blog</span>
              </li>
              <li onClick={this.changeActiveRoute}>
                <img src={Notes} alt="notes-icon" />
                <span>Notes</span>
              </li>
              <li onClick={this.changeActiveRoute}>
                <img src={Code} alt="about-us-icon" />
                <span>About</span>
              </li>
              <li onClick={this.changeActiveRoute}>
                <img src={Exit} alt="exit-icon" />
                <span>Quit</span>
              </li>
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

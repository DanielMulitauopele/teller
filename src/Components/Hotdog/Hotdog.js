import React, { Component } from "react";
import "./Hotdog.css";
import Home from "../../Assets/home.svg";
import Blog from "../../Assets/newspaper.svg";
import Notes from "../../Assets/blogging.svg";
import Code from "../../Assets/code.svg";
import Exit from "../../Assets/exit.svg";
import Donate from "../../Assets/donate.svg";
import { NavLink } from "react-router-dom";

class Hotdog extends Component {
  constructor(props) {
    super(props);
    // const { removeLoginState, clearUser } = this.props
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
          <div className="menu-card">
            <h1>
              t<span>eller</span>.
            </h1>
            <ul>
              <li className="home-li" onClick={this.toggleHotdog}>
                <NavLink to="/home">
                  <img src={Home} alt="home-icon" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" onClick={this.toggleHotdog}>
                  <img src={Blog} alt="blog-icon" />
                  <span>Blog</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/notes" onClick={this.toggleHotdog}>
                  <img src={Notes} alt="notes-icon" />
                  <span>Notes</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={this.toggleHotdog}>
                  <img src={Code} alt="about-us-icon" />
                  <span>About</span>
                </NavLink>
              </li>
              <li onClick={this.props.removeLoginState}>
                <NavLink to="/" onClick={this.toggleHotdog}>
                  <img
                    src={Exit}
                    alt="exit-icon"
                    onClick={this.props.clearUser}
                  />
                  <span className="logout" onClick={this.props.clearUser}>
                    Quit
                  </span>
                </NavLink>
              </li>
            </ul>
            <div className="donate">
              <img src={Donate} alt="donate-button" />
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

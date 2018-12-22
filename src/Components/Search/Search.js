import React, { Component } from "react";
import "./Search.css";
import SearchGlass from "../../Assets/search.svg";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      hasText: false
    };
  }

  toggleSearchBtn = () => {
    this.setState({
      active: !this.state.active
    });
    console.log("lol");
  };

  render() {
    const { active } = this.state;
    return (
      <div className="bigger-box">
        <div className={active ? "search-button-active" : "search-button"}>
          <img src={SearchGlass} onClick={this.toggleSearchBtn} />
          <input className="search-bar" type="text" placeholder="Search" />
        </div>
      </div>
    );
  }
}

export default Search;

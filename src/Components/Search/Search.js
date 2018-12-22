import React, { Component } from "react";
import "./Search.css";
import SearchGlass from "../../Assets/search.svg";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      expanded: false
    };
  }

  render() {
    return (
      <div className="search-button">
        <img src={SearchGlass} />
      </div>
    );
  }
}

export default Search;

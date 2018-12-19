import React, { Component } from "react";
import "./FavoritesContainer.css";

class FavoritesContainer extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }
  render() {
    return <div className="faves-container" />;
  }
}

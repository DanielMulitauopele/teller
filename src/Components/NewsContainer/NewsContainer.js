import React, { Component } from "react";

import NewsCard from "../NewsCard/NewsCard";
import "./NewsContainer.css";

class NewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div className="news-container-literal">
        <NewsCard />
      </div>
    );
  }
}

export default NewsContainer;

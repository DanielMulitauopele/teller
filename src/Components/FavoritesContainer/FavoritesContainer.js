import React, { Component } from "react";
import "./FavoritesContainer.css";
import Slider from "react-slick";
import "./slick-theme.css";

class FavoritesContainer extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }
  render() {
    var settings = {
      swipe: true,
      fade: true,
      infinite: true,
      initialSlide: 0,
      dots: true,
      dotsCSS: "slick-dots",
      arrows: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div />
        </Slider>
      </div>
    );
  }
}

export default FavoritesContainer;

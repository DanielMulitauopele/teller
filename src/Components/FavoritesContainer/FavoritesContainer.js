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
      infinite: true,
      initialSlide: 0,
      buttons: false,
      // dots: true,
      // dotsCSS: "slick-dots",
      arrows: false,
      vertical: true,
      slidesToShow: 1,
      zoom: true,
      magnify: true,
      verticalSwiping: true,
      slidesToScroll: 1
    };
    return (
      <div className="container-box">
        <div className="container">
          <Slider {...settings}>
            <div>
              <h5>Bitcoin</h5>
              <h1>$4000.24</h1>
              <h2>+$150.00 (22.1%) ^ </h2>
            </div>
            <div>
              <h5>Dogecoin</h5>
              <h1>$100.24</h1>
              <h2>+$12.00 (22.1%) ^ </h2>
            </div>
            <div>
              <h5>SomeOtherCoin</h5>
              <h1>$3000.24</h1>
              <h2>+$0.00 (0%) ^ </h2>
            </div>
            <div>
              <h5>NickCoin</h5>
              <h1>$2000.24</h1>
              <h2>+$22.00 (1%) ^ </h2>
            </div>
            <div>
              <h5>Etherium? that's a thing right?</h5>
              <h1>$1000.24</h1>
              <h2>+$23.00 (22.1%) ^ </h2>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default FavoritesContainer;

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      nextArrow: false,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="slide">
            <h3>1</h3>
          </div>
          <div className="slide">
            <h3>2</h3>
          </div>
          <div className="slide">
            <h3>3</h3>
          </div>
          <div className="slide">
            <h3>4</h3>
          </div>
          <div className="slide">
            <h3>5</h3>
          </div>
          <div className="slide">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

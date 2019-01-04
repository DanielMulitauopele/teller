import React, { Component } from "react";
import Onboarding from "../Onboarding/Onboarding";
import "./OnboardingContainer.css";
import { LeftCaret, RightCaret } from "../Onboarding/OnboardingArrows";
import { NavLink } from "react-router-dom";
import caret from "../../Assets/caret.svg";

class OnboardingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: false,
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  prevSlide = () => {
    if (!this.state.currentIndex) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  nextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    const onboardingSlider = this.state.images.map((image, i) => {
      return <Onboarding key={i} image={image} />;
    });

    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.5s"
          }}
        >
          {onboardingSlider}
        </div>
        <div className="arrow-box">
          <LeftCaret prevSlide={this.prevSlide} />
          <NavLink to="/">
            <p className="back-to-login"> Back to Login </p>
          </NavLink>
          <RightCaret nextSlide={this.nextSlide} />
        </div>
      </div>
    );
  }
}

{
}
export default OnboardingContainer;

import React, { Component } from "react";
import Onboarding from "../Onboarding/Onboarding";
import "./OnboardingContainer.css";
import { LeftCaret, RightCaret } from "../Onboarding/OnboardingArrows";
import { NavLink } from "react-router-dom";
import caret from "../../Assets/caret.svg";
import slide1 from "../../Assets/images/tellerslide1.png";
import slide2 from "../../Assets/images/tellerslide2.png";
import slide3 from "../../Assets/images/tellerslide3.png";
import slide4 from "../../Assets/images/tellerslide4.png";
import slide5 from "../../Assets/images/tellerslid5.png";
import slide6 from "../../Assets/images/tellerslide6.png";

class OnboardingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: false,
      images: [slide1, slide2, slide3, slide4, slide5, slide6],
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

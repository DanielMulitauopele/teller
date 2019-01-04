import React, { Component } from "react";
import { LeftCaret, RightCaret } from "../Onboarding/OnboardingArrows";
import caret from "../../Assets/caret.svg";
import dev1 from "../../Assets/images/autumn.png";
import dev3 from "../../Assets/images/dina.png";
import dev2 from "../../Assets/images/daniel.png";
import dev4 from "../../Assets/images/nick.png";
import About from "../About/About";
import "./AboutUs.css";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [dev1, dev2, dev3, dev4],
      currentIndex: 0,
      translateValue: 0
    };
  }

  prevSlide = () => {
    if (!this.state.currentIndex) {
      return this.state({
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
    return document.querySelector("./aboutSlide").clientWidth;
  };

  render() {
    const aboutSlider = this.state.images.map((image, i) => {
      return <About key={i} image={image} />;
    });

    return (
      <div className="about-slider">
        <div
          className="about-slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.5s"
          }}
        >
          {aboutSlider}
        </div>
        <div className="about-arrow-box">
          <LeftCaret prevSlide={this.prevSlide} />

          <RightCaret nextSlide={this.nextSlide} />
        </div>
      </div>
    );
  }
}

{
}
export default AboutUs;

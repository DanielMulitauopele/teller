import React, { Component } from "react";
import Onboarding from "../Onboarding/Onboarding";

class OnboardingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: false
    };
  }
  render() {
    return (
      <div className="onboarding-container-literal">
        <Onboarding />
      </div>
    );
  }
}

export default OnboardingContainer;

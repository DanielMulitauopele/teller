import React from "react";
import "./Onboarding.css";
import caret from "../../Assets/caret.svg";

export const RightCaret = props => {
  return (
    <div className="right-caret" onClick={props.nextSlide}>
      <img src={caret} className="caret right-c" alt="" />
    </div>
  );
};

export const LeftCaret = props => {
  return (
    <div className="left-caret" onClick={props.prevSlide}>
      <img src={caret} className="caret left-c" alt="" />
    </div>
  );
};

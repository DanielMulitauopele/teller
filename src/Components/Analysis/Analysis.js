import React from "react";
import "./Analysis.css";

const Analysis = props => {
  console.log(props);
  return (
    // <h3>The current tone for {props.currency} is {props.tones[0]}.</h3>
    <p>
      Based on <strong>100</strong> tweets, the general sentiment of{" "}
      {props.currency} is <strong>{props.tones[0]}</strong>.
    </p>
  );
};

export default Analysis;

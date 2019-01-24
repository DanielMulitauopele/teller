import React from "react";
import "./Analysis.css";

const Analysis = props => {
  console.log(props);
  return (
    // <h3>The current tone for {props.currency} is {props.tones[0]}.</h3>
    <p>
      Based on a total of <strong>{Math.floor(Math.random() * 1300)}</strong>{" "}
      tweets over the last <strong>15</strong> days, the general sentiment of{" "}
      {props.currency} is <strong>{props.tones[0]}</strong>.
    </p>
  );
};

export default Analysis;

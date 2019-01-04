import React from "react";
import "./About.css";

const About = ({ image }) => {
  const styles = {
    background: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%"
  };
  return <div className="about-slide" style={styles} />;
};

export default About;

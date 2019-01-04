import React from "react";

const About = ({ image }) => {
  const styles = {
    background: `url(${image})`,
    backgroundSize: "containt",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%"
  };
  return <div className="about-slide" style={styles} />;
};

export default About;

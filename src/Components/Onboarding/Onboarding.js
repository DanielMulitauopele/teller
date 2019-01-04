import React from "react";

const Onboarding = ({ image }) => {
  const styles = {
    background: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%"
  };
  console.log(styles);
  return <div className="slide" style={styles} />;
};

export default Onboarding;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Invalid.css";

export const Invalid = () => {
  return (
    <div className="wrong-way">
      <h1> Woops! How'd you get here? </h1>
      <NavLink to="/">Go Back</NavLink>
    </div>
  );
};

export default Invalid;

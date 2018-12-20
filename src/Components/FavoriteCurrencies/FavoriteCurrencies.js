import React from "react";
import "./FavoriteCurrencies.css";
import Green from "../../Assets/green.svg";

const FavoriteCurrencies = () => {
  return (
    <div className="fave-currency">
      <div className="bubbles bubbles-left">
        <div />
        <div />
        <div />
      </div>
      <p className="fave-name">BITCOIN</p>
      <p class="fave-price">
        $9000.<span>00</span>
      </p>
      <div className="bubbles bubbles-right">
        <div />
        <div />
        <div />
      </div>
      <div className="price-progress">
        <p>
          +$150.55 (15% <img className="arrow" src={Green} />)
        </p>
      </div>
    </div>
  );
};

export default FavoriteCurrencies;

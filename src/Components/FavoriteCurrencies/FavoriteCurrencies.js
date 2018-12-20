import React from "react";
import "./FavoriteCurrencies.css";
import Green from "../../Assets/green.svg";

const FavoriteCurrencies = () => {
  return (
    <div className="fave-currency">
      {/* <p>BTC</p> */}
      <p>BITCOIN</p>
      <p class="fave-price">
        $9000.<span>00</span>
      </p>
      <div className="price-progress">
        <p>
          +$150.55 (15% <img className="arrow" src={Green} />)
        </p>
      </div>
      {/* <button>removeFavorites</button> */}
    </div>
  );
};

export default FavoriteCurrencies;

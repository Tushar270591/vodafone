import React, { useState, useEffect } from "react";

const PhonePricingOptions = (props) => {
  const { pricingOptions } = props;
  const [prices, setPrices] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const changePricingOption = (i) => {
    setSelectedIndex(i);
  };
  useEffect(() => {
    pricingOptions.price && setPrices(pricingOptions.price);
  }, [pricingOptions]);
  return (
    <div className="phone-pricing-options">
      {prices.map((elem, i) => (
        <div
          className={`phone-pricing-options-container ${
            selectedIndex === i ? "selected" : ""
          }`}
          key={i}
        >
          <div className="one-time-price">
            {elem.phonePrice === "Free"
              ? "FREE"
              : `Pay ${elem.currency} ${elem.phonePrice} for this phone`}
          </div>
          <div className="plan-name">{elem.planName}</div>
          <div className="monthly-price">{`${elem.currency} ${elem.planPrice}/month`}</div>
          <div className="features">
            <div>{elem.dataAllowance}</div>
            <div>{elem.freeExtra}</div>
          </div>
          <div
            onClick={() => {
              changePricingOption(i);
            }}
            className={`select ${selectedIndex === i ? "active" : ""}`}
          >
            <div>{selectedIndex === i ? "Selected" : "Select"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PhonePricingOptions;

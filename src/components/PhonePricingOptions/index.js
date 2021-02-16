import React, { useState, useEffect } from "react";

const PhonePricingOptions = (props) => {
  const { pricingOptions } = props;
  const [prices, setPrices] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
          onClick={() => {
            changePricingOption(i);
          }}
        >
          <div className="one-time-price">
            {`Pay ${elem.phonePrice} for this phone`}
          </div>
          <div>{elem.planName}</div>
          <div>{`${elem.currency} ${elem.planPrice}/month`}</div>
          <div>{elem.dataAllowance}</div>
          <div>{elem.freeExtra}</div>
          <div>{elem.planName}</div>
        </div>
      ))}
    </div>
  );
};
export default PhonePricingOptions;

import React, { useState, useEffect } from "react";

const PhoneCapacities = (props) => {
  const { selectedVariant } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pricingOptions, setPricingOptions] = useState([]);
  const handleCapacityChange = (i) => {
    setSelectedIndex(i);
    props.handleCapacityChange(i);
  };

  useEffect(() => {
    selectedVariant.pricingOptions &&
      setPricingOptions(selectedVariant.pricingOptions);
  }, [selectedVariant]);
  return (
    <div className="phone-capacities">
      {pricingOptions.map((elem, i) => (
        <div
          key={i}
          className={`phone-capacities-container ${
            selectedIndex === i ? "selected" : ""
          }`}
          onClick={() => {
            handleCapacityChange(i);
          }}
        >
          <div className="phone-capacities-name">{elem.capacity}</div>
        </div>
      ))}
    </div>
  );
};
export default PhoneCapacities;

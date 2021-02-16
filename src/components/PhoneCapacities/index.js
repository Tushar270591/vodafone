import React, { useState, useEffect } from "react";

const PhoneCapacities = (props) => {
  const { selectedVariant } = props;
  const [pricingOptions, setPricingOptions] = useState([]);
  console.log("selectedVariant", selectedVariant);
  const handleCapacityChange = (i) => {
    // setSelectedVariant(variants[i]);
    props.handleCapacityChange(i);
  };

  useEffect(() => {
    selectedVariant.pricingOptions &&
      setPricingOptions(selectedVariant.pricingOptions);
  }, [selectedVariant]);
  return (
    <div>
      {pricingOptions.map((elem, i) => (
        <div
          onClick={() => {
            handleCapacityChange(i);
          }}
        >
          {elem.capacity}
        </div>
      ))}
    </div>
  );
};
export default PhoneCapacities;

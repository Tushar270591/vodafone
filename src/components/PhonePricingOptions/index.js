import React, { useState, useEffect } from "react";

const PhonePricingOptions = (props) => {
  const { pricingOptions } = props;
  const [prices, setPrices] = useState([]);
  console.log("pricingOptions", pricingOptions);
  // const [selVariant, setSelVariant] = useState({});
  // const [pricingOptions, setPricingOptions] = useState([]);
  // console.log("selectedVariant", selectedVariant);
  const changePricingOption = (i) => {
    // setSelectedVariant(variants[i]);
    // props.handleColorChange(i);
  };
  useEffect(() => {
    pricingOptions.price && setPrices(pricingOptions.price);
  }, [pricingOptions]);
  // useEffect(() => {
  //   selectedVariant.pricingOptions &&
  //     setPricingOptions(selectedVariant.pricingOptions);
  // }, [selectedVariant]);
  return (
    <div>
      {prices.map((elem, i) => (
        <div
          onClick={() => {
            changePricingOption(i);
          }}
        >
          {elem.planName}
        </div>
      ))}
    </div>
  );
};
export default PhonePricingOptions;

import React, { useState } from "react";

const PhoneColors = (props) => {
  const { variants } = props;
  // const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const changeColor = (i) => {
    // setSelectedVariant(variants[i]);
    props.handleColorChange(i);
  };

  return (
    <div>
      {variants.map((elem, i) => (
        <div
          onClick={() => {
            changeColor(i);
          }}
        >
          {elem.colour}
          {elem.pricingOptions.length}
        </div>
      ))}
    </div>
  );
};
export default PhoneColors;

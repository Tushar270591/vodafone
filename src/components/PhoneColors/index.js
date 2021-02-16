import React, { useState } from "react";

const PhoneColors = (props) => {
  const { variants } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const changeColor = (i) => {
    setSelectedIndex(i);
    props.handleColorChange(i);
  };

  return (
    <div>
      <div>Choose Color</div>
      <div className="phone-colors">
        {variants.map((elem, i) => (
          <div
            key={i}
            className={`phone-colors-container ${
              selectedIndex === i ? "selected" : ""
            }`}
            onClick={() => {
              changeColor(i);
            }}
          >
            <div
              className="phone-colors-circle"
              style={{ backgroundColor: elem.colorCode }}
            ></div>
            <div className="phone-colors-name">{elem.colour}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PhoneColors;

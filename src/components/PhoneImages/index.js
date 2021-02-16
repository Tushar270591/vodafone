import React, { useState, useEffect } from "react";

const PhoneImages = (props) => {
  const { images } = props;
  const [selectedImage, setSelectedImage] = useState(images[0]);
  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  const changeImage = (i) => {
    setSelectedImage(images[i]);
  };

  return (
    <div>
      {images.map((img, i) => (
        <div
          onClick={() => {
            changeImage(i);
          }}
        >
          <img alt="test" src={img} />
        </div>
      ))}
      <img alt="test" src={selectedImage} />
    </div>
  );
};
export default PhoneImages;

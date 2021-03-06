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
    <div className="phone-images">
      <div className="phone-images-small">
        {images.map((img, i) => (
          <div
            key={i}
            className="phone-images-small-image"
            onClick={() => {
              changeImage(i);
            }}
          >
            <img alt="NA" src={img} />
          </div>
        ))}
      </div>
      <div className="phone-images-big">
        <img alt="NA" src={selectedImage} />
      </div>
    </div>
  );
};
export default PhoneImages;

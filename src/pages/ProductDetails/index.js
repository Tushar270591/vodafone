import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhoneCapacities from "../../components/PhoneCapacities";
import PhoneColors from "../../components/PhoneColors";
import PhoneImages from "../../components/PhoneImages";
import PhonePricingOptions from "../../components/PhonePricingOptions";
import PhonesData from "../../services/PhonesData";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [variants, setvariants] = useState([]);
  const [pricingOptions, setPricingOptions] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState({});
  useEffect(() => {
    const getPhonesData = async () => {
      const response = await PhonesData.getData();
      let { products } = await response.json();
      const productInfo = products.find((product) => product.id === id);
      setProduct(productInfo);
      setvariants(productInfo.variants);
      setImages(productInfo.variants[0].phoneImages);
      setSelectedVariant(productInfo.variants[0]);
      setPricingOptions(productInfo.variants[0].pricingOptions[0]);
    };

    getPhonesData();
  }, [id]);

  const handleColorChange = (i) => {
    setImages(product.variants[i].phoneImages);
    setSelectedVariant(product.variants[i]);
    setPricingOptions(product.variants[i].pricingOptions[0]);
  };
  const handleCapacityChange = (i) => {
    setPricingOptions(selectedVariant.pricingOptions[i]);
  };
  return (
    <div className="product-detail">
      <div className="product-detail-top">
        <PhoneImages images={images}></PhoneImages>
        <div className="product-detail-top-outer">
          <div className="product-detail-name">{product.name}</div>
          <PhoneColors
            variants={variants}
            handleColorChange={handleColorChange}
          ></PhoneColors>
          <PhoneCapacities
            selectedVariant={selectedVariant}
            handleCapacityChange={handleCapacityChange}
          ></PhoneCapacities>
        </div>
      </div>
      <div className="product-detail-middle">
        <PhonePricingOptions
          pricingOptions={pricingOptions}
        ></PhonePricingOptions>
      </div>
    </div>
  );
};

export default ProductDetails;

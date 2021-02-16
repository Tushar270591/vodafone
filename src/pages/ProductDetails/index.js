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
    <>
      <PhoneImages images={images}></PhoneImages>
      <PhoneColors
        variants={variants}
        handleColorChange={handleColorChange}
      ></PhoneColors>
      <PhoneCapacities
        selectedVariant={selectedVariant}
        handleCapacityChange={handleCapacityChange}
      ></PhoneCapacities>
      <PhonePricingOptions
        pricingOptions={pricingOptions}
      ></PhonePricingOptions>
      {/* <div className="container">{JSON.stringify(product)}</div> */}
    </>
  );
};

export default ProductDetails;

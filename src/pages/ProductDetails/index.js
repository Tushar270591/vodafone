import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhoneCapacities from "../../components/PhoneCapacities";
import PhoneColors from "../../components/PhoneColors";
import PhoneImages from "../../components/PhoneImages";
import PhonePricingOptions from "../../components/PhonePricingOptions";
import Return from "../../components/Return";
import PhonesData from "../../services/PhonesData";

const ProductDetails = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [variants, setvariants] = useState([]);
  const [pricingOptions, setPricingOptions] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState({});
  const [selectedPlan, setSelectedPlan] = useState({});
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
    setSelectedPlan({});
  };
  const handleCapacityChange = (i) => {
    setPricingOptions(selectedVariant.pricingOptions[i]);
    setSelectedPlan({});
  };
  const handlePricingChange = (i) => {
    setSelectedPlan(pricingOptions.price[i]);
  };
  return (
    <div className="product-detail">
      <Return history={props.history}></Return>
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
          <div
            className="product-detail-summary"
            dangerouslySetInnerHTML={{ __html: product.summary }}
          />
        </div>
      </div>
      <div className="product-detail-middle">
        <PhonePricingOptions
          selectedPlan={selectedPlan}
          pricingOptions={pricingOptions}
          handlePricingChange={handlePricingChange}
        ></PhonePricingOptions>
      </div>
      <div className="product-detail-bottom">
        <div dangerouslySetInnerHTML={{ __html: product.fieldItems }} />
        <div className="product-detail-selected">
          <div>
            <div>
              {product.name} {selectedVariant.colour} {pricingOptions.capacity}
            </div>
            <div>{selectedPlan.planName}</div>
          </div>
          <div>
            <div>
              {selectedPlan.phonePrice &&
                `${selectedPlan.currency} ${selectedPlan.phonePrice} one-off cost`}
            </div>
            <div>
              {selectedPlan.planPrice &&
                `${selectedPlan.currency} ${selectedPlan.planPrice} per month`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

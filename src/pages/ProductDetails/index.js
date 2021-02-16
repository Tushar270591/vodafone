import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhonesData from "../../services/PhonesData";
const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getPhonesData = async () => {
      const response = await PhonesData.getData();
      let { products } = await response.json();
      const productInfo = products.find(product => product.id === id);
      console.log(productInfo);
      setProduct(productInfo)
    };

    getPhonesData();
  }, [id]);
  
  return <div className="container">{JSON.stringify(product)}</div>;

};

export default ProductDetails;

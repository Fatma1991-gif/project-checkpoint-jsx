import React from "react";
import "./Produitscard.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Image image={product.image} name={product.name} />
      <Name name={product.name} />
      <Description description={product.description} />
      <Price price={product.price} />
      <button className="product-button">Commander</button>
    </div>
  );
}

export default ProductCard;

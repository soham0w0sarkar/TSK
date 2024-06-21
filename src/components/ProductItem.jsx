/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.strMealThumb} alt={product.strMeal} />
      <div className="product-info">
        <h3>{product.strMeal}</h3>
        <p>$8.45</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default ProductItem;

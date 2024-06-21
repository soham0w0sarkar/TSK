/* eslint-disable no-unused-vars */
import React from 'react';
import ProductItem from './ProductItem';

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2>Top Category Of Organic Food</h2>
      <div className="categories">
        <button>Fruits and Vegetables</button>
        <button>Bakery</button>
        <button>Meat and Seafood</button>
        <button>Beverage</button>
        <button>Biscuit and Snacks</button>
      </div>
      <div className="products">
        <ProductItem name="Italian-Style Chicken Meatballs" price="$8.45" />
        <ProductItem name="Seafoods Stuffed Alaskan Salmon" price="$8.45" />
        <ProductItem name="Choice Angus Beef Stew Meat" price="$8.45" />
        <ProductItem name="Crispy Classic Buffalo Wings" price="$8.45" />
        <ProductItem name="Grass-fed 85_15 Ground Beef" price="$8.45" />
      </div>
    </section>
  );
};

export default CategorySection;

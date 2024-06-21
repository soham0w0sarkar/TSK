/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
  const [bannerImage, setBannerImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        const meal = response.data.meals[0];
        setBannerImage(meal.strMealThumb);
      } catch (error) {
        console.error('Error fetching the image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <section className="banner">
      <div className="banner-content">
        <h2>Discount up to 20%</h2>
        <h1>Buy Fresh And Organic Grocery Food</h1>
        <p>Enjoy the best quality and the freshest ingredients straight to your door.</p>


        <button>Shop Now</button>
      </div>
      <div className="banner-stats">
        <div>35k+ Users</div>
        <div>18k+ Products</div>
      </div>
      <div className="banner-image">
        {bannerImage && <img src={bannerImage} alt="Fresh Food" />}
      </div>
    </section>
  );
};

export default Banner;

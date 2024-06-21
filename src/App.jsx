// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductList />
    </div>
  );
};

export default App;

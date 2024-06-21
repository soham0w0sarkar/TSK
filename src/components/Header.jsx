/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">GO FOOD</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#"><FontAwesomeIcon icon={faHome} /> Home</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faShoppingCart} /> Groceries</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faBook} /> Pages</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /> Connect with us</a></li>
        </ul>
      </nav>
      <div className="header-icons">
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faShoppingCart} />
        <FontAwesomeIcon icon={faBook} />
      </div>
    </header>
  );
};

export default Header;

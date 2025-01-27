import React from 'react';
import './index.css';

const Header = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Shop</title>
      <link rel="stylesheet" href="./index.css" />
      <header>
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-title">Project One Shop</h1>
            <nav className="navbar">
              <ul>
                <li><a href="homepage.html">Home</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="collections.html">Collections</a></li>
                <li><a href="shop.html">Shop</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
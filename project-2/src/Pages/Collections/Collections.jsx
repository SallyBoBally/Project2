import React from 'react';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        {
           <><h1>Collections</h1>
           <div>List of different collections:</div>
           <li>Trading cards</li>
           <li>Artifacts</li>
           <li>Books</li>
           <li>Coins</li></>
        }
      </main>
    </div>
  );
};
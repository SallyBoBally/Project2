import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../Pages/Home/Home';
import News from '../Pages/News/News';
import Collections from '../Pages/Collections/Collections';
import Shop from '../Pages/Shop/Shop';

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<News />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
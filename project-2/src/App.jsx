import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import the routing components
import './index.css';
import Homepage from './Pages/Homepage/Home';
import News from './Pages/News/News';
import Collections from './Pages/Collections/Collections';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <Router>
      <header>
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-title">Project Two</h1>
            <nav className="navbar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/collections">Collections</Link></li>
                <li><Link to="/shop">Shop</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<News />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart cart={Cart} />} />
      </Routes>
    </Router>
  )
}

export default App

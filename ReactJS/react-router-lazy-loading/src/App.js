import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./component/Home";
// import About from "./component/About";
import Products from "./component/Products";

const LazyAbout = React.lazy(() => import('./component/About'));

function App() {
  return (
    // we use basename when we deploy out project in the serverr
    // to automate directly with the paths we create
    // <Router basename="/seeker.com">
    <Router>
      <nav className="nav">
        <li><NavLink className={navData => (navData.isActive ? 'active' : 'link')} to='/'>Home</NavLink></li>
        <li><NavLink className={navData => (navData.isActive ? 'active' : 'link')} to='/about'>About</NavLink></li>
        <li><NavLink className={navData => (navData.isActive ? 'active' : 'link')} to='/products'>Products</NavLink></li>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<React.Suspense fallback='loading...' ><LazyAbout /></React.Suspense>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;

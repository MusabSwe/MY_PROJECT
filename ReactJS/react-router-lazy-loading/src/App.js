import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./component/Home";
import About from "./component/About";
import Products from "./component/Products";
function App() {
  return (
    <Router>
      <nav className="nav">
        <li><NavLink className={navData => (navData.isActive ? 'active' : 'link')} to='/'>Home</NavLink></li>
        <li><NavLink className={navData => (navData.isActive ? 'active' : 'link')} to='/about'>About</NavLink></li>
        <li><NavLink className={navData => (navData.isActive ? 'active' : 'link')} to='/products'>Products</NavLink></li>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;

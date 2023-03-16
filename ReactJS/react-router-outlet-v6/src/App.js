import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar/NavBar';
// import Page404 from './components/Page404';
import User from './components/User';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Company from './components/Company';
import Channel from './components/Channel';
import Other from './components/Other';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/contact/" element={<Contact />}>
            {/*
             to display its content you should go to wrapper component
             and add <outlet/>
            */}
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

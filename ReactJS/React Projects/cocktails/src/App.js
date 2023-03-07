import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

// import components
import Navbar from './components/Navbar'
import Cocktail from './components/Cocktail'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* We replace Switch by Routes in react-router-dom v6 */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cocktail/:id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
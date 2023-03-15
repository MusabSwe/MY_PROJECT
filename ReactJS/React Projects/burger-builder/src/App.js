import { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import { Routes, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path='/' element={<BurgerBuilder />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
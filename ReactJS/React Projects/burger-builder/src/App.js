import { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import { Routes, Route, Navigate } from 'react-router-dom'
import ContactData from './containers/Checkout/ContactData/ContactData';
import Orders from './containers/Checkout/Orders/Orders';
import Auth from './containers/Auth/Auth';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path='/' element={<BurgerBuilder />} />
            <Route path='orders' element={<Orders />} />
            <Route path='/auth' element={<Auth />} />
            {/* Nested Routes below */}
            <Route path='/checkout' element={<Checkout />}>
              <Route path='contact-data' element={<ContactData />} />
            </Route>


          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
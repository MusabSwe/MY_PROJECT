// no need of js extension
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Components/Create';
function App() {

  return (
    // JSX
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            {/* Exact match in the path */}
            <Route exact path="/">
              {/* put the compoents we will visit on the main path / */}
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

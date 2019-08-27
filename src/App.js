import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './components/pages/Index';
import Login from './components/pages/Login';
import AddFarmer from './components/pages/AddFarmer/AddFarmer.jsx'

function App() {
  return (
    <Router>
      <div className="App" data-testid="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login/">Login</Link>
            </li>
            <li>
              <Link to="/add-farmer/">Add Farmer</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/login/" component={Login} />
        <Route path="/add-farmer/" component={AddFarmer} />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Login from './components/pages/Login/Login';
import CreateAccount from './components/pages/CreateAccount/CreateAccount';

function App() {
  return (
    <Router>
      <div className="App" data-testid="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/login/">Login</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Dashboard} />
        <Route path="/accounts/new" component={CreateAccount} />
        <Route path="/login/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';

function App() {
  console.log(process.env)
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
        <Route path="/login/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

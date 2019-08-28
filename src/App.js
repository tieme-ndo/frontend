import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Login from './components/pages/Login/Login';
import CreateAccount from './components/pages/CreateAccount/CreateAccount';

function App() {
  return (
    <Router>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/accounts/new" component={CreateAccount} />
      <Route path="/" component={Login} />
    </Router>
  );
}

export default App;

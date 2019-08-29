import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../components/pages/Dashboard/Dashboard';
import Login from '../components/pages/Login/Login';
import CreateAccount from '../components/pages/CreateAccount/CreateAccount';

function App() {
  return (
    <Router>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route
        exact
        path="/accounts/new"
        render={props => <CreateAccount {...props} />}
      />
      <Route exact path="/" render={props => <Login {...props} />} />
    </Router>
  );
}

export default App;

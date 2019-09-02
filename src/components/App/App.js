/** @format */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import AddStaff from '../pages/AddStaff/AddStaff';
import AddFarmer from '../pages/AddFarmer/AddFarmer';
import withRestrictedAccess from '../hoc/withRestrictedAccess';
import { getUser, logout } from '../../utils/handlers/authenticationHandlers';
import { getFarmersHandler } from '../../utils/handlers/farmerHandlers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState(undefined);
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    // Hook to retrieve the current logged in user from token
    if (!user) {
      const retrievedUser = getUser();
      setUser(retrievedUser);
    }
  }, [user]);

  useEffect(() => {
    // Hook to load the farmers in the table
    getFarmersHandler().then(retrievedFarmers => {
      setFarmers(retrievedFarmers);
    });
  }, []);

  const logOut = () => {
    setUser(false);
    logout();
  };
  return (
    <Router>
      <div className="App" data-testid="App">
        <nav>
          <ul>
            {user ? (
              <>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                {user.isAdmin ? (
                  <li>
                    <Link to="/accounts/new">Add Account</Link>
                  </li>
                ) : null}
                <li>
                  <Link to="/" onClick={logOut}>
                    Log out
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
        <Container>
          <Route
            path="/"
            exact
            render={props => <Dashboard {...props} farmers={farmers} />}
          />
          <Route
            path="/accounts/new"
            component={withRestrictedAccess(AddStaff, true, user)}
          />
          <Route
            path="/login/"
            render={props => <Login {...props} setUser={setUser} />}
          />
          <Route path="/addfarmer" component={AddFarmer} />
          <ToastContainer position="top-right" />
        </Container>
      </div>
    </Router>
  );
}

export default App;

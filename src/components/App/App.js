/** @format */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import AddStaff from '../pages/AddStaff/AddStaff';
import AddFarmer from '../pages/AddFarmer/AddFarmer';
import DisplayFarmer from '../pages/DisplayFarmer/DisplayFarmer';
import withRestrictedAccess from '../hoc/withRestrictedAccess';
import { getUser, logout } from '../../utils/handlers/authenticationHandlers';
import {
  getFarmersHandler,
  cleanFarmersData
} from '../../utils/handlers/farmerHandlers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHeader from '../common/PageHeader/PageHeader';

function App() {
  const [user, setUser] = useState(undefined);
  const [farmers, setFarmers] = useState({
    data: undefined,
    cleanedData: undefined
  });
  const [needsUpdate, setNeedsUpdate] = useState(true);

  useEffect(() => {
    // Hook to retrieve the current logged in user from token
    if (!user) {
      const retrievedUser = getUser();
      setNeedsUpdate(true);
      setUser(retrievedUser);
    }
  }, [user]);

  useEffect(() => {
    if (user && needsUpdate) {
      setFarmers({
        // Setting this allows the dashboard to know that something is being loaded
        data: undefined,
        cleanedData: undefined
      });
      updateFarmers();
      setNeedsUpdate(false);
    }
  }, [user, needsUpdate]);

  const updateFarmers = () => {
    getFarmersHandler()
      .then(retrievedFarmers => {
        setFarmers({
          data: retrievedFarmers,
          cleanedData: cleanFarmersData(retrievedFarmers)
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const logOut = () => {
    setUser(false);
    logout();
  };

  return (
    <Router>
      <div className="App" data-testid="App">
        {user ? <PageHeader logOut={logOut} user={user} /> : null}

        <Container>
          <Route
            path="/"
            exact
            render={props => (
              <Dashboard
                {...props}
                farmers={farmers.cleanedData}
                rawFarmers={farmers.data}
              />
            )}
          />
          <Route
            path="/accounts/new"
            component={withRestrictedAccess(AddStaff, true, user)}
          />
          <Route
            path="/login/"
            render={props => <Login {...props} setUser={setUser} />}
          />
          <Route
            path="/addfarmer"
            component={withRestrictedAccess(AddFarmer)}
          />
          <Route
            path="/farmers/:id"
            render={props => (
              <DisplayFarmer {...props} needsUpdate={setNeedsUpdate} />
            )}
          />
          <ToastContainer position="top-right" />
        </Container>
      </div>
    </Router>
  );
}

export default App;

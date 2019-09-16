/** @format */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import AddStaff from '../pages/AddStaff/AddStaff';
import AddFarmer from '../pages/AddFarmer/AddFarmer';
import UpdateFarmer from '../pages/UpdateFarmer/UpdateFarmer';
import DisplayFarmer from '../pages/DisplayFarmer/DisplayFarmer';
import PasswordReset from '../pages/PasswordReset/PasswordReset';
import RestrictedRoute from '../hoc/RestrictedRoute';
import { getUser, logout, isLoggedIn, getToken } from '../../utils/handlers/authenticationHandlers';

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
  const [editFarmers, setEditFarmers] = useState({
    data: undefined,
    cleanedData: undefined
  });

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
      loadFarmers();
      setNeedsUpdate(false);
    }
  }, [user, needsUpdate]);

  const loadFarmers = () => {
    getFarmersHandler()
      .then(retrievedFarmers => {
        setFarmers({
          data: retrievedFarmers,
          cleanedData: cleanFarmersData(retrievedFarmers)
        });
      })
      .catch(error => {
        return new Error(error);
      });
  };

  const getFarmer = id => {
    if (farmers.data) {
      const farmer = farmers.data.find(farmer => farmer._id === id);
      return farmer;
    }
  };

  const logOut = () => {
    setUser(false);
    logout();
  };

  return (
    <Router>
      <div className="App" data-testid="App">
        {user ? (
          <PageHeader
            logOut={logOut}
            user={user}
            edits={editFarmers.cleanedData}
          />
        ) : null}

        <Container>
          <RestrictedRoute
            path="/"
            exact
            isAllowed={isLoggedIn(getToken())}
            redirectTo='/login'
            render={props => (
              <Dashboard
                {...props}
                farmers={farmers.cleanedData}
                getFarmer={getFarmer}
              />
            )}
          />
          <RestrictedRoute
            path="/accounts/new"
            isAllowed={isLoggedIn(getToken()) && getUser().isAdmin}
            redirectTo='/'
            component={AddStaff}
          />
          <Route
            path="/login/"
            render={props => <Login {...props} setUser={setUser} />}
          />
          <RestrictedRoute
            path="/farmers/:id/edit"
            isAllowed={isLoggedIn(getToken())}
            redirectTo='/login'
            render={props => (
              <UpdateFarmer
                {...props}
                appStateShouldUpdate={setNeedsUpdate}
                user={user}
              />
            )}
          />
          <RestrictedRoute
            path="/addfarmer"
            isAllowed={isLoggedIn(getToken())}
            redirectTo='/login'
            component={AddFarmer}
          />
          <RestrictedRoute
            exact
            path="/farmers/:id"
            isAllowed={isLoggedIn(getToken())}
            redirectTo='/login'
            render={props => (
              <DisplayFarmer
                {...props}
                farmers={farmers.data}
                getFarmer={getFarmer}
                needsUpdate={setNeedsUpdate}
              />
            )}
          />
          <RestrictedRoute
            exact
            path="/reset-password"
            isAllowed={isLoggedIn(getToken())}
            redirectTo='/login'
            render={props => <PasswordReset {...props} logOut={logOut} />}
          />
          <ToastContainer position="top-right" />
        </Container>
      </div>
    </Router>
  );
}

export default App;

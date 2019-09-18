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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHeader from '../common/PageHeader/PageHeader';
import EditCollection from '../pages/EditCollection/EditCollection';
import { getAllChangeRequests } from '../../utils/handlers/changeRequestHandler';

function App() {
  const [user, setUser] = useState(undefined);
  const [farmers, setFarmers] = useState({
    data: undefined,
    cleanedData: undefined
  });
  const [needsUpdate, setNeedsUpdate] = useState(true);
  const [changeRequest, setChangeRequest] = useState([]);
  const [visible, setVisible] = useState(false);

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

      // fetch changeRequests only for admin users
      if (user.isAdmin) {
        loadChangeRequest();
      }
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
        toast.error(error.message);
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

  const loadChangeRequest = () => {
    getAllChangeRequests()
      .then(changeRequests => {
        setChangeRequest(changeRequests);
      })
      .catch(error => {
        return new Error(error);
      });
  };

  const closeSideBar = () => {
    if (visible) {
      setVisible(!visible);
    }
  };

  const toggleSideBar = () => {
    setVisible(!visible);
  };

  return (
    <Router>
      <div className="App" data-testid="App">
        {user ? (
          <PageHeader
            logOut={logOut}
            user={user}
            edits={changeRequest}
            visible={visible}
            closeSideBar={closeSideBar}
            toggleSideBar={toggleSideBar}
          />
        ) : null}

        <Container onClick={closeSideBar}>
          <RestrictedRoute
            path="/"
            exact
            isAllowed={isLoggedIn()}
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
            isAllowed={isLoggedIn() && getUser().isAdmin}
            redirectTo='/'
            component={AddStaff}
          />
          <Route
            path="/login/"
            render={props => <Login {...props} setUser={setUser} />}
          />
          <RestrictedRoute
            path="/farmers/:id/edit"
            isAllowed={isLoggedIn()}
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
            isAllowed={isLoggedIn()}
            redirectTo='/login'
            component={AddFarmer}
          />
          <RestrictedRoute
            exact
            path="/farmers/:id"
            isAllowed={isLoggedIn()}
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
            isAllowed={isLoggedIn()}
            redirectTo='/login'
            render={props => <PasswordReset {...props} logOut={logOut} />}
          />
          <RestrictedRoute
            exact
            path="/edit-collection/:id"
            isAllowed={isLoggedIn() && getUser().isAdmin}
            redirectTo='/login'
            render={props => (
              <EditCollection
                {...props}
                appStateShouldUpdate={setNeedsUpdate}
              />
            )}
          />

          <ToastContainer position="top-right" />
        </Container>
      </div>
    </Router>
  );
}

export default App;

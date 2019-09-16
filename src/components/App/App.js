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
import withRestrictedAccess from '../hoc/withRestrictedAccess';
import { getUser, logout } from '../../utils/handlers/authenticationHandlers';

import {
  getFarmersHandler,
  cleanFarmersData
} from '../../utils/handlers/farmerHandlers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHeader from '../common/PageHeader/PageHeader';
import EditCollection from '../pages/EditCollection/EditCollection';
import {
  getAllChangeRequests,
  getChangeRequestsById
} from '../../utils/handlers/changeRequestHandler';

function App() {
  const [user, setUser] = useState(undefined);
  const [farmers, setFarmers] = useState({
    data: undefined,
    cleanedData: undefined
  });
  const [needsUpdate, setNeedsUpdate] = useState(true);
  const [changeRequest, setChangeRequest] = useState([]);

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
      loadChangeRequest();
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

  const loadChangeRequest = () => {
    getAllChangeRequests()
      .then(changeRequests => {
        setChangeRequest(changeRequests);
      })
      .catch(error => {
        return new Error(error);
      });
  };

  const loadChangeRequestById = id => {
    return getChangeRequestsById(id)
      .then(res => res)
      .catch(error => {
        return new Error(error);
      });
  };

  return (
    <Router>
      <div className="App" data-testid="App">
        {user ? (
          <PageHeader logOut={logOut} user={user} edits={changeRequest} />
        ) : null}

        <Container>
          <Route
            path="/"
            exact
            render={props => (
              <Dashboard
                {...props}
                farmers={farmers.cleanedData}
                getFarmer={getFarmer}
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
            path="/farmers/:id/edit"
            render={props => (
              <UpdateFarmer
                {...props}
                appStateShouldUpdate={setNeedsUpdate}
                user={user}
              />
            )}
          />
          <Route
            path="/addfarmer"
            component={withRestrictedAccess(AddFarmer)}
          />
          <Route
            exact
            path="/farmers/:id"
            render={props => (
              <DisplayFarmer
                {...props}
                farmers={farmers.data}
                getFarmer={getFarmer}
                needsUpdate={setNeedsUpdate}
              />
            )}
          />
          <Route
            exact
            path="/reset-password"
            render={props => <PasswordReset {...props} logOut={logOut} />}
          />
          <Route
            exact
            path="/edit-collection/:id"
            render={props => (
              <EditCollection
                {...props}
                changeRequest={loadChangeRequestById}
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

import React, { useState, useEffect, useCallback } from 'react';
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
import {
  getUser,
  logout,
  isLoggedIn
} from '../../utils/handlers/authenticationHandlers';

import {
  getFarmersHandler,
  cleanFarmersData
} from '../../utils/handlers/farmerHandlers';
import { toast } from 'react-toastify';
import { StyledToastContainer } from '../common/Toast/StyledToastContainer';
import 'react-toastify/dist/ReactToastify.css';
import PageHeader from '../common/PageHeader/PageHeader';
import EditCollection from '../pages/EditCollection/EditCollection';
import { getAllChangeRequests } from '../../utils/handlers/changeRequestHandler';
import { getFarmerStatisticsHandler } from '../../utils/handlers/farmerHandlers';
import AxiosErrorInterceptor from '../hoc/axiosErrorHandler/AxiosErrorInterceptor'

function App() {
  const [user, setUser] = useState(undefined);
  const [data, setData] = useState({
    farmers: undefined,
    farmersDashboard: undefined,
    statistics: undefined
  });
  const [needsUpdate, setNeedsUpdate] = useState(true);
  const [changeRequest, setChangeRequest] = useState([]);

  const loadFarmers = useCallback(() => {
    getFarmersHandler()
      .then(async retrievedFarmers => {
        setData({
          farmers: retrievedFarmers,
          farmersDashboard: cleanFarmersData(retrievedFarmers),
          statistics: await loadStatistics()
        });
      })
      .catch(error => {
        toast.error(error.message);
      });
  }, []);

  const loadStatistics = async () => {
    try {
      return await getFarmerStatisticsHandler();
    } catch (err) {
      toast.error(err.message);
    }
  };

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
      setData({
        // Setting this allows the dashboard to know that something is being loaded
        farmers: undefined,
        farmersDashboard: undefined,
        statistics: undefined
      });

      // fetch changeRequests only for admin users
      if (user.isAdmin) {
        loadChangeRequest();
      }
      loadFarmers();
      setNeedsUpdate(false);
    }
  }, [user, needsUpdate, loadFarmers]);

  const getFarmer = id => {
    if (data.farmers) {
      const farmer = data.farmers.find(farmer => farmer._id === id);
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

  return (
    <Router>
      <div className="App" data-testid="App">
        {user ? (
          <PageHeader
            logOut={logOut}
            user={user}
            edits={changeRequest}
          />
        ) : null}

        <Container id="container">
          <RestrictedRoute
            path="/"
            exact
            isAllowed={isLoggedIn()}
            redirectTo="/login"
            render={props => (
              <Dashboard
                {...props}
                farmers={data.farmersDashboard}
                statistics={data.statistics}
              />
            )}
          />
          <RestrictedRoute
            path="/accounts/new"
            isAllowed={isLoggedIn() && getUser().isAdmin}
            redirectTo="/"
            component={AddStaff}
          />
          <Route
            path="/login/"
            render={props => <Login {...props} setUser={setUser} />}
          />
          <RestrictedRoute
            path="/farmers/:id/edit"
            isAllowed={isLoggedIn()}
            redirectTo="/login"
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
            redirectTo="/login"
            render={props => (
              <AddFarmer {...props} appStateShouldUpdate={setNeedsUpdate} />
            )}
          />
          <RestrictedRoute
            exact
            path="/farmers/:id"
            isAllowed={isLoggedIn()}
            redirectTo="/login"
            render={props => {
              const id = props.match.params.id;
              let selectedFarmer;
              if (data.farmers) {
                selectedFarmer = getFarmer(id);
                if (!selectedFarmer) selectedFarmer = null;
              }

              return (
                <DisplayFarmer
                  {...props}
                  farmer={selectedFarmer}
                  needsUpdate={setNeedsUpdate}
                />
              );
            }}
          />
          <RestrictedRoute
            exact
            path="/reset-password"
            isAllowed={isLoggedIn()}
            redirectTo="/login"
            render={props => <PasswordReset {...props} logOut={logOut} />}
          />
          <RestrictedRoute
            exact
            path="/edit-collection/:id"
            isAllowed={isLoggedIn() && getUser().isAdmin}
            redirectTo="/login"
            render={props => (
              <EditCollection
                {...props}
                appStateShouldUpdate={setNeedsUpdate}
              />
            )}
          />

          <StyledToastContainer position="top-right" hideProgressBar />
        </Container>
      </div>
    </Router>
  );
}

export default AxiosErrorInterceptor(App);

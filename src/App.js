import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import withRestrictedAccess from './components/hoc/withRestrictedAccess';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Login from './components/pages/Login/Login';
import CreateAccount from './components/pages/CreateAccount/CreateAccount';
import { getUser } from './utils/handlers/authenticationHandlers';
import { isLoggedIn, logout } from './utils/handlers/authenticationHandlers';

function App() {
  const [user, changeUser] = useState(null);

  useEffect(() => {
    setUser(isLoggedIn());
  }, []);

  const setUser = bool => {
    if (bool) {
      changeUser(getUser());
    } else {
      changeUser(null);
    }
  };

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
                <li>
                  <Link to="/" onClick={logOut}>
                    Log out
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </nav>

        <Route path="/" exact component={withRestrictedAccess(Dashboard)} />
        <Route
          path="/accounts/new"
          component={withRestrictedAccess(CreateAccount, true)}
        />
        <Route
          path="/login/"
          render={props => <Login {...props} setUser={setUser} />}
        />
      </div>
    </Router>
  );
}

export default App;

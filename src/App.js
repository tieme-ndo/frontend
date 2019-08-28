import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Login from "./components/pages/Login/Login";
import CreateAccount from "./components/pages/CreateAccount/CreateAccount";
import { getUser } from "./handlers/userHandlers";
import { logout } from "./handlers/authenticationHandlers";

function App() {
  let user = null;

  useEffect(() => {
    user = getUser();
  });

  return (
    <Router>
      <div className="App" data-testid="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            {user ? (
              <li>
                <button onClick={logout}>Log out</button>
              </li>
            ) : (
              <li>
                <Link to="/login/">Log in</Link>
              </li>
            )}
          </ul>
        </nav>

        <Route path="/" exact component={Dashboard} />
        <Route path="/accounts/new" component={CreateAccount} />
        <Route path="/login/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

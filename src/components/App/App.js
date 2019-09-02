/** @format */

import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import withRestrictedAccess from '../hoc/withRestrictedAccess'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import CreateAccount from '../pages/CreateAccount/CreateAccount'
import {getUser} from '../../utils/handlers/authenticationHandlers'
import {logout} from '../../utils/handlers/authenticationHandlers'
import AddFarmer from '../pages/AddFarmer/AddFarmer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    if (!user) {
      const retrievedUser = getUser()
      setUser(retrievedUser)
    }
  }, [user])

  const logOut = () => {
    setUser(false)
    logout()
  }
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

        <Route path="/" exact component={withRestrictedAccess(Dashboard)} />
        <Route path="/accounts/new" component={withRestrictedAccess(CreateAccount, true, user)} />
        <Route path="/login/" render={props => <Login {...props} setUser={setUser} />} />
        <Route path="/addfarmer" component={AddFarmer} />
        <ToastContainer position="top-right" />
      </div>
    </Router>
  )
}

export default App

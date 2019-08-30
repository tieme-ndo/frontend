import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import withRestrictedAccess from './components/hoc/withRestrictedAccess'
import Dashboard from './components/pages/Dashboard/Dashboard'
import Login from './components/pages/Login/Login'
import CreateAccount from './components/pages/CreateAccount/CreateAccount'
import AddFarmer from './components/pages/AddFarmer/AddFarmer'
import {getUser} from './utils/handlers/authenticationHandlers'
import {logout} from './utils/handlers/authenticationHandlers'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            {user ? 
              (<>
              <li><Link to="/">Dashboard</Link></li>
              {user.isAdmin ? (<li><Link to="/accounts/new">Add Account</Link></li>) : null}
              <li><Link to="/" onClick={logOut}>Log out</Link></li>
              </>) 
              : null}
          </ul>
        </nav>

        <Route path="/" exact component={withRestrictedAccess(Dashboard)} />
        <Route path="/accounts/new" component={withRestrictedAccess(CreateAccount, true, user)} />
        <Route path="/login/" render={props => <Login {...props} setUser={setUser} />} />
        <Route path="/addfarmer" component={AddFarmer}/>
        <ToastContainer position="top-right" />
      </div>
    </Router>
  )
}

export default App

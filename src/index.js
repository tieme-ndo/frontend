import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import * as serviceWorker from './utils/serviceWorker';
=======
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> Add Route for Index and Login

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

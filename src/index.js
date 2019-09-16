import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './utils/serviceWorker';
import * as Sentry from '@sentry/browser';

dotenv.config();

// Setup exception monitoring for staging/production environments
if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    dsn: 'https://824c2ced789a4a3aa770c8c066ff4708@sentry.io/1724006',
    environment: process.env.NODE_ENV
  });
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

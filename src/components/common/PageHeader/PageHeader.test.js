import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageHeader from './PageHeader';

const userTestAdmin = {
  exp: 1568128515,
  iat: 1567523715,
  isAdmin: true,
  username: 'Test'
};

const userTest = {
  exp: 1568128515,
  iat: 1567523715,
  isAdmin: false,
  username: 'Test'
};


it('renders the navbar if user is admin', () => {
  const { getByTestId } = render(
    <Router>
      <PageHeader user={userTestAdmin}/>
    </Router>
  );
  const HeaderComponent = getByTestId('nav-test');
  expect(HeaderComponent).toBeInTheDocument();
});

it('renders the navbar if user is not admin', () => {
  const { getByTestId } = render(
    <Router>
      <PageHeader user={userTest} />
    </Router>
  );
  const HeaderComponent = getByTestId('nav-test');
  expect(HeaderComponent).toBeInTheDocument();
});

it('renders add account if user is admin', () => {
  const { getByTestId } = render(
    <Router>
      <PageHeader user={userTestAdmin} />
    </Router>
  );
  const AdminHeaderComponent = getByTestId('create-new-account-test');
  expect(AdminHeaderComponent).toBeInTheDocument();
});

it('does not render add account if user is not admin', () => {
  const { queryByTestId } = render(
    <Router>
      <PageHeader user={userTest} />
    </Router>
  );
  expect(queryByTestId('create-new-account-test')).toBeNull();
});


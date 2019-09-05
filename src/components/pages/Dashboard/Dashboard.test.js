import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

beforeAll(() => {
  // Mocking localStorage
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };
  // eslint-disable-next-line no-undef
  global.localStorage = localStorageMock;
});

it('renders without crashing', () => {
  localStorage.setItem('tokenTiemeNdo', 'akgjsakgjaslgjslgkjaslgjalkgja');
  const { getByTestId } = render(
    <Router>
      <Dashboard farmers={[{}, {}]}/>
    </Router>
  )
  const dashboardHeaderComponent = getByTestId('dashboard-render-test')
  expect(dashboardHeaderComponent).toBeInTheDocument();

  const addFarmerButtonComponent = getByTestId('add-farmer-button-test')
  expect(addFarmerButtonComponent).toBeInTheDocument();
  
  const TableComponent = getByTestId('Table-test');
  expect(TableComponent).toBeInTheDocument();
  expect(document.querySelector('[data-testid="Table-test-header"]')).toBeInTheDocument();
});



































// it('renders without crashing', () => {
//   const { getByTestId } = render(
//     <Router>
//       <PageHeader user={userTestAdmin} />
//     </Router>
//   );
//   const HeaderComponent = getByTestId('nav-test');
//   expect(HeaderComponent).toBeInTheDocument();
// });

// it('renders the navbar if user is not admin', () => {
//   const { getByTestId } = render(
//     <Router>
//       <PageHeader user={userTest} />
//     </Router>
//   );
//   const HeaderComponent = getByTestId('nav-test');
//   expect(HeaderComponent).toBeInTheDocument();
// });

// it('renders add account if user is admin', () => {
//   const { getByTestId } = render(
//     <Router>
//       <PageHeader user={userTestAdmin} />
//     </Router>
//   );
//   const AdminHeaderComponent = getByTestId('create-new-account-test');
//   expect(AdminHeaderComponent).toBeInTheDocument();
// });

// it('does not render add account if user is not admin', () => {
//   const { queryByTestId } = render(
//     <Router>
//       <PageHeader user={userTest} />
//     </Router>
//   );
//   expect(queryByTestId('create-new-account-test')).toBeNull();
// });

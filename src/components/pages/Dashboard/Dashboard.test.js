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
  localStorage.setItem('tokenTiemeNdo', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhdm9sIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY4MTk3NjU3LCJleHAiOjE1Njg4MDI0NTd9.vfuvsBUI4c7YRarmbRJ5LD98dWcVF2CLE-w5SptOZGs');
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
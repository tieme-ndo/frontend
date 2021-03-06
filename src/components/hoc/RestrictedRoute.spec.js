import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RestrictedRoute from './RestrictedRoute';

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

const TestComponent = () => {
  return <div data-testid="restricted-test">This is a test</div>;
};

it('renders without crashing', () => {
  localStorage.setItem('tokenTiemeNdo', 'akgjsakgjaslgjslgkjaslgjalkgja');

  const { getByTestId } = render(
    <Router>
      <RestrictedRoute
        path='/'
        isAllowed={true}
        component={TestComponent}
      />
    </Router>
  );
  const AppComponent = getByTestId('restricted-test');
  expect(AppComponent).toBeInTheDocument();
});

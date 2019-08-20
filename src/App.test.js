import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('renders without crashing', () => {
  const { getByTestId } = render(<App />);
  const AppComponent = getByTestId('App');
  expect(AppComponent).toBeInTheDocument();

});

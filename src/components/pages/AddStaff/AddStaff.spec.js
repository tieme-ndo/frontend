import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddStaff from './AddStaff';

it('renders without crashing', () => {
  const { getByTestId } = render(<AddStaff />);
  const usernameField = getByTestId('username-field');
  expect(usernameField).toBeInTheDocument();
  const passwordField = getByTestId('password-field');
  expect(passwordField).toBeInTheDocument();
  const confirmPasswordField = getByTestId('confirm-password-field');
  expect(confirmPasswordField).toBeInTheDocument();
  const adminCheckbox = getByTestId('admin-checkbox');
  expect(adminCheckbox).toBeInTheDocument();
});

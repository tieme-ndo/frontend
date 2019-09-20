import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PasswordReset from './PasswordReset';

// mock localStorage so the HOC enables entry to PasswordReset component
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
  const { getByTestId, getByPlaceholderText } = render(
    <Router>
      <PasswordReset />
    </Router>
  );

  const currentPasswordField = getByPlaceholderText('Current Password');
  expect(currentPasswordField).toBeInTheDocument();

  const newPasswordField = getByPlaceholderText('New Password');
  expect(newPasswordField).toBeInTheDocument();

  const passwordConfirm = getByTestId('new-password-confirm');
  expect(passwordConfirm).toBeInTheDocument();

  const resetPwBtn = getByTestId('reset-pw-btn');
  expect(resetPwBtn).toBeInTheDocument();

  const cancelResetPwBtn = getByTestId('cancel-reset-pw-btn');
  expect(cancelResetPwBtn).toBeInTheDocument();
});

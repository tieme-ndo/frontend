import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Login from '../Login';

describe('Login test suite', () => {
  const setUser = jest.fn();

  const fakeUser = {
    username: 'fake',
    password: '30009202'
  };

  it('should render without crashing', () => {
    const { container } = render(<Login setUser={setUser} />);
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('test Login', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Login setUser={setUser} />
    );

    const usernameNode = getByPlaceholderText('Username');
    const passwordNode = getByPlaceholderText('Password');

    const submitButtonNode = getByText('Login');

    usernameNode.value = fakeUser.username;
    passwordNode.value = fakeUser.password;

    fireEvent.submit(getByText('Login'), 'submit');

    // expect(setUser).toHaveBeenCalledTimes(1);
    expect(submitButtonNode.type).toBe('submit');
  });
});

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Login from './Login';

describe('Login test suite', () => {
  it('Should render without crashing', () => {
    const wrapper = rtl.render(<Login />);
    console.log(wrapper.debug());
  });
});

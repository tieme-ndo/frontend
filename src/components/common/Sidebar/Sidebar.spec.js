/** @format */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from './Sidebar';

const edits = [
  {
    date: '2019-09-12T14:38:31.469Z',
    _id: '5d7a5879556581e67ca16b17',
    farmer_id: '5d70d9119d576400174ae87a',
    farmer_name: 'David Hehe!',
    change_requested_by: 'NonAdminTest',
    __v: 0
  }
];

it('renders without crashing', () => {
  const { getByTestId } = render(
    <Router>
      <Sidebar edits={edits} />
    </Router>
  );
  const SidebarComponent = getByTestId('sidebar-component');
  expect(SidebarComponent).toBeInTheDocument();
});

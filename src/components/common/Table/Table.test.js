/** @format */

import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StyledTable from './Table';
const columns = [
  {
    Header: ' ',
    columns: [
      {
        Header: 'Test 1',
        accessor: 'test1',
      },
      {
        Header: 'Test 2',
        accessor: 'test2',
      },
    ],
  },
];

const data = [
  {},
  {
    test1: <span data-testid="test1">Data</span>,
    test2: <span data-testid="test2">Data</span>,
  },
];
it('renders without crashing', () => {
  const {getByTestId} = render(<StyledTable columns={columns} data={data} />);
  const TableComponent = getByTestId('Table-test');
  expect(TableComponent).toBeInTheDocument();
  expect(document.querySelector('[data-testid="Table-test-header"]')).toBeInTheDocument();
});

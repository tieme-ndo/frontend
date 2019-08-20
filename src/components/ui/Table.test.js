import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from './Table';

const columns = [
  {
    Header: ' ',
    columns: [
      {
        Header: 'Test 1',
        accessor: 'test1'
      },
      {
        Header: 'Test 2',
        accessor: 'test2'
      }
    ]
  }
];

const data = [
  {
    test1: 'Data',
    test2: 'Data'
  }
];

it('renders without crashing', () => {
  const { getByTestId } = render(<Table columns={columns} data={data} />);
  const TableComponent = getByTestId('Table-test');
  expect(TableComponent).toBeInTheDocument();
});

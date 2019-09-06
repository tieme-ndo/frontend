import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UpdateFarmer from './UpdateFarmer.js';

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
  const { getByDisplayValue, getAllByDisplayValue } = render(
    <Router>
      <UpdateFarmer />
    </Router>
  );
  const allFields = getAllByDisplayValue;
  expect(allFields).length().toBe(33)

});

// it('renders menu and form', () => {
//   const {
//     getAllByText,
//     getAllByPlaceholderText,
//     getAllByDisplayValue,
//     getByText
//   } = render(<AddFarmer />);

//   expect(getAllByText('Next').length).toBe(3);
//   expect(getByText('Add Farmer')).toBeInTheDocument();
//   expect(getAllByDisplayValue('').length).toBe(33);
//   expect(getAllByText('Please Select').length).toBe(10);
//   expect(getByText('1. Personal')).toBeInTheDocument();
//   expect(getByText('2. Family')).toBeInTheDocument();
//   expect(getByText('3. Guarantor')).toBeInTheDocument();
//   expect(getByText('4. Farm')).toBeInTheDocument();
// });



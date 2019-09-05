import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddFarmer from './AddFarmer';

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
  const {
    container,
    getAllByText,
    getAllByPlaceholderText,
    getAllByDisplayValue,
    getByTestId,
    getByText
  } = render(<AddFarmer />);

  expect(getByTestId('test-addfarmer-component')).toBeInTheDocument();
});

it('renders menu and form', () => {
  const {
    getAllByText,
    getAllByPlaceholderText,
    getAllByDisplayValue,
    getByText
  } = render(<AddFarmer />);

  expect(getAllByText('Next').length).toBe(3);
  expect(getByText('Add Farmer')).toBeInTheDocument();
  expect(getAllByDisplayValue('').length).toBe(33);
  expect(getAllByText('Please Select').length).toBe(10);
  expect(getByText('1. Personal')).toBeInTheDocument();
  expect(getByText('2. Family')).toBeInTheDocument();
  expect(getByText('3. Guarantor')).toBeInTheDocument();
  expect(getByText('4. Farm')).toBeInTheDocument();
});

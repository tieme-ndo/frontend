import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayFarmer from './DisplayFarmer';

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

const farmers = [
  {
    _id: 'aksgjkasjgkasga',
    personalInfo: {
      first_name: 'John',
      middle_name: 'Smith',
      surname: 'Thing',
      image_url: ''
    }
  }
];

const getFarmer = farmerId => {
  return farmers.find(farmer => farmer._id === farmerId);
};

const match = { params: { id: 'aksgjkasjgkasga' } };

it('renders without crashing', () => {
  localStorage.setItem('tokenTiemeNdo', 'akgjsakgjaslgjslgkjaslgjalkgja');

  const { getByTestId } = render(
    <Router>
      <DisplayFarmer getFarmer={getFarmer} farmers={farmers} match={match} />
    </Router>
  );

  const DisplayFarmerComponent = getByTestId('farmer-display-test');
  expect(DisplayFarmerComponent).toBeInTheDocument();
});

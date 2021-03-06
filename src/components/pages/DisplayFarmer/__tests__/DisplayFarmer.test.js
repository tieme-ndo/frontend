import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayFarmer from '../DisplayFarmer';

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
    },
    familyInfo:{
      family_size:5,
      number_of_dependant:3,
      highest_level_of_dependent:"Tertiary",
      family_income_per_month:"More than GHC 1,000"}
  }
];

const getFarmer = farmerId => {
  return farmers.find(farmer => farmer._id === farmerId);
};

const match = { params: { id: 'aksgjkasjgkasga' } };

it('renders without crashing', () => {
  localStorage.setItem('tokenTiemeNdo', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhdm9sIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY4MTk3NjU3LCJleHAiOjE1Njg4MDI0NTd9.vfuvsBUI4c7YRarmbRJ5LD98dWcVF2CLE-w5SptOZGs');

  const { getByTestId } = render(
    <Router>
      <DisplayFarmer farmer={farmers[0]} match={match} />
    </Router>
  );

  const DisplayFarmerComponent = getByTestId('farmer-display-test');
  expect(DisplayFarmerComponent).toBeInTheDocument();

  // It renders the personal tab by default
  const PersonalTabComponent = getByTestId('personal-tab-render-test');
  expect(PersonalTabComponent).toBeInTheDocument();
});

it('renders the respective tab when clicking tab link', () => {
  localStorage.setItem('tokenTiemeNdo', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhdm9sIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY4MTk3NjU3LCJleHAiOjE1Njg4MDI0NTd9.vfuvsBUI4c7YRarmbRJ5LD98dWcVF2CLE-w5SptOZGs');

  const { getByTestId } = render(
    <Router>
      <DisplayFarmer farmer={farmers[0]} match={match} />
    </Router>
  );

  fireEvent.click(getByTestId('family-tab-click-test'))
  const DisplayFarmerComponent = getByTestId('family-tab-render-test');
  expect(DisplayFarmerComponent).toBeInTheDocument();
});

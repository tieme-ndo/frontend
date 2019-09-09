import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UpdateFarmer from './UpdateFarmer.js';

const farmerMock =
{
  "_id": "5d66eea035ddba263bd172a5", "personalInfo": { "title": "Miss", "surname": "Majaja", "first_name": "Moses", "middle_name": "John", "marital_status": "Single", "gender": "Male", "place_of_birth": "Accra", "date_of_birth": "1995-10-22T00:00:00.000Z", "id_type": "NHIS", "id_number": 56789076543, "district": "Kumasi", "region": "Kumasi Central", "community_name": "Loboto", "house_name": "Ikee", "house_number": 12, "nearest_landmark": "Bustop", "Phone_1": 8765456789, "Phone_2": 678976546, "education_level": "Tertiary", "occupation": "Farmer", "expected_income_per_month": "501 to GHC 1,000", "major_source_of_income.name": "Crops", "major_source_of_income.amount": 500, "minor_source_of_income.name": "Crops", "minor_source_of_income.amount": 50 }, "farmInfo": { "number_of_acres": 3, "location_of_farm": "7, Basi, Accra", "farm_nearest_landmark": "CBN", "crops_cultivated": ["Yam", "Cassava"], "animals_or_birds": ["Goat"] }, "archived": true, "familyInfo": { "family_size": 3, "number_of_dependant": 2, "highest_level_of_dependent": "Tertiary", "family_income_per_month": "501 to GHC 1,000" }, "guarantor": { "grt_title": "Mrs", "grt_surname": "Monjo", "grt_first_name": "Bassi", "grt_gender": "Male", "grt_relations": "Mentor", "grt_residential_address": "10, Accra", "grt_occupation": "Sales", "grt_phone": 45678987654, "grt_district": "Guru", "grt_region": "Balaa" }, "staff": "James", "__v": 0
}


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
  const { getByTestId } = render(
    <Router>
      <UpdateFarmer location={{ state: { farmer: farmerMock } }} />
    </Router>
  );
  const editFarmerComponent = getByTestId('edit-farmer-component');
  expect(editFarmerComponent).toBeInTheDocument();
});



// 1. Test if each component renders



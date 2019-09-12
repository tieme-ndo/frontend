import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LeftDisplay from '../LeftDisplay';

const testFarmerWithoutImg = {
  personalInfo: {
    first_name: 'John',
    middle_name: 'Smith',
    surname: 'Thing',
    image_url: ''
  }
};

const testFarmerWithImg = {
  personalInfo: {
    first_name: 'John',
    middle_name: 'Smith',
    surname: 'Thing',
    image_url:
      'https://res.cloudinary.com/tiemendo/image/upload/v1567674036/farmers_images/p72mzdynr491ah3bfohl.jpg'
  }
};

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
  localStorage.setItem(
    'tokenTiemeNdo',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhdm9sIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY4MTk3NjU3LCJleHAiOjE1Njg4MDI0NTd9.vfuvsBUI4c7YRarmbRJ5LD98dWcVF2CLE-w5SptOZGs'
  );
  const { getByTestId } = render(
    <Router>
      <LeftDisplay farmer={testFarmerWithoutImg} />
    </Router>
  );
  const LeftDisplayComponent = getByTestId('left-display-render-test');
  expect(LeftDisplayComponent).toBeInTheDocument();
});

it('renders an image when a source is passed through props ', () => {
  localStorage.setItem('tokenTiemeNdo', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhdm9sIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY4MTk3NjU3LCJleHAiOjE1Njg4MDI0NTd9.vfuvsBUI4c7YRarmbRJ5LD98dWcVF2CLE-w5SptOZGs');
  const { getByTestId } = render(
    <Router>
      <LeftDisplay farmer={testFarmerWithImg} />
    </Router>
  );
  const LeftDisplayComponent = getByTestId('left-display-image-test');
  expect(LeftDisplayComponent).toBeInTheDocument();
});

it('renders an error message when no image source is passed through props', () => {
  localStorage.setItem('tokenTiemeNdo', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhdm9sIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY4MTk3NjU3LCJleHAiOjE1Njg4MDI0NTd9.vfuvsBUI4c7YRarmbRJ5LD98dWcVF2CLE-w5SptOZGs');
  const { getByTestId } = render(
    <Router>
      <LeftDisplay farmer={testFarmerWithoutImg} />
    </Router>
  );
  const LeftDisplayComponent = getByTestId('left-display-placeholder-test');
  expect(LeftDisplayComponent).toBeInTheDocument();
});

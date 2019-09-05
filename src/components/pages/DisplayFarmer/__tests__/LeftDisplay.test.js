import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LeftDisplay from '../LeftDisplay';

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
      <LeftDisplay farmer={{personalInfo: {
        first_name: "John",
        middle_name: "Smith",
        surname: "Thing",
        image_url: "",
      }}}/>
    </Router>
  )
  const LeftDisplayComponent = getByTestId("left-display-render-test")
  expect(LeftDisplayComponent).toBeInTheDocument();
});

it('renders an image when a source is passed through props ', () => {
  localStorage.setItem('tokenTiemeNdo', 'akgjsakgjaslgjslgkjaslgjalkgja');
  const { getByTestId } = render(
    <Router>
      <LeftDisplay farmer={{personalInfo: {
        first_name: "John",
        middle_name: "Smith",
        surname: "Thing",
        image_url: "https://res.cloudinary.com/tiemendo/image/upload/v1567674036/farmers_images/p72mzdynr491ah3bfohl.jpg",
      }}}/>
    </Router>
  )
  const LeftDisplayComponent = getByTestId("left-display-image-test")
  expect(LeftDisplayComponent).toBeInTheDocument();
});

it('renders an error message when no image source is passed through props', () => {
  localStorage.setItem('tokenTiemeNdo', 'akgjsakgjaslgjslgkjaslgjalkgja');
  const { getByTestId } = render(
    <Router>
      <LeftDisplay farmer={{personalInfo: {
        first_name: "John",
        middle_name: "Smith",
        surname: "Thing",
        image_url: "",
      }}}/>
    </Router>
  )
  const LeftDisplayComponent = getByTestId("left-display-placeholder-test")
  expect(LeftDisplayComponent).toBeInTheDocument();
});

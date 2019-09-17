import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditCollection from './EditCollection';

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

const historyMock = { push: jest.fn() };

const match = { params: { id: 'aksgjkasjgkasga' } };

it('renders without crashing', () => {
    
  localStorage.setItem(
    'tokenTiemeNdo',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhdm9sIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY4MTk3NjU3LCJleHAiOjE1Njg4MDI0NTd9.vfuvsBUI4c7YRarmbRJ5LD98dWcVF2CLE-w5SptOZGs'
  );
  const { getByTestId } = render(
    <Router>
      <EditCollection match={match} history={historyMock} />
    </Router>
  );
  const EditCollectionComponent = getByTestId('edit-collection-component');
  expect(EditCollectionComponent).toBeInTheDocument();
});

it('aprrove request changes', () => {
  const { getByText } = render(
    <EditCollection match={match} history={historyMock} />
  );
  const acceptButtonNode = getByText('Accept');
  fireEvent.click(getByText('Accept'), 'submit');
  expect(acceptButtonNode.type).toBe('submit');
});

it('reject request changes', async () => {
  const { getByText } = render(
    <EditCollection match={match} history={historyMock} />
  );
  const rejectButtonNode = getByText('Reject');
  fireEvent.click(getByText('Reject'), 'submit');
  expect(rejectButtonNode.type).toBe('submit');
});

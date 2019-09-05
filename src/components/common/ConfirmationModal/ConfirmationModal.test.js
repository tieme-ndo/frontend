import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConfirmationModal from './ConfirmationModal';

const TriggerElement = () => {
  return <button data-testid="test-trigger"></button>;
};

const title = 'Is this real life?';

const message = 'This cannot be undone';

const action = () => {};

it('renders the trigger button', () => {
  const { getByTestId } = render(
    <ConfirmationModal
      TriggerElement={TriggerElement}
      title={title}
      message={message}
      action={action}
    />
  );
  const Button = getByTestId('test-trigger');
  expect(Button).toBeInTheDocument();
});

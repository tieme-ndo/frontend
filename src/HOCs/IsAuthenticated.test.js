import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IsAuthenticated from './IsAuthenticated';

it('renders without crashing', () => {
  const component = <div data-testid="WrappedComponent" >John</div>
  const wrapper = render(IsAuthenticated(component))
  console.log(wrapper)
  
});

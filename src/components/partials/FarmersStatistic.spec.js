import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FarmersStatistic from './FarmersStatistic';

describe('Login test suite', () => {
  const props = {
    totalNumOfFarmers: 4,
    totalNumOfMaleFarmers: 3,
    totalNumOfFemaleFarmers: 0,
    farmersAgeGreaterThanOrEqualThirtyFive: 0,
    farmersAgeLesserThanThirtyFive: 0
  };

  it('should render without crashing', () => {
    render(<FarmersStatistic {...props} />);
  });
});

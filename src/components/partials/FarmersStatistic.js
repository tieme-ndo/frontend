import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

import {
  StatisticsContainer,
  MajorStatistic,
  MajorStatContainer,
  MinorStatistic,
  MinorStatContainer
} from './statisticsStyles';

const FarmersStatistic = ({ farmersStatistic }) => {
  if (farmersStatistic) {
    if (Object.keys(farmersStatistic).length === 0) {
      return (
        <Segment secondary style={{ textAlign: 'center' }}>
          Failed to retreive farmer statistics
        </Segment>
      );
    }
    
    return (
      <StatisticsContainer horizontal>
        <MajorStatContainer>
          <MajorStatistic
            label="Total Farmers"
            value={`${farmersStatistic.totalNumOfFarmers || 0}`}
          />
        </MajorStatContainer>

        <MinorStatContainer>
          <MinorStatistic
            label="Female"
            value={farmersStatistic.totalNumOfFemaleFarmers || 0}
          />
          <MinorStatistic
            label="Male"
            value={farmersStatistic.totalNumOfMaleFarmers || 0}
          />
          <MinorStatistic
            label="Other"
            value={farmersStatistic.totalNumOfOtherFarmers || 0}
          />
        </MinorStatContainer>

        <MinorStatContainer>
          <MinorStatistic
            label="Above 35 Years Old"
            value={farmersStatistic.farmersAgeGreaterThanOrEqualThirtyFive}
          />
          <MinorStatistic
            label="Below 35 Years Old"
            value={farmersStatistic.farmersAgeLesserThanThirtyFive}
          />
        </MinorStatContainer>
      </StatisticsContainer>
    );
  }

  return (
    <Segment style={{ marginBottom: '50px', boxShadow: 'none', border: '0', zIndex: '1' }}>
      <Dimmer active inverted>
        <Loader inverted>Loading farmers statistic</Loader>
      </Dimmer>
    </Segment>
  );
};

export default FarmersStatistic;

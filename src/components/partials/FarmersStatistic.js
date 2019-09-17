import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import {
  MajorStatistic,
  MajorStatContainer,
  MinorStatistic,
  MinorStatContainer
} from './StyledStatistics';

const FarmersStatistic = props => {
  return (
    <Container style={{ marginBottom: '40px' }}>
      <Segment.Group horizontal style={{ padding: '25px 0' }}>
        <MajorStatContainer>
          <MajorStatistic
            label="Total Farmers"
            value={`${props.totalNumOfFarmers}`}
          />
        </MajorStatContainer>

        <MinorStatContainer>
          <MinorStatistic
            label="Female"
            value={props.totalNumOfFemaleFarmers}
          />
          <MinorStatistic
            label="Male"
            value={props.totalNumOfMaleFarmers}
          />
          <MinorStatistic
            label="Other"
            value={props.totalNumOfMaleFarmers}
          />
        </MinorStatContainer>

        <MinorStatContainer>
          <MinorStatistic
            label="Above 35 Years Old"
            value={props.farmersAgeGreaterThanOrEqualThirtyFive}
          />
          <MinorStatistic
            label="Below 35 Years Old"
            value={props.totalNumOfMaleFarmers}
          />
          </MinorStatContainer>
      </Segment.Group>
    </Container>
  );
};

export default FarmersStatistic;

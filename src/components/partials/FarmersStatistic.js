import React from 'react';
import { Statistic, Container, Segment } from 'semantic-ui-react';

const FarmersStatistic = props => {
  return (
    <Container style={{ marginBottom: '40px' }}>
      <Segment.Group horizontal style={{ fontWeight: 'normal' }}>
        <Segment textAlign="center">
          <Statistic
            label="Total Farmers"
            value={`${props.totalNumOfFarmers}`}
            color="teal"
            size="small"
          />
        </Segment>
        <Segment textAlign="center">
          <Statistic color="blue" size="tiny">
            <Statistic.Value>{props.totalNumOfFemaleFarmers}</Statistic.Value>
            <Statistic.Label style={{ fontWeight: 'normal' }}>
              Female
            </Statistic.Label>
          </Statistic>

          <Statistic color="blue" size="tiny">
            <Statistic.Value>{props.totalNumOfMaleFarmers}</Statistic.Value>
            <Statistic.Label style={{ fontWeight: 'normal' }}>
              Male
            </Statistic.Label>
          </Statistic>

          <Statistic color="blue" size="tiny">
            <Statistic.Value>0</Statistic.Value>
            <Statistic.Label style={{ fontWeight: 'normal' }}>
              Other
            </Statistic.Label>
          </Statistic>
        </Segment>

        <Segment textAlign="center">
          <Statistic color="blue" size="tiny">
            <Statistic.Value>
              {props.farmersAgeGreaterThanOrEqualThirtyFive}
            </Statistic.Value>
            <Statistic.Label style={{ fontWeight: 'normal' }}>
              Above 35 Years Old
            </Statistic.Label>
          </Statistic>

          <Statistic color="blue" size="tiny">
            <Statistic.Value>
              {props.farmersAgeLesserThanThirtyFive}
            </Statistic.Value>
            <Statistic.Label style={{ fontWeight: 'normal' }}>
              Below 35 Years Old
            </Statistic.Label>
          </Statistic>
        </Segment>
      </Segment.Group>
    </Container>
  );
};

export default FarmersStatistic;

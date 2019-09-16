import React from 'react';
import { Statistic, Container, Segment } from 'semantic-ui-react';

const FarmersStatistic = props => {
  return (
    <Container style={{ marginBottom: '40px' }}>
      <Segment.Group horizontal>
        <Segment textAlign="center" style={{ padding: '14px 0 0 0' }}>
          <Statistic
            label="Total Farmers"
            value={`${props.totalNumOfFarmers}`}
            color="teal"
            size="tiny"
          />
        </Segment>

        <Segment textAlign="center" style={{ padding: '14px 0 0 0' }}>
          <Statistic color="green" size="tiny">
            <Statistic.Value>{props.totalNumOfFemaleFarmers}</Statistic.Value>
            <Statistic.Label>Female</Statistic.Label>
          </Statistic>

          <Statistic color="green" size="tiny">
            <Statistic.Value>{props.totalNumOfMaleFarmers}</Statistic.Value>
            <Statistic.Label>Male</Statistic.Label>
          </Statistic>

          <Statistic color="green" size="tiny">
            <Statistic.Value>0</Statistic.Value>
            <Statistic.Label>Other</Statistic.Label>
          </Statistic>
        </Segment>

        <Segment textAlign="center" style={{ padding: '14px 0 0 0' }}>
          <Statistic color="green" size="tiny">
            <Statistic.Value>
              {props.farmersAgeGreaterThanOrEqualThirtyFive}
            </Statistic.Value>
            <Statistic.Label>Above 35 Years Old</Statistic.Label>
          </Statistic>

          <Statistic color="green" size="tiny">
            <Statistic.Value>
              {props.farmersAgeLesserThanThirtyFive}
            </Statistic.Value>
            <Statistic.Label>Below 35 Years Old</Statistic.Label>
          </Statistic>
        </Segment>
      </Segment.Group>
    </Container>
  );
};

export default FarmersStatistic;

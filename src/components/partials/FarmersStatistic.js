import React, { useState } from 'react';
import {
  StatisticsContainer,
  MajorStatistic,
  MajorStatContainer,
  MinorStatistic,
  MinorStatContainer
} from './statisticsStyles';

const FarmersStatistic = props => {
  return (
    <StatisticsContainer horizontal>
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
    </StatisticsContainer>
  )
};

export default FarmersStatistic;

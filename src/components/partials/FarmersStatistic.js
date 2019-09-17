import React from 'react';
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
          value={`${props.totalNumOfFarmers || 0}`}
        />
      </MajorStatContainer>

      <MinorStatContainer>
        <MinorStatistic
          label="Female"
          value={props.totalNumOfFemaleFarmers || 0}
        />
        <MinorStatistic
          label="Male"
          value={props.totalNumOfMaleFarmers || 0}
        />
        <MinorStatistic
          label="Other"
          // TODO: implement "other" gender on the backend and pass value as props
          value={props.totalNumOfOtherFarmers || 0}
        />
      </MinorStatContainer>

      <MinorStatContainer>
        <MinorStatistic
          label="Above 35 Years Old"
          value={props.farmersAgeGreaterThanOrEqualThirtyFive}
        />
        <MinorStatistic
          label="Below 35 Years Old"
          value={props.farmersAgeLesserThanThirtyFive}
        />
        </MinorStatContainer>
    </StatisticsContainer>
  )
};

export default FarmersStatistic;

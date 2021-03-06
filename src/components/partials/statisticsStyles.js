import React from 'react';
import styled from 'styled-components';
import { Statistic, Segment } from 'semantic-ui-react';

export const StatisticsContainer = styled(Segment.Group)`
  &.ui.horizontal.segments {
    padding: 25px 0;
    margin-bottom: 40px;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    & > .segment {
      @media (max-width: 600px) {
        padding: 14px;
        align-items: center;
        border: unset;
        border-bottom: 1px solid rgba(34,36,38,.15);

        &:last-child {
          border: none;
        }
      }
    }
  }
`;

export const MinorStatContainer = styled(Segment)`
  &.ui.segment {
    padding: 14px 0 14px 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const MajorStatContainer = styled(Segment)`
  &.ui.segment {
    padding: 14px 0;
    margin: auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export function MinorStatistic({ size = 'mini', color = 'teal', ...props }) {
  const MinorStatistic = styled(Statistic)`
    &.ui.statistic + .ui.statistic {
      margin: unset;
      margin-bottom: 6px;
    }

    &.ui.statistic {
      margin-bottom: 6px;
    }

    &.ui.statistic > .value {
      font-weight: 900;
    }

    &.ui.statistic > .label {
      text-transform: unset;
      font-weight: 400;
      margin: 0 0 0 0.5em;
    }
  `;

  return <MinorStatistic {...props} size={size} color={color} horizontal />;
}

export function MajorStatistic({ size = 'small', color = 'teal', ...props }) {
  const MajorStatistic = styled(Statistic)`
    &.ui.statistic {
      margin: 0 auto;
    }

    &.ui.statistic > .value {
      margin-bottom: 4px;
    }

    &.ui.statistic > .label {
      text-transform: unset;
      font-weight: 400;
      margin: 0 0 0 0.5em;
    }
  `;

  return <MajorStatistic size={size} color={color} {...props} />;
}


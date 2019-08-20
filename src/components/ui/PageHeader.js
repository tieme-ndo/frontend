import React from 'react';
import styled from 'styled-components';

const PageHeader = props => {
  const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const { leftElement, rightElement } = props;

  return (
    <StyledHeader>
      <div className="left-element">
        {leftElement}
      </div>
      <div className="right-element">
        {rightElement}
      </div>
    </StyledHeader>
  );
};

export default PageHeader;

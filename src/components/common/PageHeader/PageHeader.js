import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageHeader = props => {
  const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
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

PageHeader.propTypes = {
  leftElement: PropTypes.element.isRequired,
  rightElement: PropTypes.element
};

export default PageHeader;

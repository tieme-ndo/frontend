import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DashboardHeader = props => {
  const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 3rem 0 1rem;
  `;

  const { leftElement, rightElement } = props;

  return (
    <StyledHeader>
      <div className="left-element">{leftElement}</div>
      <div className="right-element">{rightElement}</div>
    </StyledHeader>
  );
};

DashboardHeader.propTypes = {
  leftElement: PropTypes.element.isRequired,
  rightElement: PropTypes.element
};

export default DashboardHeader;

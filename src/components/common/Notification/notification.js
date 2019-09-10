import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  color: palevioletred;
  z-index: 999;
  transition: top 0.5s ease;
`


const Notification = ({ user }) => {
  return (
    <Container>
      {
        user && user.isAdmin ? (
          <i className="fa fa-bell fa-2x" style={{ padding: '12px', color: 'palevioletred' }}></i>
        ) : null
      }
    </Container>
  )
}

export default Notification;

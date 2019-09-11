import React from 'react';
import styled from 'styled-components';

import { Button, Menu, Sidebar } from 'semantic-ui-react';

const Span = styled.span`
  cursor: pointer;
  padding-top: 10px;
  .red {
    color: red;
  }
  .grey {
    color: grey;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  strike {
    color: red;
  }
  span {
    color: green;
  }
  .cards:nth-child(odd) {
    background-color: #cccccc;
    padding: 5px;
  }
  .cards:nth-child(even) {
    background-color: white;
  }
`;

const EditModal = ({ visible }) => {
  return (
    <Span>
      {' '}
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="right"
        icon="labeled"
        dimmed={'dimmed'}
        vertical
        visible={visible}
        width="wide"
        style={{ top: '57px' }}
      >
        <Div>
          <div className="cards">
            {' '}
            <p>
              <b>Staff name</b> updated <b>farmer record</b>
            </p>
            <b>Changes</b>
            <p>
              <b>Property:</b> <strike>Previous value</strike>{' '}
              <span>Updated value</span>
            </p>
            <p>
              <b>Property:</b> <strike>Previous value</strike>{' '}
              <span>Updated value</span>
            </p>
            <p>
              <b>Property:</b> <strike>Previous value</strike>{' '}
              <span>Updated value</span>
            </p>
            <Button style={{ color: 'white', backgroundColor: 'green' }}>
              Accept
            </Button>
            <Button
              style={{
                color: 'white',
                backgroundColor: 'red',
                marginBottom: '16px'
              }}
            >
              Reject
            </Button>
          </div>
          <div className="cards">
            {' '}
            <p>
              <b>Staff name</b> updated <b>farmer record</b>
            </p>
            <b>Changes</b>
            <p>
              <b>Property:</b> <strike>Previous value</strike> Updated value
            </p>
            <p>
              <b>Property:</b> <strike>Previous value</strike> Updated value
            </p>
            <p>
              <b>Property:</b> <strike>Previous value</strike> Updated value
            </p>
            <Button style={{ color: 'white', backgroundColor: 'green' }}>
              Accept
            </Button>
            <Button
              style={{
                color: 'white',
                backgroundColor: 'red',
                marginBottom: '16px'
              }}
            >
              Reject
            </Button>
          </div>
          <div className="cards">
            <p>
              <b>Staff name</b> updated <b>farmer record</b>
            </p>
            <b>Changes</b>
            <p>
              <b>Property:</b> <strike>Previous value</strike> Updated value
            </p>
            <p>
              <b>Property:</b> <strike>Previous value</strike> Updated value
            </p>
            <p>
              <b>Property:</b> <strike>Previous value</strike> Updated value
            </p>
            <Button style={{ color: 'white', backgroundColor: 'green' }}>
              Accept
            </Button>
            <Button
              style={{
                color: 'white',
                backgroundColor: 'red',
                marginBottom: '16px'
              }}
            >
              Reject
            </Button>
          </div>
          <div className="cards">
            <p>
              <b>Staff name</b> updated <b>farmer record</b>
            </p>
            <b>Changes</b>
            <p>
              <b>Property:</b> <strike>Previous value</strike> Updated value
            </p>
            <p>
              <b>Property:</b> <strike>Previous value</strike> Updated value
            </p>
            <p>
              <b>Property:</b> <strike>Previous value</strike> Updated value
            </p>
            <Button style={{ color: 'white', backgroundColor: 'green' }}>
              Accept
            </Button>
            <Button
              style={{
                color: 'white',
                backgroundColor: 'red',
                marginBottom: '16px'
              }}
            >
              Reject
            </Button>
          </div>
        </Div>
      </Sidebar>{' '}
    </Span>
  );
};

export default EditModal;

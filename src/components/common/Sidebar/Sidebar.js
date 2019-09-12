import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button, Menu, Sidebar } from 'semantic-ui-react';

const Span = styled.span`
  cursor: pointer;
  padding-top: 10px;
  font-size: 12px;
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

  .cards {
    padding: 5px;
  }
  .cards {
    background-color: #e8e8e8ab;
    &:hover {
      background-color: teal;
      color: white;
    }
  }
  .cards:nth-child(even) {
    background-color: white;
    &:hover {
      background-color: teal;
      color: white;
    }
  }
`;

const SidebarComponent = ({ visible }) => {
  const [show, setShow] = useState(visible);
  //Not woeking
  const clickHandler = () => {
    setShow(false);
  };

  console.log(show)

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
        visible={visible }
        width="wide"
        style={{ top: '57px', paddingBottom: '50px' }}
      >
        <Div>
          <Link to="/edit-collection/95995/">
            <div className="cards" onClick={clickHandler}>
              <p>
                <b>Staff name</b> updated <b>farmer record</b> on Sept 13
              </p>
            </div>
          </Link>
          <Link to="/edit-collection/95995ss">
            <div className="cards">
              <p>
                <b>Staff name</b> updated <b>farmer record</b> on Sept 13
              </p>
            </div>
          </Link>
          <Link to="/edit-collection/95995">
            <div className="cards">
              <p>
                <b>Staff name</b> updated <b>farmer record</b> on Sept 13
              </p>
            </div>
          </Link>
          <Link to="/edit-collection/959951q">
            <div className="cards">
              <p>
                <b>Staff name</b> updated <b>farmer record</b> on Sept 13
              </p>
            </div>
          </Link>
        </Div>
      </Sidebar>{' '}
    </Span>
  );
};

export default SidebarComponent;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { Menu, Sidebar } from 'semantic-ui-react';

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

const SidebarComponent = ({ visible, edits }) => {
  const [hidden, setHidden] = useState(false);

  //Not wokking
  const clickHandler = e => {
    setHidden(true);
  };

  return (
    <Span hidden={hidden}>
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
        style={{ top: '57px', paddingBottom: '50px' }}
      >
        <Div>
          {edits && edits.length ? (
            edits.map(edit => (
              <Link to={`/edit-collection/${edit._id}`} key={edit._id}>
                <div className="cards" onClick={clickHandler}>
                  <p>
                    <b>{edit.change_requested_by}</b> updated{' '}
                    <b>{edit.farmer_name}'s record</b> on{' '}
                    {moment(edit.date).format('LLLL')}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p>No change requests has been made</p>
          )}
        </Div>
      </Sidebar>
    </Span>
  );
};

export default SidebarComponent;

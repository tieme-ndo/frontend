/** @format */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { Menu, Sidebar, Segment } from 'semantic-ui-react';

const SidebarComponent = ({ visible, edits, closeSideBar }) => {
  return (
    <Span data-testid="sidebar-component">
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
        style={{
          top: '57px'
          //   maxHeight: '400px'
        }}
      >
        <Div>
          {edits && edits.length ? (
            edits.map((edit, idx) => (
              <Link to={`/edit-collection/${edit._id}`} key={edit._id}>
                <Segment vertical className="cards" onClick={closeSideBar}>
                  <p>
                    <b>{edit.change_requested_by}</b> updated{' '}
                    <b>{edit.farmer_name}'s record</b> on{' '}
                    {moment(edit.date).format('LLLL')}
                  </p>
                </Segment>
              </Link>
            ))
          ) : (
            <p>No change requests have been made</p>
          )}
        </Div>
      </Sidebar>
    </Span>
  );
};

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
    background-color: white;
    color: black;
    &:hover {
      color: teal;
    }
  }
`;

export default SidebarComponent;

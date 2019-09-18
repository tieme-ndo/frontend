/** @format */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { Menu, Sidebar, List } from 'semantic-ui-react';

const SidebarComponent = ({ visible, edits, closeSideBar }) => {
  return (
    <Sidebar
      data-testid="sidebar-component"
      as={Menu}
      animation="overlay"
      direction="right"
      icon="labeled"
      dimmed="dimmed"
      visible={visible}
      width="very wide"
      style={{
        top: '57px',
        maxWidth: '100%',
        // Statistics loader is set at z-index of 1000 by default! X(
        zIndex: '1001'
      }}
    >
      <NotificationsList divided>
        {edits && edits.length ? (
          edits.map(edit => (
            <List.Item
              onClick={closeSideBar}
              key={edit._id}
              // Overwrite padding coming from parent Menu component
              // Not working using specificity within styled component styles
              style={{ padding: '23px 14px 23px 23px' }}
            >
              <Link to={`/edit-collection/${edit._id}`}>
                <List.Content>
                  <List.Header>
                    <b>{edit.change_requested_by}</b> updated{' '}
                    <b>{edit.farmer_name}</b>'s record
                  </List.Header>
                  <List.Description>
                    on {moment(edit.date).format('LLLL')}
                  </List.Description>
                </List.Content>
              </Link>
            </List.Item>
          ))
        ) : (
          <NoChangeRequestsP>
            No change requests have been made
          </NoChangeRequestsP>
        )}
      </NotificationsList>
    </Sidebar>
  );
};

const NotificationsList = styled(List)`
  width: 100%;

  &.ui.divided.list > .item {
    width: 100%;
    text-align: left;
    min-height: 130px;

    &:hover {
      background-color: #eeee;
      transition: background-color 300ms ease-in-out;
    }

    .header {
      font-weight: 400;
      font-size: 20px;
    }

    .description {
      margin-top: 10px;
    }
  }
`;

const NoChangeRequestsP = styled.p`
  line-height: 60px;
  opacity: 0.7;
`;

export default SidebarComponent;

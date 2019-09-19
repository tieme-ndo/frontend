import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../assets/images/tiemendo_logo.jpg';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import Sidebar from '../Sidebar/Sidebar';

const Span = styled.span`
  cursor: pointer;
  .red {
    color: red;
  }
  .grey {
    color: grey;
  }
`;

const PageHeader = ({
  logOut,
  user,
  edits,
  visible,
  closeSideBar,
  toggleSideBar
}) => {
  return (
    <div data-testid="nav-test">
      <Menu
        style={{ borderRadius: '0', margin: '0 0 2rem' }}
        onClick={closeSideBar}
      >
        <Container>
          <Link to="/">
            <Menu.Item>
              <Image style={{ width: '55px' }} src={logo} alt="tiemendo logo" />
            </Menu.Item>
          </Link>

          <Menu.Menu position="right">
            {user && user.isAdmin ? (
              <Menu.Item onClick={toggleSideBar}>
                <Span>
                  <i
                    className={
                      edits && edits.length
                        ? 'fas fa-bell red'
                        : 'fas fa-bell grey'
                    }
                  ></i>
                </Span>
                <Sidebar
                  visible={visible}
                  edits={edits}
                />
              </Menu.Item>
            ) : null}
            <Dropdown
              text="Menu"
              pointing
              className="link item"
              onClick={closeSideBar}
            >
              <Dropdown.Menu>
                <Link to="/">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Link>
                {user && user.isAdmin ? (
                  <Link to="/accounts/new">
                    <Dropdown.Item>
                      <span data-testid="create-new-account-test">
                        Create new account
                      </span>
                    </Dropdown.Item>
                  </Link>
                ) : null}

                <Link to="/reset-password">
                  <Dropdown.Item>Change password</Dropdown.Item>
                </Link>

                <Link to="/">
                  <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default PageHeader;

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

const Header = styled(Menu)`
  &.ui.menu {
    border-radius: 0;
    margin: 0 0 2rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 103;
    box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.15);
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
      <Header
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
              <Menu.Item>
                <Span>
                  <i
                    className={
                      edits && edits.length
                        ? 'fas fa-bell red'
                        : 'fas fa-bell grey'
                    }
                    onClick={toggleSideBar}
                  ></i>
                </Span>
                <Sidebar
                  visible={visible}
                  edits={edits}
                  closeSideBar={closeSideBar}
                />
              </Menu.Item>
            ) : null}
            <Dropdown text="Menu" pointing className="link item">
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
      </Header>
    </div>
  );
};

export default PageHeader;

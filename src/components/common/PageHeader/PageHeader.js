import React, { useState } from 'react';
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

const PageHeader = ({ logOut, user, edits }) => {
  const [visible, setVisible] = useState(false);

  const closeSideBar = () => {
    if (visible) {
      setVisible(!visible);
    }
  };

  const toggleSideBar = () => {
    setVisible(!visible);
  };

  React.useEffect(function setupListener() {
    window.addEventListener('click', closeSideBar);

    return function cleanupListener() {
      window.removeEventListener('click', closeSideBar);
    };
  });

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
      </Menu>
    </div>
  );
};

export default PageHeader;

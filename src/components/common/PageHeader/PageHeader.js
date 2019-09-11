import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../assets/images/tiemendo_logo.jpg';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';

const Span = styled.span`
  .red {
    color: red;
  }
  .grey {
    color: grey;
  }
`;

const PageHeader = ({ logOut, user, edits }) => {
  const changeColor = event => (event.target.style.color = 'grey');

  return (
    <div data-testid="nav-test">
      <Menu style={{ borderRadius: '0', margin: '0 0 2rem' }}>
        <Container>
          <Link to="/">
            <Menu.Item>
              <Image style={{ width: '55px' }} src={logo} alt="tiemendo logo" />
            </Menu.Item>
          </Link>

          <Menu.Menu position="right">
            {user && user.isAdmin ? (
              <Menu.Item>
                <Link to="/">
                  <Span>
                    {' '}
                    <i
                      className={edits ? 'fas fa-bell red' : 'fas fa-bell grey'}
                      onClick={changeColor}
                    ></i>
                  </Span>
                </Link>
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

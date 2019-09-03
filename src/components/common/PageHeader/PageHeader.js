import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/tiemendo_logo.jpg';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';

const PageHeader = ({ logOut, user }) => {
  return (
    <Menu style={{ borderRadius: '0', margin: '0 0 2rem' }}>
      <Container>
        <Link to="/">
          <Menu.Item>
            <Image style={{ width: '55px' }} src={logo} alt="tiemendo logo" />
          </Menu.Item>
        </Link>

        <Menu.Menu position="right">
          <Dropdown text="Menu" pointing className="link item">
            <Dropdown.Menu>
              <Link to="/">
                <Dropdown.Item>Dashboard</Dropdown.Item>
              </Link>
              {user && user.isAdmin ? (
                <Link to="/accounts/new">
                  <Dropdown.Item>Create new account</Dropdown.Item>
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
  );
};

export default PageHeader;

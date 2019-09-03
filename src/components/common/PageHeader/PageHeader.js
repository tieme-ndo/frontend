import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../assets/images/tiemendo_logo.jpg';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';

const PageHeader = () => {
  return (
    <Menu style={{ borderRadius: '0', margin: '0', marginBottom: '30px' }}>
      <Container>
        <Menu.Item>
          <Image style={{ width: '55px' }} src={logo} alt="tiemendo logo" />
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown text="settings" pointing className="link item">
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink to="/accounts/new">Create new account</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/reset-password">Change password</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default PageHeader;

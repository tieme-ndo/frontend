import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/tiemendo_logo.jpg';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';

const PageHeader = () => {
  return (
    <Menu style={{ borderRadius: '0', margin: '0' }}>
      <Container>
        <Menu.Item>
          <Image style={{ width: '55px' }} src={logo} alt="tiemendo logo" />
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown text="settings" pointing className="link item">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/accounts/new">Create new account</Link>
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

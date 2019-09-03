/* eslint-disable no-sequences */
/** @format */

import React, { useState } from 'react';
import withRestrictedAccess from '../../hoc/withRestrictedAccess';
import { Container, Grid, Segment, Menu } from 'semantic-ui-react';
import LeftDisplay from './LeftDisplay';
import PropTypes from 'prop-types';
import PersonalTab from './PersonalTab.js';
import FamilyTab from './FamilyTab.js';
import FarmTab from './FarmTab';
import GuarantorTab from './GuarantorTab.js';

const DisplayFarmer = ({ history, location, needsUpdate }) => {
  const farmer = location.state.farmer;
  const [selected, setSelected] = useState('Personal');

  function handleSelected(e, { name }) {
    setSelected(name);
  }

  function renderConditionally() {
    switch (selected) {
      case 'Personal':
        return <PersonalTab farmer={farmer} />;
      case 'Family':
        return <FamilyTab farmer={farmer} />;
      case 'Guarantor':
        return <GuarantorTab farmer={farmer} />;
      case 'Farm':
        return <FarmTab farmer={farmer} />;
      default:
        return;
    }
  }

  return (
    <Container>
      <Grid stackable columns={2}>
        <Grid.Column width={5}>
          <LeftDisplay
            farmer={farmer}
            history={history}
            needsUpdate={needsUpdate}
          />
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment>
            <Menu>
              <Menu.Item
                name="Personal"
                active={selected === 'Personal'}
                onClick={handleSelected}
              >
                Personal
              </Menu.Item>
              <Menu.Item
                name="Family"
                active={selected === 'Family'}
                onClick={handleSelected}
              >
                Family
              </Menu.Item>
              <Menu.Item
                name="Guarantor"
                active={selected === 'Guarantor'}
                onClick={handleSelected}
              >
                Guarantor
              </Menu.Item>
              <Menu.Item
                name="Farm"
                active={selected === 'Farm'}
                onClick={handleSelected}
              >
                Farm
              </Menu.Item>
            </Menu>
          </Segment>
          <Segment>{renderConditionally()}</Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

DisplayFarmer.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  needsUpdate: PropTypes.func
};

export default withRestrictedAccess(DisplayFarmer);

/* eslint-disable no-sequences */
/** @format */

import React, { useState, useEffect } from 'react';
import { Container, Grid, Segment, Menu } from 'semantic-ui-react';
import LeftDisplay from './LeftDisplay';
import PropTypes from 'prop-types';
import PersonalTab from './PersonalTab.js';
import FamilyTab from './FamilyTab.js';
import FarmTab from './FarmTab';
import GuarantorTab from './GuarantorTab.js';

const DisplayFarmer = ({ history, match, farmers, getFarmer, needsUpdate }) => {
  const [farmer, setFarmer] = useState();
  const [selected, setSelected] = useState('Personal');

  useEffect(() => {
    if (farmers) {
      const farmerId = match.params.id;
      const farmerToSave = getFarmer(farmerId);
      farmerToSave ? setFarmer(farmerToSave) : history.push('/');
    }
  }, [farmers, getFarmer, match.params.id, history]);
 
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
  return farmer ? (
    <Container data-testid="farmer-display-test">
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
            <Menu stackable widths={4}>
              <Menu.Item
                data-testid="personal-tab-render-test"
                name="Personal"
                active={selected === 'Personal'}
                onClick={handleSelected}
              >
                Personal
              </Menu.Item>
              <Menu.Item
                data-testid="family-tab-click-test"
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
  ) : null;
};

DisplayFarmer.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  needsUpdate: PropTypes.func,
  match: PropTypes.object,
  farmers: PropTypes.array,
  getFarmer: PropTypes.func
};

export default DisplayFarmer;

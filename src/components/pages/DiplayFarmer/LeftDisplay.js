import React from 'react';
import { Segment, Button, Placeholder, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const LeftDisplay = ({ farmer, history }) => {
  return (
    <>
      <Segment>
        <Placeholder style={{ height: 150, width: 150 }}>
          <Placeholder.Image />
        </Placeholder>
        <Header size="medium">
          {farmer.personalInfo.title} {farmer.personalInfo.first_name}{' '}
          {farmer.personalInfo.middle_name} {farmer.personalInfo.surname}
        </Header>
        <Header.Subheader>Phone</Header.Subheader>
        <Header
          size="tiny"
          style={{ marginTop: '0.1rem', marginBottom: '-1.5rem' }}
        >
          {farmer.personalInfo.Phone_1}
        </Header>
        <Header size="tiny">{farmer.personalInfo.Phone_2}</Header>
        <Header.Subheader>Address</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {farmer.personalInfo.house_name} {farmer.personalInfo.house_number},{' '}
          {farmer.personalInfo.region}
        </Header>
      </Segment>
      <Button
        style={{ width: '100%', marginBottom: '0.75rem' }}
        onClick={() => {
          history.push({
            pathname: `/farmers/${farmer._id}/edit`,
            state: { farmer }
          });
        }}
      >
        Edit Farmer
      </Button>
      <Button style={{ width: '100%' }} color={'red'}>
        Remove Farmer
      </Button>
    </>
  );
};

LeftDisplay.propTypes = {
  farmer: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default LeftDisplay;

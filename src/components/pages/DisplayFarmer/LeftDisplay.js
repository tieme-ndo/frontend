import React from 'react';
import {
  Responsive,
  Segment,
  Button,
  Image,
  Header
} from 'semantic-ui-react';
import ConfirmationModal from '../../common/ConfirmationModal/ConfirmationModal';
import { deleteFarmerHandler } from '../../../utils/handlers/farmerHandlers';
import PropTypes from 'prop-types';

const LeftDisplay = ({ farmer, history, needsUpdate }) => {
  console.log(farmer)
  return (
    <>
      <Responsive as={Segment}>
        <Image style={{ height: 150, width: 150 }} 
          src={farmer.personalInfo.image_url} 
          alt={`${farmer.personalInfo.first_name} ${farmer.personalInfo.middle_name} ${farmer.personalInfo.surname}`} />
        <Header size="medium">
          {farmer.personalInfo.first_name} {farmer.personalInfo.middle_name}{' '}
          {farmer.personalInfo.surname}
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
      </Responsive>
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
      <ConfirmationModal
        TriggerElement={Button}
        triggerText={'Remove Farmer'}
        triggerStyle={{ width: '100%' }}
        triggerColor={'red'}
        action={() => {
          deleteFarmerHandler(farmer._id).then(() => {
            needsUpdate(true);
            history.push('/');
          });
        }}
        message={"This can't be undone"}
        title={'Do you want to delete that farmer?'}
      />
    </>
  );
};

LeftDisplay.propTypes = {
  farmer: PropTypes.object.isRequired,
  history: PropTypes.object,
  needsUpdate: PropTypes.func
};

export default LeftDisplay;

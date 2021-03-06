import React from 'react';
import {
  Responsive,
  Segment,
  Button,
  Image,
  Placeholder,
  Header
} from 'semantic-ui-react';
import ConfirmationModal from '../../common/ConfirmationModal/ConfirmationModal';
import { deleteFarmerHandler } from '../../../utils/handlers/farmerHandlers';
import PropTypes from 'prop-types';
import { getUser } from '../../../utils/handlers/authenticationHandlers';
const LeftDisplay = ({ farmer, history, needsUpdate }) => {
  return (
    <div data-testid="left-display-render-test">
      <Responsive as={Segment}>
        {farmer.personalInfo.image_url ? (
          <Image
            data-testid="left-display-image-test"
            style={{ height: 150, width: 150 }}
            src={farmer.personalInfo.image_url}
            alt={`${farmer.personalInfo.first_name} ${farmer.personalInfo.middle_name} ${farmer.personalInfo.surname}`}
          />
        ) : (
          <>
            <Placeholder
              data-testid="left-display-placeholder-test"
              style={{ height: 150, width: 150 }}
            >
              <Placeholder.Image />
            </Placeholder>
            <Header.Subheader style={{ color: '#db2828' }}>
              No image available for this farmer!
            </Header.Subheader>
          </>
        )}

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

      {getUser().isAdmin ? (
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
      ) : null}
    </div>
  );
};

LeftDisplay.propTypes = {
  farmer: PropTypes.object.isRequired,
  history: PropTypes.object,
  needsUpdate: PropTypes.func
};

export default LeftDisplay;

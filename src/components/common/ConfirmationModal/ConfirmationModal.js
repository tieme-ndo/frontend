import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ConfirmationModal = ({
  TriggerElement,
  triggerStyle,
  triggerColor,
  triggerText,
  action,
  message,
  title
}) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  return (
    <>
      {<TriggerElement onClick={handleOpen} color={triggerColor} style={triggerStyle}>{triggerText}</TriggerElement>}
      <Modal open={modalOpen}>
        <Header icon="question" content={title} />
        <Modal.Content>
          <p>{message}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={handleClose}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" onClick={action}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

ConfirmationModal.propTypes = {
  TriggerElement: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  triggerStyle: PropTypes.object,
  triggerColor: PropTypes.string,
  triggerText: PropTypes.string,
  action: PropTypes.func.isRequired
};

export default ConfirmationModal;

import React, { useState } from 'react';
import Input from '../../common/Input/Input';
import * as form from '../../common/Input/addFarmerData';
import { updateFarmerHandler } from '../../../utils/handlers/farmerHandlers';
import { getToken } from '../../../utils/handlers/authenticationHandlers';
import withRestrictedAccess from '../../hoc/withRestrictedAccess';
import { Menu, Segment, Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateFarmer = ({ location, history, appStateShouldUpdate, user }) => {
  // Prevents errors when location state is empty
  const { farmer: farmerData } = location.state || {};
  // state that keeps track of changed input fields
  const [changes, setChanges] = useState({});

  const hydrateFormInputValues = () => {
    let hydratedFormInputs = {};

    // Deep copy of form input data objects
    const formInputData = JSON.parse(JSON.stringify(form));

    // eslint-disable-next-line no-unused-vars
    for (const inputSection in formInputData) {
      const inputSectionData = formInputData[inputSection];

      // eslint-disable-next-line no-unused-vars
      for (const input in inputSectionData) {
        if (input === 'image_url') {
          inputSectionData[input].imageUrl = farmerData[inputSection][input];
        } else if (input === 'date_of_birth') {
          inputSectionData[input].value = new Date(
            farmerData[inputSection][input]
          )
            .toISOString()
            .substr(0, 10);
        } else {
          inputSectionData[input].value = farmerData[inputSection][input];
          if ('selected' in inputSectionData[input]) {
            inputSectionData[input].selected = farmerData[inputSection][input];
          }
        }
        hydratedFormInputs = {
          ...formInputData
        };
      }
    }

    return hydratedFormInputs;
  };

  const [formElementsState, setFormElementsState] = useState(
    hydrateFormInputValues()
  );

  const [stateToggle, setStateToggle] = useState({
    personalInfoToggle: false,
    familyInfoToggle: true,
    guarantorToggle: true,
    farmInfoToggle: true
  });
  const [stateLoading, setStateLoading] = useState(false);

  /**
   * @param {*} e - an event which takes place in the DOM
   * @param {String} data - tabName
   * @param {String} elementType - input field type 'checkbox', 'select', 'text', 'number'
   * @param {Object | undefined} elementConfigObj - Inputs component config with type, name, label, value ...
   */
  const onChangeHandler = async (e, data, elementType, elementConfigObj) => {
    let name, value, type, files;

    if (elementType === 'checkbox') {
      // This is for the checkboxes to work as Semantic UI uses the :before pseudoelement
      // which causes the event target to be the checkbox's label instead of the checkbox element
      name = e.target.previousElementSibling.name;
      value = e.target.previousElementSibling.value;
      type = e.target.previousElementSibling.type;
    } else if (elementType === 'select') {
      // This is for the dropdowns to work as Semantic UI uses divs
      // which do not have appropriate name, value, and type properties
      name = elementConfigObj.name;
      value = e.target.textContent;
      type = elementConfigObj.elementType;
    } else {
      // For all other input types
      name = e.target.name;
      value = e.target.value;
      type = e.target.type;

      if (e.target.files) {
        files = e.target.files;
      }
    }

    const newData = { ...formElementsState[data] };
    const newEntry = { ...newData[name] };
    // keep track of changed input fields that are sent to the Edits endpoint
    const changedData = { ...changes[data] }; // personalInfo object
    if (type === 'checkbox') {
      if (newEntry.selected.indexOf(value) > -1) {
        newEntry.selected = newEntry.selected.filter(s => s !== value);
        changedData[name] = newData[name].selected.filter(s => s !== value);
      } else {
        newEntry.selected = [...newEntry.selected, value];
        changedData[name] = [...newData[name].selected, value];
      }
    } else if (type === 'file') {
      // Render the image in the form's <img /> element
      e.persist();

      if (files.length) {
        const imageFile = new FormData();
        imageFile.append('file', files[0]);
        imageFile.append(
          'upload_preset',
          process.env.REACT_APP_CLOUDINARY_PRESET
        );

        try {
          if (process.env.REACT_APP_CLOUDINARY_URL) {
            const uploadResponseData = await axios.post(
              process.env.REACT_APP_CLOUDINARY_URL,
              imageFile
            );
            const imageUrl = uploadResponseData.data.secure_url;
            changedData.image_url = uploadResponseData.data.secure_url;
            e.target.nextSibling.src = imageUrl;

            newEntry.imageUrl = imageUrl;
          } else {
            throw new Error(
              'CLOUDINARY_URL environment variable not provided.'
            );
          }
        } catch (error) {
          toast.error('Failed to upload image. Please check your connection.');

          // Display error message in the console for context
          console.error(error.message);
        }
      }
    } else {
      newEntry.value = value;
      changedData[name] = value;
    }
    newData[name] = newEntry;
    setFormElementsState({ ...formElementsState, [data]: newData });
    setChanges({ ...changes, [data]: changedData });
  };

  const toggleHandler = data => {
    setStateToggle({
      personalInfoToggle: true,
      familyInfoToggle: true,
      guarantorToggle: true,
      farmInfoToggle: true,
      [data]: false
    });

    //scrolls to the height of the Menu whenever the tab is changed.
    window.scrollTo(0, 75);
  };

  const formHandler = e => {
    setStateLoading(true);
    e.preventDefault();
    let formData = {};
    const newState = JSON.parse(JSON.stringify(formElementsState));
    // eslint-disable-next-line no-unused-vars
    for (let key in newState) {
      formData[key] = newState[key];
      // eslint-disable-next-line no-unused-vars
      for (let key2 in newState[key]) {
        if (newState[key][key2].selected) {
          formData[key][key2] = newState[key][key2].selected;
        } else if (newState[key][key2].imageUrl) {
          formData[key][key2] = newState[key][key2].imageUrl;
        } else {
          formData[key][key2] = newState[key][key2].value;
        }
      }
    }

    const token = getToken();
    updateFarmerHandler(changes, farmerData._id, token)
      .then(() => {
        appStateShouldUpdate(true);
        if (user && user.isAdmin) {
          toast.success('Farmer record updated successfully');
        } else {
          toast.success("Waiting for Admin's review");
        }
        setStateLoading(false);
        // removes "/edit" dynamically from the route pathname
        history.replace(`${location.pathname.split('/edit')[0]}`, {
          // Passes back the updated farmer data to the location state of the DisplayFarmers component
          // Added "_id" because formData doesn't have/need an _id property
          farmer: { ...formData, _id: farmerData._id }
        });
      })
      .catch(err => {
        setStateLoading(false);
        if (!err.response) {
          toast.error(err.message);
          toast.error(
            'Looks like there is a problem with your connection. Please try again later'
          );
        }
        err.response.data.errors.forEach(element => {
          toast.error(element.message);
        });
      });
  };

  const inputCreator = (data, tabName) => {
    const formElementsArray = [];
    // eslint-disable-next-line no-unused-vars
    for (let key in data) {
      formElementsArray.push({
        id: key,
        config: data[key]
      });
    }
    let form = formElementsArray.map((formElement, idx) => (
      <Input
        key={idx}
        {...formElement.config}
        elementConfigObj={formElement.config}
        data={tabName}
        changeHandler={onChangeHandler}
      />
    ));
    return form;
  };

  let personalInfoInputs = inputCreator(
    formElementsState.personalInfo,
    'personalInfo'
  );
  let familyInfoInputs = inputCreator(
    formElementsState.familyInfo,
    'familyInfo'
  );
  let guarantorInputs = inputCreator(formElementsState.guarantor, 'guarantor');
  let farmInfoInputs = inputCreator(formElementsState.farmInfo, 'farmInfo');

  return (
    <div data-testid="edit-farmer-component">
      <Segment>
        <Menu stackable widths="4">
          <Menu.Item
            name="Personal"
            active={stateToggle.personalInfoToggle === false}
            onClick={() => toggleHandler('personalInfoToggle')}
          >
            <b>Personal</b>
          </Menu.Item>
          <Menu.Item
            name="Family"
            active={stateToggle.familyInfoToggle === false}
            onClick={() => toggleHandler('familyInfoToggle')}
          >
            <b>Family</b>
          </Menu.Item>
          <Menu.Item
            name="Guarantor"
            active={stateToggle.guarantorToggle === false}
            onClick={() => toggleHandler('guarantorToggle')}
          >
            <b>Guarantor</b>
          </Menu.Item>
          <Menu.Item
            name="Farm"
            active={stateToggle.farmInfoToggle === false}
            onClick={() => toggleHandler('farmInfoToggle')}
          >
            <b>Farm</b>
          </Menu.Item>
        </Menu>
      </Segment>
      <Form
        onSubmit={formHandler}
        style={{
          marginBottom: `${window.innerHeight / 2}px`
        }}
      >
        <Segment
          style={{ width: '100%', padding: '2.5rem 1rem' }}
          hidden={stateToggle.personalInfoToggle}
        >
          <div
            style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}
          >
            {personalInfoInputs}
          </div>
        </Segment>

        <Segment
          style={{ width: '100%', padding: '2.5rem 1rem' }}
          hidden={stateToggle.familyInfoToggle}
        >
          <div
            style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}
          >
            {familyInfoInputs}
          </div>
        </Segment>

        <Segment
          style={{ width: '100%', padding: '2.5rem 1rem' }}
          hidden={stateToggle.guarantorToggle}
        >
          <div
            style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}
          >
            {guarantorInputs}
          </div>
        </Segment>

        <Segment
          style={{ width: '100%', padding: '2.5rem 1rem' }}
          hidden={stateToggle.farmInfoToggle}
        >
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            {farmInfoInputs}
          </div>
        </Segment>
        <div
          style={{
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            padding: '1.5rem 0',
            margin: ' 0 auto',
            textAlign: 'center'
          }}
        >
          {stateLoading ? (
            <Button
              loading
              disabled
              color="teal"
              size="large"
              content="Submit Changes"
            />
          ) : (
            <Button
              color="teal"
              type="submit"
              size="large"
              content="Submit Changes"
              icon="check"
              labelPosition="right"
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default withRestrictedAccess(UpdateFarmer);

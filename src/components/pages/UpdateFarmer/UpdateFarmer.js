import React, { useState } from 'react';
import Input from '../../common/Input/Input';
import * as form from '../../common/Input/addFarmerData';
import { updateFarmerHandler } from '../../../utils/handlers/farmerHandlers';
import { getToken } from '../../../utils/handlers/authenticationHandlers';
import withRestrictedAccess from '../../hoc/withRestrictedAccess';
import { Menu, Segment, Form, Button } from 'semantic-ui-react';
import axios from 'axios';
const UpdateFarmer = ({ location, history, appStateShouldUpdate }) => {
  // Prevents errors when location state is empty
  const { farmer: farmerData } = location.state || {};

  const hydrateFormInputValues = () => {
    let hydratedFormInputs = {};

    // Deep copy of form input data objects
    const formInputData = JSON.parse(JSON.stringify(form));

    // eslint-disable-next-line no-unused-vars
    for (const inputSection in formInputData) {
      const inputSectionData = formInputData[inputSection];

      // eslint-disable-next-line no-unused-vars
      for (const input in inputSectionData) {
        // do not hydrate the image_url
        // it will cause the component to break
        if (input === 'image_url') {
          // but we still need the 'image_url' property on state object
          inputSectionData[input].imageUrl = '';
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
    if (type === 'checkbox') {
      if (newEntry.selected.indexOf(value) > -1) {
        newEntry.selected = newEntry.selected.filter(s => s !== value);
      } else {
        newEntry.selected = [...newEntry.selected, value];
      }
    } else if (type === 'file') {
      const imageFile = new FormData();
      imageFile.append('file', files[0]);
      imageFile.append(
        'upload_preset',
        process.env.REACT_APP_CLOUDINARY_PRESET
      );
      const imageUrl = await axios
        .post(process.env.REACT_APP_CLOUDINARY_URL, imageFile)
        .then(data => data.data.secure_url)
        .catch(err => err);
      newEntry.imageUrl = imageUrl;
    } else {
      newEntry.value = value;
    }
    newData[name] = newEntry;
    setFormElementsState({ ...formElementsState, [data]: newData });
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
    updateFarmerHandler(formData, farmerData._id, token).then(() => {
      appStateShouldUpdate(true);
      // removes "/edit" dynamically from the route pathname
      history.replace(`${location.pathname.split('/edit')[0]}`, {
        // Passes back the updated farmer data to the location state of the DisplayFarmers component
        // Added "_id" because formData doesn't have/need an _id property
        farmer: { ...formData, _id: farmerData._id }
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
    <div>
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
          <Button
            color="teal"
            type="submit"
            size="large"
            content="Submit Changes"
            icon="check"
            labelPosition="right"
          />
        </div>
      </Form>
    </div>
  );
};

export default withRestrictedAccess(UpdateFarmer);

/** @format */

import React, { useState, useEffect } from 'react';
import Input from '../../common/Input/Input';
import {
  personalInfo,
  familyInfo,
  guarantor,
  farmInfo
} from '../../common/Input/addFarmerData';
import axios from 'axios';
import { pathObj } from '../../../utils/generalVariables';
import { getToken } from '../../../utils/handlers/authenticationHandlers';
import { setHeaders } from '../../../utils/requestHeaders';
import { toast } from 'react-toastify';
import { Menu, Segment, Form, Button } from 'semantic-ui-react';

const AddFarmer = () => {
  const [state, setState] = useState({});

  const defaultState = () => {
    setState({
      personalInfo: personalInfo,
      familyInfo: familyInfo,
      guarantor: guarantor,
      farmInfo: farmInfo
    });
  };
  useEffect(() => {
    defaultState();
  }, []);

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

    const newData = { ...state[data] };
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
    setState({ ...state, [data]: newData });
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
    const newState = JSON.parse(JSON.stringify(state));
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

    axios
      .post(`${pathObj.addFarmerPath}/create`, formData, setHeaders(getToken()))
      .then(res => {
        toast.success('Farmer Added Successfully');
        defaultState();
        return;
      })
      .catch(err => {
        err.response.data.errors.forEach(element => {
          toast.error(element.message);
        });
        return;
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

  let personalInfoInputs = inputCreator(state.personalInfo, 'personalInfo');
  let familyInfoInputs = inputCreator(state.familyInfo, 'familyInfo');
  let guarantorInputs = inputCreator(state.guarantor, 'guarantor');
  let farmInfoInputs = inputCreator(state.farmInfo, 'farmInfo');

  return (
    <>
      <Segment data-testid="test-addfarmer-component">
        <Menu stackable widths="4">
          <Menu.Item
            name="Personal"
            active={stateToggle.personalInfoToggle === false}
            onClick={() => toggleHandler('personalInfoToggle')}
          >
            <b>1. Personal</b>
          </Menu.Item>
          <Menu.Item
            name="Family"
            active={stateToggle.familyInfoToggle === false}
            onClick={() => toggleHandler('familyInfoToggle')}
          >
            <b>2. Family</b>
          </Menu.Item>
          <Menu.Item
            name="Guarantor"
            active={stateToggle.guarantorToggle === false}
            onClick={() => toggleHandler('guarantorToggle')}
          >
            <b>3. Guarantor</b>
          </Menu.Item>
          <Menu.Item
            name="Farm"
            active={stateToggle.farmInfoToggle === false}
            onClick={() => toggleHandler('farmInfoToggle')}
          >
            <b>4. Farm</b>
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
          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto',
              textAlign: 'center',
              marginTop: '2rem'
            }}
          >
            <Button
              type="button"
              onClick={() => toggleHandler('familyInfoToggle')}
              size="large"
              content="Next"
              icon="right arrow"
              labelPosition="right"
            />
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
          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto',
              textAlign: 'center',
              marginTop: '2rem'
            }}
          >
            <Button
              type="button"
              onClick={() => toggleHandler('guarantorToggle')}
              size="large"
              content="Next"
              icon="right arrow"
              labelPosition="right"
            />
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
          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto',
              textAlign: 'center',
              marginTop: '2rem'
            }}
          >
            <Button
              type="button"
              onClick={() => toggleHandler('farmInfoToggle')}
              size="large"
              content="Next"
              icon="right arrow"
              labelPosition="right"
            />
          </div>
        </Segment>

        <Segment
          style={{ width: '100%', padding: '2.5rem 1rem' }}
          hidden={stateToggle.farmInfoToggle}
        >
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            {farmInfoInputs}
          </div>
          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto',
              textAlign: 'center',
              marginTop: '2rem'
            }}
          >
            <Button
              color="teal"
              type="submit"
              size="large"
              content="Add Farmer"
              icon="check"
              labelPosition="right"
            />
          </div>
        </Segment>
      </Form>
    </>
  );
};

export default AddFarmer;

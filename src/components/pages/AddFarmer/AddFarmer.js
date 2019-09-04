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
  };
  const formHandler = e => {
    e.preventDefault();
    let formData = {};
    const newState = JSON.parse(JSON.stringify(state));
    for (let key in newState) {
      formData[key] = newState[key];
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
    for (let key in data) {
      formElementsArray.push({
        id: key,
        config: data[key]
      });
    }
    let form = formElementsArray.map((formElement, idx) => (
      <Input
        key={idx}
        elementConfigObj={formElement.configObj}
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
    <div>
      <section>
        <form onSubmit={formHandler} style={{ padding: '2rem' }}>
          <fieldset>
            <div onClick={toggleHandler.bind(this, 'personalInfoToggle')}>
              <h2>Personnel Information</h2>
              <i className="fas fa-angle-double-down fa-2x" />
            </div>
            <div hidden={stateToggle.personalInfoToggle}>
              {personalInfoInputs}
            </div>
          </fieldset>

          <fieldset>
            <div onClick={toggleHandler.bind(this, 'familyInfoToggle')}>
              <h2>Family</h2> <i className="fas fa-angle-double-down fa-2x" />
            </div>
            <div hidden={stateToggle.familyInfoToggle}>{familyInfoInputs}</div>
          </fieldset>

          <fieldset>
            <div onClick={toggleHandler.bind(this, 'guarantorToggle')}>
              <h2>Guarantor</h2>{' '}
              <i className="fas fa-angle-double-down fa-2x" />
            </div>
            <div hidden={stateToggle.guarantorToggle}>{guarantorInputs}</div>
          </fieldset>

          <fieldset>
            <div onClick={toggleHandler.bind(this, 'farmInfoToggle')}>
              <h2>Farm Information</h2>{' '}
              <i className="fas fa-angle-double-down fa-2x" />
            </div>
            <div hidden={stateToggle.farmInfoToggle}>{farmInfoInputs}</div>
          </fieldset>

          <button type="submit">
            Add Farmer
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddFarmer;

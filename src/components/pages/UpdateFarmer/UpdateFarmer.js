// Create PUT farmer axios request helper
// Refactor accordian to tabs
// Reposition elements
// Hide all on tab click
// Show clicked tab content on tab click
// If new state !== old state pass data to submit form handler
import React, { useState } from 'react';
import Input from '../../common/Input/Input';
import * as form from '../../common/Input/addFarmerData';
import Button from '../../common/Button/StyledButton';
import styled from 'styled-components';
import { updateFarmerHandler } from '../../../utils/handlers/farmerHandlers';
import { getToken } from '../../../utils/handlers/authenticationHandlers';

const UpdateFarmer = ({ location }) => {
  const hydrateFormInputValues = () => {
    const farmerData = location.state;
    let hydratedFormInputs = {};

    // Deep copy of form input data objects
    const formInputData = JSON.parse(JSON.stringify(form));

    for (const inputSection in formInputData) {
      const inputSectionData = formInputData[inputSection];

      for (const input in inputSectionData) {
        inputSectionData[input].value = farmerData[inputSection][input];
        if ('selected' in inputSectionData[input]) {
          inputSectionData[input].selected = farmerData[inputSection][input];
        }
        hydratedFormInputs = {
          ...formInputData
        };
      }
    }

    return hydratedFormInputs;
  }

  const [formElementsState, setFormElementsState] = useState(hydrateFormInputValues());

  const [stateToggle, setStateToggle] = useState({
    personalInfoToggle: false,
    familyInfoToggle: true,
    guarantorToggle: true,
    farmInfoToggle: true,
  });

  const onChangeHandler = (e, data) => {
    const { name, value, type } = e.target
    const newData = { ...formElementsState[data] }
    const newEntry = { ...newData[name] }
    if (type === 'checkbox') {
      if (newEntry.selected.indexOf(value) > -1) {
        newEntry.selected = newEntry.selected.filter(s => s !== value)
      } else {
        newEntry.selected = [...newEntry.selected, value]
      }
    } else {
      newEntry.value = value
    }
    newData[name] = newEntry
    setFormElementsState({ ...formElementsState, [data]: newData })
  }
  const toggleHandler = data => {
    setStateToggle(prevState => ({
      ...prevState,
      [data]: !prevState[data],
    }))
  }
  const formHandler = e => {
    e.preventDefault()
    let formData = {}

    const newState = JSON.parse(JSON.stringify(formElementsState));
    for (let key in newState) {
      formData[key] = newState[key]
      for (let key2 in newState[key]) {
        if (newState[key][key2].selected) {
          formData[key][key2] = newState[key][key2].selected
        } else {
          formData[key][key2] = newState[key][key2].value
        }
      }
    }

    const token = getToken()
    updateFarmerHandler(formData, location.state._id, token);
  }
  const inputCreator = (data, index) => {
    const formElementsArray = []
    for (let key in data) {
      formElementsArray.push({
        id: key,
        config: data[key],
      })
    }
    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.config.name}
        {...formElement.config}
        data={index}
        changeHandler={onChangeHandler}
      />
    ))
    return form
  }

  let personalInfoInputs = inputCreator(formElementsState.personalInfo, 'personalInfo')
  let familyInfoInputs = inputCreator(formElementsState.familyInfo, 'familyInfo')
  let guarantorInputs = inputCreator(formElementsState.guarantor, 'guarantor')
  let farmInfoInputs = inputCreator(formElementsState.farmInfo, 'farmInfo')

  const DivToggle = styled.div`
    display: flex;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
    }
  `
  return (
    <div>
      <header>
        <div>Logo</div>
        <div>
          <Button displayName="LogOut" />
        </div>
      </header>
      <section>
        <Button displayName="Back" styles={{ backgroundColor: 'green' }} />
        <hr />

        <form action="" onSubmit={(e) => {
          e.preventDefault();
        }} style={{ padding: '2rem' }}>
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, 'personalInfoToggle')}>
              <h2>Personal Information</h2>
              <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.personalInfoToggle}>{personalInfoInputs}</div>
          </fieldset>

          <hr />
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, 'familyInfoToggle')}>
              <h2>Family</h2> <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.familyInfoToggle}>{familyInfoInputs}</div>
          </fieldset>

          <hr />
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, 'guarantorToggle')}>
              <h2>Guarantor</h2> <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.guarantorToggle}>{guarantorInputs}</div>
          </fieldset>
          <hr />

          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, 'farmInfoToggle')}>
              <h2>Farm Information</h2> <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.farmInfoToggle}>{farmInfoInputs}</div>
          </fieldset>

        </form>
          
          <div onClick={(e) => formHandler(e)}>
            <Button displayName="Save"  />
          </div>
      </section>
    </div>
  )
}

export default UpdateFarmer;

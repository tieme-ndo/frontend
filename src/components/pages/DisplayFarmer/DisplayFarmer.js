/** @format */

import React, { useState } from 'react';
import { Container, Grid, Segment, Menu } from 'semantic-ui-react';
import LeftDisplay from './LeftDisplay';
import PropTypes from 'prop-types';
import DisplayTabTemplate from './DisplayTabTemplate.js';
import PersonalTab from './PersonalTab.js'

const DisplayFarmer = ({ history, location }) => {
  const farmer = location.state.farmer;
  const [selected, setSelected] = useState('Personal');

  function handleSelected(e, { name }) {
    setSelected(name);
  }

  function renderConditionally() {
    console.log(farmer);
    switch (selected) {
      case 'Personal':
        return <DisplayTabTemplate farmer={farmer}/>;
      case 'Family':
        return <DisplayTabTemplate farmer={farmer}/>;
      case 'Guarantor':
        return <DisplayTabTemplate farmer={farmer}/>;
      case 'Farm':
        return <DisplayTabTemplate farmer={farmer}/>;
      default:
        return ;
    }
  }

  return (
    <Container>
      <Grid stackable columns={2}>
        <Grid.Column width={5}>
          <LeftDisplay farmer={farmer} history={history} />
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment>
            <Menu>
              <Menu.Item
                name="Personal"
                active={selected === 'Personal'}
                onClick={handleSelected}
              >
                Personal
              </Menu.Item>
              <Menu.Item
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
  );
};

DisplayFarmer.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};

export default DisplayFarmer;

/* const hydrateFormInputValues = () => {
    const farmerData = props.location.state.farmer;
    let hydratedFormInputs = {};

    // Deep copy of form input data objects
    const formInputData = JSON.parse(JSON.stringify(form));

    for (const inputSection in formInputData) {
      const inputSectionData = formInputData[inputSection];

      for (const input in inputSectionData) {
        inputSectionData[input].value = farmerData[inputSection][input];
        if ("selected" in inputSectionData[input]) {
          inputSectionData[input].selected = farmerData[inputSection][input];
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

  const toggleHandler = data => {
    setStateToggle(prevState => ({
      ...prevState,
      [data]: !prevState[data]
    }));
  };

  const inputCreator = (data, index) => {
    const formElementsArray = [];
    for (let key in data) {
      formElementsArray.push({
        id: key,
        config: data[key]
      });
    }
    let form = formElementsArray.map(formElement => (
      <Input
        disabled
        key={formElement.config.name}
        {...formElement.config}
        data={index}
      />
    ));
    return form;
  };

  let personalInfoInputs = inputCreator(
    formElementsState.personalInfo,
    "personalInfo"
  );

  let familyInfoInputs = inputCreator(
    formElementsState.familyInfo,
    "familyInfo"
  );

  let guarantorInputs = inputCreator(formElementsState.guarantor, "guarantor");

  let farmInfoInputs = inputCreator(formElementsState.farmInfo, "farmInfo");

  const DivToggle = styled.div`
    display: flex;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <div>
        <form action="" style={{ padding: "2rem" }}>
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, "personalInfoToggle")}>
              <h2>Personal Information</h2>
              <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.personalInfoToggle}>
              {personalInfoInputs}
            </div>
          </fieldset>

          <hr />
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, "familyInfoToggle")}>
              <h2>Family</h2> <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.familyInfoToggle}>{familyInfoInputs}</div>
          </fieldset>

          <hr />
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, "guarantorToggle")}>
              <h2>Guarantor</h2>{" "}
              <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.guarantorToggle}>{guarantorInputs}</div>
          </fieldset>
          <hr />

          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, "farmInfoToggle")}>
              <h2>Farm Information</h2>{" "}
              <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.farmInfoToggle}>{farmInfoInputs}</div>
          </fieldset>
        </form>
    </div>
  );
}; */

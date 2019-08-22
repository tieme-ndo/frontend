/** @format */

import React, {useState} from 'react'
import Input from '../common/Input/Input'
import Select from '../common/Input/Select/Select'
import Button from '../common/Button/StyledButton'
import styled from 'styled-components'

const AddFarmer = props => {
  const [state, setState] = useState({
    toggle1: false,
    toggle2: true,
    toggle3: true,
    toggle4: true,
  })
  const toggleHandler = data => {
    setState(prevState => ({
      ...prevState,
      [data]: !prevState[data],
    }))
  }

  const DivToggle = styled.div`
    display: flex;
    justify-content: space-between;
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
        <Button displayName="Back" styles={{backgroundColor: 'green'}} />
        <hr />
        <form action="">
          <DivToggle onClick={toggleHandler.bind(this, 'toggle1')}>
            <h2>Personnel Information</h2>
            <i className="fas fa-angle-double-down fa-2x" />
          </DivToggle>

          <fieldset hidden={state.toggle1}>
            <label htmlFor="">
              Title
              <Select name="title" options="title_Options" />
            </label>
            <label htmlFor="">
              SurName <Input type="text" name="surname" />
            </label>
            <label htmlFor="">
              First Name <Input type="text" name="first_name" />
            </label>
            <label htmlFor="">
              Middle Name <Input type="text" name="middle_name" />
            </label>
            <label htmlFor="">
              Marital Status
              <Select name="marital_status" options="marital_Options" />
            </label>
            <label htmlFor="">
              Gender
              <Select name="gender" options="gender_Options" />
            </label>
            <label htmlFor="">
              Date of Birth <Input type="date" name="place_of_birth" />
            </label>
            <label htmlFor="">
              Id Type
              <Select name="id_type" options="id_types" />
            </label>
            <label htmlFor="">
              ID Number <Input type="number" name="id_number" />
            </label>
            <label htmlFor="">
              District <Input type="text" name="district" />
            </label>
            <label htmlFor="">
              Region <Input type="text" name="region" />
            </label>
            <label htmlFor="">
              Community <Input type="text" name="community_name" />
            </label>
            <label htmlFor="">
              House Name <Input type="text" name=" house_name" />
            </label>
            <label htmlFor="">
              House No <Input type="text" name=" house_number" />
            </label>
            <label htmlFor="">
              Nearest Landmark <Input type="text" name="nearest_landmark" />
            </label>
            <label htmlFor="">
              Phone 1 <Input type="number" name="Phone_1" />
            </label>
            <label htmlFor="">
              Phone 2 <Input type="number" name="Phone_2" />
            </label>
            <label htmlFor="">
              Education <Input type="text" />
            </label>
            <label htmlFor="">
              Educational Level
              <Select name="education_level" options="education_Options" />
            </label>
            <label htmlFor="">
              Occupation <Input type="text" name="occupation" />
            </label>
            <label htmlFor="">
              Expected Income Per Month
              <Select name="expected_income_per_month" options="income" />
            </label>
            <label htmlFor="">
              Major Income Source <Input type="text" name="major_source_of_income" />
            </label>
            <label htmlFor="">
              Amount <Input type="number" name="major_source_of_income_amount" />
            </label>
            <label htmlFor="">
              Major Income Source <Input type="text" name="minor_source_of_income" />
            </label>
            <label htmlFor="">
              Amount <Input type="number" name="minor_source_of_income_amount" />
            </label>
          </fieldset>
          <hr />
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, 'toggle2')}>
              <h2>Family</h2> <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>

            <div hidden={state.toggle2}>
              <label htmlFor="">
                Family Size <Input type="text" name="family_size" />
              </label>
              <label htmlFor="">
                Number Of Dependant <Input type="number" name="number_of_dependant" />
              </label>
              <label htmlFor="">
                Highest Level Of Dependant <Input type="text" name="highest_level_of_dependent" />
              </label>
              <label htmlFor="">
                Family Income Per Month
                <Select name="family_income_per_month" options="income" />
              </label>
            </div>
          </fieldset>
          <hr />
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, 'toggle3')}>
              <h2>Guarantor</h2> <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={state.toggle3}>
              <div>
                <label htmlFor="">
                  Title
                  <Select name="title" options="title_Options" />
                </label>
              </div>
              <label htmlFor="">
                SurName <Input type="text" name="surname" />
              </label>
              <label htmlFor="">
                First Name <Input type="text" name="first_name" />
              </label>
              <label htmlFor="">
                Gender
                <Select name="gender" options="gender_Options" />
              </label>
              <label htmlFor="">
                Relationship <Input type="text" name="relationship" />
              </label>
              <label htmlFor="">
                Residential Address <Input type="text" name="residential_address" />
              </label>
              <label htmlFor="">
                Occupation <Input type="text" name="occupation" />
              </label>
              <label htmlFor="">
                Phone <Input type="number" name="phone" />
              </label>
              <label htmlFor="">
                District <Input type="text" name="district" />
              </label>
              <label htmlFor="">
                Region <Input type="text" name="region" />
              </label>
            </div>
          </fieldset>
          <hr />
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, 'toggle4')}>
              <h2>Farm Information</h2> <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={state.toggle4}>
              <label htmlFor="">
                Number Of Acres <Input type="text" name="number_of_acres" />
              </label>
              <label htmlFor="">
                Location Of Farm <Input type="text" name="location_of_farm" />
              </label>
              <label htmlFor="">
                Nearest Landmark <Input type="text" name="nearest_landmark" />
              </label>
              <label htmlFor="">
                Crops Cultivated <Input type="number" name="crops_cultivated" />
              </label>
              <label htmlFor="">
                Animals Or Birds <Input type="number" name="animals_or_birds" />
              </label>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  )
}

export default AddFarmer

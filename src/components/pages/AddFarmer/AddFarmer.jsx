/** @format */

import React from 'react'
//import PropTypes from 'prop-types'
//import styled from 'styled-components'
import Input from '../../common/Input/Input'
import Select from '../../common/Input/Select'

export const addFarmer = function() {
  return (
    <div>
      <header>
        <div>Logo</div>
        <div>
          <button>Logout</button>
        </div>
      </header>

      <section>
        <button>Back</button>
        <hr />

        <form action="">
          <fieldset>
            <h2>Personnel Information</h2>
            <div>
              <label htmlFor="">
                Title
                <Select id="" name="title" options="title_Options" />
              </label>
            </div>
            <label htmlFor="">
              Surname <Input type="text" name="surname" />
            </label>
            <label htmlFor="">
              First Name <Input type="text" name="first_name" />
            </label>
            <label htmlFor="">
              Middle Name <Input type="text" name="middle_name" />
            </label>
            <div>
              <label htmlFor="">
                Marital Status
                <Select name="marital_status" id="" options="marital_Options" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Gender
                <Select name="gender" id="" options="gender_Options" />
              </label>
            </div>
            <label htmlFor="">
              Date of Birth <Input type="text" name="place_of_birth" />
            </label>
            <div>
              <label htmlFor="">
                Id Type
                <select id="" name="id_type">
                  <option value="">Voter\'s Card</option>
                  <option value="">NHIS</option>
                  <option value="">National ID</option>
                  <option value="">Others</option>
                </select>
              </label>
            </div>
            <label htmlFor="">
              ID Number <Input type="text" name="id_number" />
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
              Phone 1 <Input type="text" name="Phone_1" />
            </label>
            <label htmlFor="">
              Phone 2 <Input type="text" name="Phone_2" />
            </label>
            <label htmlFor="">
              Education <Input type="text" />
            </label>
            <div>
              <label htmlFor="">
                Educational Level
                <Select id="" name="education_level" options="education_Options" />
              </label>
            </div>
            <label htmlFor="">
              Occupation <Input type="text" name="occupation" />
            </label>
            <div>
              <label htmlFor="">
                Expected Income Per Month
                <Select id="" name="expected_income_per_month" options="income">
                </Select>
              </label>
            </div>
            <label htmlFor="">
              Major Income Source <Input type="text" name="major_source_of_income" />
            </label>
            <label htmlFor="">
              Amount <Input type="text" name="major_source_of_income" />
            </label>
            <label htmlFor="">
              Major Income Source <Input type="text" name="minor_source_of_income" />
            </label>
            <label htmlFor="">
              Amount <Input type="text" name="minor_source_of_income_amount" />
            </label>
          </fieldset>
          <hr />
          <div>
            <h2>Family</h2>
            <label htmlFor="">
              Family Size <Input type="text" name="family_size" />
            </label>
            <label htmlFor="">
              Number Of Dependant <Input type="text" name="number_of_dependant" />
            </label>
            <label htmlFor="">
              Highest Level Of Dependant <Input type="text" name="highest_level_of_dependent" />
            </label>
            <div>
              <label htmlFor="">
                Family Income Per Month
                <Select id="" name="family_income_per_month" options="income" />
              </label>
            </div>
          </div>
          <hr />
          <div>
            <h2>Guarantor</h2>
            <div>
              <label htmlFor="">
                Title
                <Select id="" name="title" options="title_Options" />
              </label>
            </div>
            <label htmlFor="">
              Surname <Input type="text" name="surname" />
            </label>
            <label htmlFor="">
              First Name <Input type="text" name="first_name" />
            </label>
            <div>
              <label htmlFor="">
                Gender
                <Select name="gender" id="" options="gender_Options" />
              </label>
            </div>
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
              Phone <Input type="text" name="phone" />
            </label>
            <label htmlFor="">
              District <Input type="text" name="district" />
            </label>
            <label htmlFor="">
              Region <Input type="text" name="region" />
            </label>
          </div>
          <hr />
          <div>
            <h2>Farm Information</h2>
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
              Crops Cultivated <Input type="text" name="crops_cultivated" />
            </label>
            <label htmlFor="">
              Animals Or Birds <Input type="text" name="animals_or_birds" />
            </label>
          </div>
        </form>
      </section>
    </div>
  )
}

addFarmer.propTypes = {
  // cards: propTypes.array
}

export default addFarmer

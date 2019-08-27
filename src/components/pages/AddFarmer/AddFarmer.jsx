/** @format */

import React, {useState} from 'react'
import Input from '../../common/Input/Input'
import {personalInfo, familyInfo, guarantor, farmInfo} from '../../common/Input/addFarmerData'
import Button from '../../common/Button/StyledButton'
import styled from 'styled-components'

const AddFarmer = () => {
  const [state, setState] = useState({
      personalInfo: personalInfo,
      familyInfo: familyInfo,
      guarantor: guarantor,
      farmInfo: farmInfo,
  })
  const [stateToggle, setStateToggle] = useState({
    toggle1: false,
    toggle2: true,
    toggle3: true,
    toggle4: true,
  })

  const onChangeHandler = (e, data) => {
    const {name, value, type} = e.target
    const newData = {...state[data]}
    const newEntry = {...newData[name]}
    if (type === 'checkbox') {
      if (newEntry.selected.indexOf(value) > -1) {
        newEntry.selected = newEntry.selected.filter(s => s !== value)
      } else {
        newEntry.selected = [...newEntry.selected, value]
      }
    } else if (type !== 'checkbox') {
      newEntry.value = value
    }
    newData[name] = newEntry
    setState({...state, [data]: newData})
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

    const newState = JSON.parse(JSON.stringify(state))
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

    const formattedForm = formData.personalInfo
    let incomeSource = formattedForm.minor_source_of_income
    let incomeAmount = formattedForm.minor_source_of_income_amount
    let incomeSourceMajor = formattedForm.major_source_of_income
    let incomeAmountMajor = formattedForm.major_source_of_income_amount

    delete formattedForm.minor_source_of_income
    delete formattedForm.minor_source_of_income_amount
    delete formattedForm.major_source_of_income
    delete formattedForm.major_source_of_income_amount
    formattedForm.minor_source_of_income = {
      name: incomeSource,
      amount: incomeAmount,
    }
    formattedForm.major_source_of_income = {
      name: incomeSourceMajor,
      amount: incomeAmountMajor,
    }
    e.target.reset()
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

  let form = inputCreator(state.personalInfo, 'personalInfo')
  let form2 = inputCreator(state.familyInfo, 'familyInfo')
  let form3 = inputCreator(state.guarantor, 'guarantor')
  let form4 = inputCreator(state.farmInfo, 'farmInfo')

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
        <Button displayName="Back" styles={{backgroundColor: 'green'}} />
        <hr />

        <form action="" onSubmit={formHandler} style={{padding: '2rem'}}>
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, 'toggle1')}>
              <h2>Personnel Information</h2>
              <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.toggle1}>{form}</div>
          </fieldset>

          <hr />
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, 'toggle2')}>
              <h2>Family</h2> <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.toggle2}>{form2}</div>
          </fieldset>

          <hr />
          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, 'toggle3')}>
              <h2>Guarantor</h2> <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.toggle3}>{form3}</div>
          </fieldset>
          <hr />

          <fieldset>
            <DivToggle onClick={toggleHandler.bind(this, 'toggle4')}>
              <h2>Farm Information</h2> <i className="fas fa-angle-double-down fa-2x" />
            </DivToggle>
            <div hidden={stateToggle.toggle4}>{form4}</div>
          </fieldset>

          <Button displayName="Add Farmer" type="submit" />
        </form>
      </section>
    </div>
  )
}

export default AddFarmer

/** @format */

import React from 'react'
import {useState} from 'react'
import {registrationHandler, getToken} from '../../../utils/handlers/authenticationHandlers'
import AddStaffForm from './AddStaffForm'
import validateAddStaffForm from './AddStaffValidation'

function AddStaff() {
  const [state, updateState] = useState({
    username: '',
    password: '',
    isAdmin: false,
    errors: {},
    createAccount: false,
    message: '',
  })

  const handleChange = (e, {name, value}) => {
    updateState(prevState => ({
      ...prevState,
      [name]: value,
      message: '',
      errors: {},
    }))
  }

  const checkboxChange = (e, {name, checked}) => {
    updateState(prevState => ({...prevState, isAdmin: checked}))
  }

  const handleSubmit = async () => {
    updateState(prevState => {
      return {
        ...prevState,
        createAccount: true,
      }
    })

    const credential = {
      username: state.username,
      password: state.password,
    }

    const {errors, isValid} = await validateAddStaffForm(credential)

    if (!isValid) {
      return updateState(prevState => ({
        ...prevState,
        errors,
        createAccount: false,
      }))
    }

    const response = await registrationHandler({
      username: state.username,
      password: state.password,
      isAdmin: state.isAdmin,
      token: getToken(),
    })

    if (Array.isArray(response)) {
      const [errors] = response
      delete errors.key
      return updateState(prevState => ({
        ...prevState,
        createAccount: true,
        errors: [errors],
      }))
    } else if (response && response.message === 'username already exists') {
      return updateState(prevState => ({
        ...prevState,
        createAccount: true,
        errors: [response],
      }))
    } else if (response === 'New user created') {
      return updateState(prevState => ({
        ...prevState,
        message: 'New user created',
        username: '',
        password: '',
        isAdmin: false,
        errors: {},
        createAccount: false,
      }))
    }
  }

  return (
    <AddStaffForm
      state={state}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      checkboxChange={checkboxChange}
    />
  )
}

export default AddStaff

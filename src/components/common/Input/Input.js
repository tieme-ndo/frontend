/** @format */
import React from 'react'
import styled from 'styled-components'

const Input = props => {
  const {
    type,
    elementType,
    name,
    changeHandler,
    value,
    styles,
    labelName,
    elementConfig,
    checked,
    selected,
    data,
  } = props
  const TextField = styled.label`
    input,
    select {
      font-size: 1.6rem;
      outline: none;
      display: block;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      padding: 0.5rem;
      width: 100%;
      border-radius: 0.3rem;
      border: 0.07rem solid;
      ${styles}
    }
  `
  let inputElement = null
  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e)=>changeHandler(e, data)}
          checked={checked}
        />
      )
      break
    case 'checkbox':
      inputElement = (
        <>
          {elementConfig.options.map(option => (
            <label key={option}>
              {option}
              <input
                type={type}
                name={name}
                value={option}
                onChange={(e)=>changeHandler(e, data)}
                checked={selected.indexOf(option) > -1}
              />
            </label>
          ))}
        </>
      )
      break
    case 'select':
      inputElement = (
        <select value={value} onChange={(e)=>changeHandler(e, data)} name={name}>
          {elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      )
      break
    default:
  }
  return (
    <label htmlFor="">
      {labelName}
      {inputElement}
    </label>
  )
}

export default Input

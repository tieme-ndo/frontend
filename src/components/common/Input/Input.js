/** @format */

import React from 'react'
import styled from 'styled-components'

const input = props => {
  const {type, name, value, placeholder, required, minLength, maxLength} = props
  const Input = styled.input`
    font-size: 1.6rem;
    outline: none;
    display: block;
    margin-bottom: 2rem;
    padding: .5rem;
    width: 100%;
    border-radius: 0.3rem;
    border: 0.07rem solid;
  `
  return (
    <Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
    />
  )
}

export default input

/** @format */

import React from 'react'
import styled from 'styled-components'
import {Option} from './Options'

const select = props => {
  const {name, options} = props
  const Select = styled.select`
    font-size: 1.6rem;
    outline: none;
    display: block;
    margin-top: .5rem;
    margin-bottom: 2rem;
    padding: 0.5rem;
    width: 30%;
    border-radius: 0.3rem;
    border: 0.07rem solid;
  `

  
  return (
    <Select name={name}>
      {Option[options].map(elem => (
        <option key={elem.value} value={elem.value}>
          {elem.displayValue}
        </option>
      ))}
    </Select>
  )
}

export default select

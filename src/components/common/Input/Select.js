/** @format */

import React from 'react'
import styled from 'styled-components'

const select = props => {
  const {name, options} = props
  const Select = styled.select`
    font-size: 1.6rem;
    outline: none;
    display: block;
    margin-bottom: 2rem;
    padding: 0.5rem;
    width: 30%;
    border-radius: 0.3rem;
    border: 0.07rem solid;
  `

  const Option = {
    title_Options: [
      {
        value: 'Miss',
        displayValue: 'Miss',
      },
      {
        value: 'Mrs',
        displayValue: 'Mrs',
      },
      {
        value: 'Mr',
        displayValue: 'Mr',
      },
      {
        value: 'Chief',
        displayValue: 'Chief',
      },
    ],
    gender_Options: [
      {
        value: 'Male',
        displayValue: 'Male',
      },
      {
        value: 'Female',
        displayValue: 'Female',
      },
      {
        value: 'Others',
        displayValue: 'Others',
      },
    ],

    marital_Options: [
      {
        value: 'Single',
        displayValue: 'Single',
      },
      {
        value: 'Married',
        displayValue: 'Married',
      },
      {
        value: 'Widowed',
        displayValue: 'Widowed',
      },
      {
        value: 'Divorced',
        displayValue: 'Divorced',
      },
    ],
    education_Options: [
      {
        value: 'Tertiary',
        displayValue: 'Tertiary',
      },
      {
        value: 'SHS',
        displayValue: 'SHS',
      },
      {
        value: 'JHS',
        displayValue: 'JHS',
      },
      {
        value: 'Primary',
        displayValue: 'Primary',
      },
      {
        value: 'Not Educated',
        displayValue: 'Not Educated',
      },
    ],
    income: [
      {
        value: 'Less than GHC 500',
        displayValue: 'Less than GHC 500',
      },
      {
        value: '501 to GHC 1,000',
        displayValue: '501 to GHC 1,000',
      },
      {
        value: 'More than GHC 1,000',
        displayValue: 'More than GHC 1,000',
      }
    ],
  }
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

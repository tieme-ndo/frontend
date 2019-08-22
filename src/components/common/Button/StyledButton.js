/** @format */

import React from 'react'
import styled from 'styled-components'

const button = props => {
  const {handler, displayName, disabled, styles} = props
  const Button = styled.button`
    outline: 0;
    padding: .5rem;
    border-radius: .5rem;
    font-size: 1.6rem;
    ${styles}
  `
  return (
    <Button onClick={handler} disabled={disabled}>
      {displayName}
    </Button>
  )
}

export default button

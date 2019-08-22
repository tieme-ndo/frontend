/** @format */

import React from 'react'
import styled from 'styled-components'

const button = props => {
  const {handler, displayName, disabled, styles} = props
  const Button = styled.button`
    outline: 0;
    ${styles};
  `
  return (
    <Button onClick={handler} disabled={disabled}>
      {displayName}
    </Button>
  )
}

export default button

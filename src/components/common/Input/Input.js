import React from 'react'
import { Input as SemanticInput, Dropdown, Form, Container, Checkbox } from 'semantic-ui-react'
const Input = props => {
  const {
    type,
    elementType,
    name,
    changeHandler,
    value,
    labelName,
    elementConfig,
    checked,
    selected,
    data,
    placeholder,
    elementConfigObj
  } = props;
  
  let inputElement = null
  switch (elementType) {
    case 'input':
      inputElement = (
        <SemanticInput
          type={type}
          name={name}
          value={value}
          onChange={e => changeHandler(e, data, type)}
          checked={checked}
        />
      );
      break
    case 'checkbox':
      inputElement = (
        <>
          {elementConfig.options.map((option, index) => (
              <Checkbox
                key={index}
                name={name}
                type={type}
                label={<label>{option}</label>}
                value={option}
                onChange={e => changeHandler(e, data, type)}
                checked={selected.indexOf(option) > -1}
              />
          ))}
        </>
      );
      break
    case 'select':
      inputElement = (
        <Dropdown
          selection
          placeholder={placeholder}
          onChange={e => changeHandler(e, data, elementType, elementConfigObj)}
          options={elementConfig.options}
          data-name={name}
          value={value}
        />
      );
      break
    default:
  }
  return (
    <Container fluid>
        <label>
          {labelName}
        </label>
        <br/>
         {inputElement}
    </Container>
  
  )
}

export default Input

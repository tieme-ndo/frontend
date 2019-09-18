import React from 'react';
import {
  Input as SemanticInput,
  Dropdown,
  Checkbox,
  Form
} from 'semantic-ui-react';
import { ImageInputContainer } from './ImageInputContainer';
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

  let inputElement = null;
  switch (elementType) {
    case 'input':
      
      if (type === 'file' && name === 'image_url') {
        inputElement = (
          <>
            <ImageInputContainer>
              <input name={name} type="file" onChange={e => changeHandler(e, data, type)} />
              <img
                // Prevent empty image from being visible when no image is uploaded
                style={{ opacity: !props.imageUrl ? 0 : 1 }}
                src={props.imageUrl}
                alt={props.imgAltText}
              />
            </ImageInputContainer>
            <label style={{ textAlign: 'center' }}>{labelName}</label>
          </>
        );
      } else {
        inputElement = (
          <SemanticInput
            fluid
            type={type}
            name={name}
            value={value}
            onChange={e => changeHandler(e, data, type)}
            checked={checked}
          />
        );
      }
      break;
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
              style={{ width: '33.3%', padding: '14px 0' }}
            />
          ))}
        </>
      );
      break;
    case 'select':
      inputElement = (
        <Dropdown
          fluid
          selection
          placeholder={placeholder}
          onChange={e => changeHandler(e, data, elementType, elementConfigObj)}
          options={elementConfig.options}
          data-name={name}
          value={value}
        />
      );
      break;
    default:
  }
  return (
    <Form.Field style={{ marginBottom: '16px' }}>
      { name !== 'image_url' && <label>{labelName}</label> }
      {inputElement}
    </Form.Field>
  );
};

export default Input;

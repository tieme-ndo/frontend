import React from 'react'
import classes from  "./Input.module.css";
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
  } = props;
  
  let inputElement = null
  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          type={type}
          className={classes.GeneralStyle}
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
            <label key={option} style={{padding: '10px'}}>
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
        <select value={value} onChange={(e)=>changeHandler(e, data)} name={name} className={classes.selectStyle}>
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
    <div>
        <label htmlFor="" style={{display:'block'}}>
      {labelName}
    </label>
         {inputElement}
    </div>
  
  )
}

export default Input

import React, { useRef, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import './Digit.css';

const BACKSPACE_BUTTON = 8;

const Digit = props => {
  const inputElement = useRef(null);

  const handleChangeDigit = event => {
    props.handleChange({
      value: validateDigit(event.target.value),
      index: props.digit.index
    });
  };

  const validateDigit = value => {
    value = parseInt(value.replace(/\D/g, ''), 10);
    return Number.isNaN(value) || value === ''
      ? ''
      : value >= 0 && value <= 9
      ? value
      : value % 10;
  };

  const handleDeleteDigit = event => {
    if (event.keyCode === BACKSPACE_BUTTON) {
      props.handleDelete(props.digit);
    }
  };

  useEffect(() => {
    if (props.isFocused) {
      inputElement.current.focus();
    }
  });

  return (
    <Input
      ref={inputElement}
      value={props.digit.value}
      onChange={handleChangeDigit}
      onKeyDown={handleDeleteDigit}
    />
  );
};

export default Digit;

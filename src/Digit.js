import React, { useRef, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import './Digit.css';

const BACKSPACE_BUTTON = 8;

const Digit = props => {
  const inputElement = useRef(null);

  const handleDigitChange = event => {
    const input = event.target.value.replace(/\D/g, '');
    const value = input && parseInt(input, 10);
    props.updateDigit({
      index: props.digit.index,
      value: validateAndNormalize(value)
    });
  };

  const validateAndNormalize = value =>
    Number.isNaN(value) || value === ''
      ? ''
      : value >= 0 && value <= 9
      ? Math.floor(value)
      : Math.abs(value % 10);

  const handleDeleteDigit = event => {
    if (event.keyCode === BACKSPACE_BUTTON) {
      props.handleDelete();
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
      onChange={handleDigitChange}
      onKeyDown={handleDeleteDigit}
    />
  );
};

export default Digit;

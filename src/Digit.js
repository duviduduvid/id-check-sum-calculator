import React, { useRef, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import './Digit.css';

const Digit = props => {

  const inputElement = useRef(null);

  const handleDigitChange = event => {
    const input = event.target.value;
    let value = input && parseInt(input, 10); 
    props.updateDigit(props.digit.index, validateAndNormalize(value));
  };

  const validateAndNormalize = value => (  
    Number.isNaN(value) || value === '' ?  '' :
      (value >= 0 && value <= 9) ? Math.floor(value) : Math.abs(value % 10)
  );

  useEffect(() => {
    if (props.digit.isFocused) {
      inputElement.current.focus();
    }
  });

  return (
      <Input 
        ref={inputElement}
        value={props.digit.value} 
        onChange={handleDigitChange}
      />
  );
}

export default Digit;
import React from 'react';
import { Input } from 'semantic-ui-react';
import './Digit.css';

const Digit = props => {

  const handleDigitChange = event => {
    const input = event.target.value;
    let value = input && parseInt(input, 10); 
    props.updateDigit(props.digit.index, validateAndNormalize(value));
  };

  const validateAndNormalize = value => (  
    Number.isNaN(value) || value === '' ?  '' :
      (value >= 0 && value <= 9) ? Math.floor(value) : Math.abs(value % 10)
  );

  return (
      <Input
        value={props.digit.value} 
        onChange={handleDigitChange}
      />
  );
}

export default Digit;
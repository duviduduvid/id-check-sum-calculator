import React from 'react';
import { Input, Segment } from 'semantic-ui-react';

const style = {
  input: {
    width: '3em',
  }
}

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
    <Segment>
      <Input style={style.input}
        value={props.digit.value} 
        onChange={handleDigitChange}
      />
    </Segment>
  );
}

export default Digit;
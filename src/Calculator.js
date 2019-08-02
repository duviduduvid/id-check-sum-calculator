import React, { useState, useEffect } from 'react';
import calculateIsrCheckSum from './CalculatorLogic';
import './Calculator.css';

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
    <input 
      className="digit"   
      value={props.digit.value} 
      onChange={handleDigitChange}
    />
  );
}

const IdDigits = props => (
  <div className="digits-container">
    {props.digits.map(digit => (
      <div key={digit.index}>
        <Digit 
          digit={digit}
          updateDigit={props.updateDigit}
        />
      </div>
  ))}
  </div>
);

function Calculator() {
  const initialDigits = Array(8).fill('').map((value, index) => ({value, index}));
  const initialCheckSum = 'Enter Digits';

  const [digits, setDigits] = useState(initialDigits);
  const [checkSum, setCheckSum] = useState(initialCheckSum);

  const updateDigit = (index, newDigitValue) => {
    setDigits(digits.map(digit => (digit.index === index ? {index, value: newDigitValue} : digit)));
  };

  useEffect(() => {
    const isAllDigitsSet = () => 
      !digits.some(digit => digit.value === '');

    setCheckSum(isAllDigitsSet() ? calculateIsrCheckSum(digits.map(digit => digit.value)) : initialCheckSum);
  }, [digits]);

  return (
    <div>
      <h1>ID Control Digit Calculator</h1>
      <div>
        <IdDigits 
          digits={digits}
          updateDigit={updateDigit}
        />
      </div>
      <div className="digit">
        {checkSum}
      </div>
    </div>
  );
}

export default Calculator;

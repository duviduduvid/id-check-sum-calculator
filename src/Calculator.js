import React, { useState, useEffect } from 'react';
import { Grid, Label } from 'semantic-ui-react';
import IdDigits from './IdDigits';
import calculateIsrCheckSum from './CalculatorLogic';


function Calculator() {
  const initialDigits = Array(8).fill('').map((value, index) => ({value, index}));
  const initialCheckSum = '?';

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
      <Grid centered divided='vertically'>
        <Grid.Row>
          <IdDigits 
            digits={digits}
            updateDigit={updateDigit}
          />
        </Grid.Row>

        <Grid.Row>
          <Label circular size='massive'>
            {checkSum}
          </Label>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Calculator;

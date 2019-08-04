import React, { useState, useEffect } from 'react';
import { Segment, Grid, Label, Divider, Header, Icon } from 'semantic-ui-react';
import IdDigits from './IdDigits';
import calculateIsrCheckSum from './CalculatorLogic';
import './Calculator.css';


function Calculator() {
  const initialDigits = Array(8).fill('').map((value, index) => {
    return index === 0 ? ({value, index, isFocused: true}) : ({value, index, isFocused: false});
  });
  const initialCheckSum = '?';

  const [digits, setDigits] = useState(initialDigits);
  const [checkSum, setCheckSum] = useState(initialCheckSum);

  const updateDigit = (index, newDigitValue) => {
    const getNextFocusedInput = () => (
      newDigitValue !== '' ?
        (index + 1 < 8 ? index + 1 : index) : (index - 1 >= 0 ? index - 1: index)
    );

    const newDitigs = digits.map(digit => {
      if (digit.index === index) {
        return ({...digit, value: newDigitValue, isFocused: false});
      }
      else if (digit.index === getNextFocusedInput()) {
        return ({...digit, isFocused: true});
      }
      else {
        return ({...digit, isFocused: false});
      }
    });
    
    setDigits(newDitigs);
  };

  useEffect(() => {
    const isAllDigitsSet = () => 
      !digits.some(digit => digit.value === '');

    setCheckSum(isAllDigitsSet() ? 
      calculateIsrCheckSum(digits.map(digit => digit.value)) : initialCheckSum);
  }, [digits]);

  return (
    <div id='calculator'>
      <Segment raised padded='very' color='teal'>
        <Header id='calculator-header' as='h2' icon textAlign='center'>
          <Icon name='calculator' circular color='teal'/>
          <Header.Content>ID Control Digit Calculator</Header.Content>
        </Header>

        <Grid centered>
          <Grid.Row>
            <IdDigits 
              digits={digits}
              updateDigit={updateDigit}
            />
          </Grid.Row>
        </Grid>

        <Divider horizontal>
          <Header as='h3'>
            Result
          </Header>
        </Divider>

        <Segment basic textAlign='center'>
            <Label circular size='massive' color='teal'>
              {checkSum}
            </Label>
        </Segment>
      </Segment>
    </div>

  );
}

export default Calculator;

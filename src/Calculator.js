import React, { useState, useEffect } from 'react';
import { Segment, Grid, Label, Divider, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { focusNextDigit, focusPreviousDigit } from './action';
import IdDigits from './IdDigits';
import calculateIsrCheckSum from './CalculatorLogic';
import './Calculator.css';

const Calculator = props => {
  const initialDigits = Array(8)
    .fill('')
    .map((value, index) => ({ value, index }));
  const initialCheckSum = '?';

  const [digits, setDigits] = useState(initialDigits);
  const [checkSum, setCheckSum] = useState(initialCheckSum);

  const updateDigit = (index, newDigitValue) => {
    setDigits(
      digits.map(digit =>
        digit.index === index ? { index, value: newDigitValue } : digit
      )
    );
    if (newDigitValue !== '') {
      props.focusNextDigit();
    } else {
      props.focusPreviousDigit();
    }
  };

  useEffect(() => {
    const isAllDigitsSet = () => !digits.some(digit => digit.value === '');

    setCheckSum(
      isAllDigitsSet()
        ? calculateIsrCheckSum(digits.map(digit => digit.value))
        : initialCheckSum
    );
  }, [digits]);

  return (
    <div id="calculator">
      <Segment raised padded="very" color="teal">
        <Header id="calculator-header" as="h2" icon textAlign="center">
          <Icon name="calculator" circular color="teal" />
          <Header.Content>ID Control Digit Calculator</Header.Content>
        </Header>

        <Grid centered>
          <Grid.Row>
            <IdDigits digits={digits} updateDigit={updateDigit} />
          </Grid.Row>
        </Grid>

        <Divider horizontal>
          <Header as="h3">Result</Header>
        </Divider>

        <Segment basic textAlign="center">
          <Label circular size="massive" color="teal">
            {checkSum}
          </Label>
        </Segment>
      </Segment>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  focusNextDigit: () => dispatch(focusNextDigit()),
  focusPreviousDigit: () => dispatch(focusPreviousDigit())
});

export default connect(
  null,
  mapDispatchToProps
)(Calculator);

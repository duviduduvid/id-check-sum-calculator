import React, { useState, useEffect } from 'react';
import { Segment, Grid, Label, Divider, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import IdDigits from './IdDigits';
import calculateIsrCheckSum from './CalculatorLogic';
import './Calculator.css';

const Calculator = props => {
  const digits = props.digits;
  const initialCheckSum = '?';
  const [checkSum, setCheckSum] = useState(initialCheckSum);

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
            <IdDigits />
          </Grid.Row>
        </Grid>

        <Divider horizontal>
          <Header as="h4">Result</Header>
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

const mapStateToProps = state => ({
  digits: state.digits
});

export default connect(mapStateToProps)(Calculator);

import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  setDigit,
  focusNextDigit,
  focusPreviousDigit
} from '../actions/action';
import Digit from './Digit';

export const IdDigits = ({
  digits,
  focusedDigit,
  setDigit,
  focusPreviousDigit
}) => (
  <Grid centered>
    <Grid.Row columns={8}>
      {digits.map(digit => (
        <Grid.Column key={digit.index}>
          <Digit
            digit={digit}
            isFocused={focusedDigit === digit.index}
            handleChange={setDigit}
            handleDelete={focusPreviousDigit}
          />
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

const mapStateToProps = state => ({
  focusedDigit: state.focusedDigit,
  digits: state.digits
});

const mapDispatchToProps = dispatch => ({
  setDigit: digit => {
    dispatch(setDigit(digit));
    if (digit.value !== '') {
      dispatch(focusNextDigit());
    }
  },
  focusPreviousDigit: digit => {
    dispatch(focusPreviousDigit(digit));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdDigits);

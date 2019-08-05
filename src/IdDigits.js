import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setDigit, focusNextDigit, focusPreviousDigit } from './action';
import Digit from './Digit';

const IdDigits = props => (
  <Grid centered>
    <Grid.Row columns={8}>
      {props.digits.map(digit => (
        <Grid.Column key={digit.index}>
          <Digit
            digit={digit}
            isFocused={props.focusedDigit === digit.index}
            updateDigit={props.updateDigit}
            handleDelete={props.moveFocusBack}
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
  updateDigit: digit => {
    dispatch(setDigit(digit));
    if (digit.value !== '') {
      dispatch(focusNextDigit());
    }
  },
  moveFocusBack: () => {
    dispatch(focusPreviousDigit());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdDigits);

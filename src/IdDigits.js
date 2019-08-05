import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
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
          />
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

const mapStateToProps = state => ({
  focusedDigit: state.focusedDigit
});

export default connect(mapStateToProps)(IdDigits);

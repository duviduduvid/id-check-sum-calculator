import React from 'react';
import { Grid } from 'semantic-ui-react';
import Digit from './Digit';

const IdDigits = props => (

  <Grid centered>
    <Grid.Row columns={8}>
      {props.digits.map(digit => (
        <Grid.Column key={digit.index}>
          <Digit 
            digit={digit}
            updateDigit={props.updateDigit}
          />
        </Grid.Column>
      ))}  
    </Grid.Row>
  </Grid>
  
);

export default IdDigits;
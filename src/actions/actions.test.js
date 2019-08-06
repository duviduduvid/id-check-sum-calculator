import {
  FOCUS_NEXT_DIGIT,
  FOCUS_PREVIOUS_DIGIT,
  SET_DIGIT
} from './actions-types';
import { focusNextDigit, focusPreviousDigit, setDigit } from './action';

describe('actions', () => {
  const digit = { value: '', index: 0 };
  let expectedAction = {};

  it('should create an action to move focus to the next digit', () => {
    expectedAction = { type: FOCUS_NEXT_DIGIT };
    expect(focusNextDigit()).toEqual(expectedAction);
  });

  it('should create an action to move focues to previous digit', () => {
    expectedAction = { type: FOCUS_PREVIOUS_DIGIT, payload: digit };
    expect(focusPreviousDigit(digit)).toEqual(expectedAction);
  });

  it('should create an action to set digit value', () => {
    expectedAction = { type: SET_DIGIT, payload: digit };
    expect(setDigit(digit)).toEqual(expectedAction);
  });
});

import reducer, { initialState } from './reducer';
import { replaceArrayItem } from './reducer-utils';
import {
  SET_DIGIT,
  FOCUS_NEXT_DIGIT,
  FOCUS_PREVIOUS_DIGIT
} from '../actions/actions-types';

describe('reducer', () => {
  let [state, expectedState] = [{ ...initialState }, { ...initialState }];

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle "FOCUS_NEXT_DIGIT" action', () => {
    state.digits = replaceArrayItem(state.digits, { value: '8', index: 0 }, 0);
    expectedState = { focusedDigit: 1, digits: state.digits };
    expect(reducer(state, { type: FOCUS_NEXT_DIGIT })).toEqual(expectedState);
  });

  it('should handle "FOCUS_PREVIOUS_DIGIT" action', () => {
    const deletedDigit = { value: '', index: 4 };
    state = {
      focusedDigit: 4,
      digits: replaceArrayItem(state.digits, { value: '5', index: 4 }, 4)
    };
    expectedState = {
      focusedDigit: 3,
      digits: replaceArrayItem(state.digits, deletedDigit, 4)
    };
    expect(
      reducer(state, { type: FOCUS_PREVIOUS_DIGIT, payload: deletedDigit })
    ).toEqual(expectedState);
  });

  it('should handle "SET_DIGIT" action', () => {
    const modifiedDigit = { value: '6', index: 4 };
    state.digits = replaceArrayItem(state.digits, { value: '', index: 4 }, 4);
    expectedState = {
      focusedDigit: 4,
      digits: replaceArrayItem(state.digits, modifiedDigit, 4)
    };
    expect(reducer(state, { type: SET_DIGIT, payload: modifiedDigit })).toEqual(
      expectedState
    );
  });
});

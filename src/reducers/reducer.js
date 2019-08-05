import {
  FOCUS_NEXT_DIGIT,
  FOCUS_PREVIOUS_DIGIT,
  SET_DIGIT
} from '../actions/actionsTypes';
import { incrementIndex, decrementIndex, replaceArrayItem } from './reducer-utils';

const initialState = {
  focusedDigit: 0,
  digits: Array(8)
    .fill('')
    .map((value, index) => ({ value, index }))
};

function reducer(state = initialState, action) {
  const previousIndex = state.focusedDigit;
  const previousDigits = state.digits;

  switch (action.type) {
    case FOCUS_NEXT_DIGIT:
      return {
        focusedDigit: incrementIndex(previousIndex),
        digits: previousDigits
      };
    case FOCUS_PREVIOUS_DIGIT:
      return {
        focusedDigit: decrementIndex(previousIndex),
        digits: previousDigits
      };
    case SET_DIGIT:
      const modifiedDigit = action.payload;
      const newDigits = replaceArrayItem(
        previousDigits,
        modifiedDigit,
        modifiedDigit.index
      );
      return {
        focusedDigit: modifiedDigit.index,
        digits: newDigits
      };
    default:
      return state;
  }
}

export default reducer;

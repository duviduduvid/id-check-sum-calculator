import {
  FOCUS_NEXT_DIGIT,
  FOCUS_PREVIOUS_DIGIT,
  SET_DIGIT
} from '../actions/actions-types';
import {
  incrementIndex,
  decrementIndex,
  replaceArrayItem
} from './reducer-utils';

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
      const deletedDigit = { value: '', index: action.payload.index };
      return {
        focusedDigit:
          action.payload.value === ''
            ? decrementIndex(previousIndex)
            : deletedDigit.index,
        digits: replaceArrayItem(
          previousDigits,
          deletedDigit,
          deletedDigit.index
        )
      };
    case SET_DIGIT:
      const modifiedDigit = action.payload;
      return {
        focusedDigit: modifiedDigit.index,
        digits: replaceArrayItem(
          previousDigits,
          modifiedDigit,
          modifiedDigit.index
        )
      };
    default:
      return state;
  }
}

export default reducer;

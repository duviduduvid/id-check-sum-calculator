import {
  FOCUS_NEXT_DIGIT,
  FOCUS_PREVIOUS_DIGIT,
  SET_DIGIT
} from './actionsTypes';

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

const replaceArrayItem = (array, itemToReplace, replaceAtIndex) =>
  array.map((item, index) => (index === replaceAtIndex ? itemToReplace : item));

const incrementIndex = previousIndex =>
  previousIndex + 1 < 8 ? previousIndex + 1 : previousIndex;
const decrementIndex = previousIndex =>
  previousIndex - 1 >= 0 ? previousIndex - 1 : previousIndex;
export default reducer;

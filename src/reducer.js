import { FOCUS_NEXT_DIGIT, FOCUS_PREVIOUS_DIGIT } from './actionsTypes';

const initialState = {
  focusedDigit: 0
};

function reducer(state = initialState, action) {
  const previousDigit = state.focusedDigit;

  switch (action.type) {
    case FOCUS_NEXT_DIGIT:
      return {
        focusedDigit: previousDigit + 1 < 8 ? previousDigit + 1 : previousDigit
      };
    case FOCUS_PREVIOUS_DIGIT:
      return {
        focusedDigit: previousDigit - 1 >= 0 ? previousDigit - 1 : previousDigit
      };
    default:
      return state;
  }
}

export default reducer;

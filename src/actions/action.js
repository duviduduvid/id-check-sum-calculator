import {
  FOCUS_NEXT_DIGIT,
  FOCUS_PREVIOUS_DIGIT,
  SET_DIGIT
} from './actionsTypes';

const focusNextDigit = () => ({ type: FOCUS_NEXT_DIGIT });
const focusPreviousDigit = () => ({ type: FOCUS_PREVIOUS_DIGIT });
const setDigit = payload => ({ type: SET_DIGIT, payload });

export { focusNextDigit, focusPreviousDigit, setDigit };

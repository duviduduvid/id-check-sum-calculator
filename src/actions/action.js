import {
  FOCUS_NEXT_DIGIT,
  FOCUS_PREVIOUS_DIGIT,
  SET_DIGIT
} from './actions-types';

const focusNextDigit = () => ({ type: FOCUS_NEXT_DIGIT });
const focusPreviousDigit = payload => ({ type: FOCUS_PREVIOUS_DIGIT, payload });
const setDigit = payload => ({ type: SET_DIGIT, payload });

export { focusNextDigit, focusPreviousDigit, setDigit };

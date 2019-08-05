import { FOCUS_NEXT_DIGIT, FOCUS_PREVIOUS_DIGIT } from './actionsTypes';

const focusNextDigit = () => ({ type: FOCUS_NEXT_DIGIT });
const focusPreviousDigit = () => ({ type: FOCUS_PREVIOUS_DIGIT });

export { focusNextDigit, focusPreviousDigit };

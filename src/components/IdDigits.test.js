import React from 'react';
import { shallow } from 'enzyme';
import { IdDigits } from './IdDigits';
import Digit from './Digit';

const initialDigits = Array(8)
  .fill('')
  .map((value, index) => ({ value, index }));
const actions = {
  setDigit: jest.fn(),
  focusPreviousDigit: jest.fn()
};
const props = {
  digits: initialDigits,
  focusedDigit: 0,
  ...actions
};

describe('IdDigits componenet', () => {
  it('should mount with empty digits and first digit focuesed', () => {
    const wrapper = shallow(<IdDigits {...props} />);
    expect(
      wrapper
        .find(Digit)
        .first()
        .props().isFocused
    ).toEqual(true);
  });
});

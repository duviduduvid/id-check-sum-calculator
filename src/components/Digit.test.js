import React from 'react';
import { mount } from 'enzyme';
import Digit from './Digit';

const actions = {
  handleChange: jest.fn(),
  handleDelete: jest.fn()
};

const testDigit = { index: 5, value: '9' };

const digitProps = {
  digit: testDigit,
  isFocused: true,
  ...actions
};

describe('Digit component', () => {
  const wrapper = mount(<Digit {...digitProps} />);
  const changeEvent = { target: { value: '4' } };
  const deleteEvent = { keyCode: 8 };

  it('renders Digit component', () => {
    expect(wrapper.props().isFocused).toEqual(true);
    expect(wrapper.find('input').props().value).toBe('9');
  });
  it('changes the value of the digit', () => {
    const expected = { index: testDigit.index, value: 4 };
    wrapper.find('input').simulate('change', changeEvent);
    expect(actions.handleChange).toBeCalledWith(expected);
  });
  it('delets the value of the digit', () => {
    wrapper.find('input').simulate('keydown', deleteEvent);
    expect(actions.handleDelete).toBeCalledWith(testDigit);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Calculator } from './Calculator';
import { Label } from 'semantic-ui-react';

describe('Calculator component', () => {
  it('should mount with empty result', () => {
    const wrapper = shallow(<Calculator />);
    const noResult = '<div class="ui teal massive circular label">?</div>';
    expect(wrapper.find(Label).html()).toBe(noResult);
  });
});

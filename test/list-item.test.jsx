import React from 'react';
import { shallow } from 'enzyme';

import ListItem from '../src/list-item';

describe('List item tests', () => {
  const defaultProps = {
    item: 'hello',
  };
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<ListItem {...defaultProps} />);
  });

  it('Should render with default cursor and li tag', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.find('li').exists()).toEqual(true);
    expect(wrapper.prop('style')).toMatchObject({ cursor: 'default' });
  });

  it('Should have the pointer cursor if onClick exists', () => {
    const newProps = {
      ...defaultProps,
      onClick: () => {},
    };

    wrapper = shallow(<ListItem {...newProps} />);

    expect(wrapper.prop('style')).toEqual({ cursor: 'pointer' });
  });

  it('Should use dd tag if tag is dt', () => {
    const newProps = {
      ...defaultProps,
      tag: 'dt',
    };

    wrapper = shallow(<ListItem {...newProps} />);

    expect(wrapper.find('dd').exists()).toEqual(true);
  });
});

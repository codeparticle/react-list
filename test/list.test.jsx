import React from 'react';
import { shallow } from 'enzyme';

import List from '../src/list';

describe('List tests', () => {
  const defaultProps = {
    listItems: [{
      item: 'TM-05',
    }],
  };
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<List {...defaultProps} />);
  });

  it('Should render', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('Should render without a header, and using ul and ListItem when only passing in items', () => {
    expect(wrapper.find('h1').exists()).toEqual(false);
    expect(wrapper.find('ul').exists()).toEqual(true);
    expect(wrapper.find('ListItem').length).toEqual(1);
    expect(wrapper.prop('style')).toEqual({ display: 'flex' });
  });

  it('Should render the itemRenderer if it exists', () => {
    const newProps = {
      ...defaultProps,
      itemRenderer: () => <div />,
    };

    wrapper = shallow(<List {...newProps} />);

    expect(wrapper.find('ListItem').exists()).toEqual(false);
    expect(wrapper.find('itemRenderer').exists()).toEqual(true);
  });

  it('Should render the title if it exists and vice versa', () => {
    const newProps = {
      ...defaultProps,
      title: 'Senor',
    };

    wrapper = shallow(<List {...newProps} />);

    expect(wrapper.find('h1').exists()).toEqual(true);
  });

  it('Should add the inline styles if present', () => {
    const newProps = {
      ...defaultProps,
      containerStyles: {
        background: 'red',
      },
    };

    wrapper = shallow(<List {...newProps} />);

    expect(wrapper.prop('style')).toEqual({
      display: 'flex',
      background: 'red',
    });
  });
});

import React from 'react';
import { mount, shallow } from 'enzyme';
import Tooltip from './index';

describe('DatePicker', () => {
  // snapshot testing
  test('Snapshot tests right replacement', () => {
    const wrapper = shallow(<Tooltip title="test"  placement="right" trigger="click"/>);
    wrapper.simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests left replacement', () => {
    const wrapper = shallow(<Tooltip title="test"  placement="left" trigger="click"/>);
    wrapper.simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests up replacement', () => {
    const wrapper = shallow(<Tooltip title="test"  placement="up" trigger="click"/>);
    wrapper.simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests down replacement', () => {
    const wrapper = shallow(<Tooltip title="test"  placement="down" trigger="click"/>);
    wrapper.simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests hover', () => {
    const wrapper = shallow(<Tooltip title="test"  placement="right" trigger="hover"/>);
    wrapper.simulate("hover");
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests focus', () => {
    const wrapper = shallow(<Tooltip title="test"  placement="right" trigger="focus"/>);
    wrapper.simulate("focus");
    expect(wrapper).toMatchSnapshot();
  });

  // test interactions
});

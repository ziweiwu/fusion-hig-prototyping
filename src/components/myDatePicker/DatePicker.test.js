import React from 'react';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import DatePicker from './index';

const fn = jest.fn();

describe('DatePicker', () => {
  // snapshot testing
  test('Snapshot tests regular view', () => {
    const wrapper = shallow(<DatePicker selected={moment('2017-09-15 09:30:00')} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests portal view', () => {
    const wrapper = shallow(<DatePicker selected={moment('2017-09-15 09:30:00')} withPortal />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests disabled view', () => {
    const wrapper = shallow(<DatePicker selected={moment('2017-09-15 09:30:00')} disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  // component render testing
  it('Render the dayPicker component correctly.', () => {
    const wrapper = shallow(<DatePicker />);
    expect(wrapper).toHaveLength(1);
  });

  it('Render the dayPicker input field correctly.', () => {
    const wrapper = mount(<DatePicker />);
    expect(wrapper.find('TextField')).toHaveLength(1);
  });

  it('Render the label correctly.', () => {
    const wrapper = mount(<DatePicker label="foo" />);
    expect(wrapper.instance().props.label).toBe('foo');
  });

  it('Render the placeholder correctly.', () => {
    const wrapper = mount(<DatePicker placeholderText="bar" />);
    expect(wrapper.instance().props.placeholderText).toBe('bar');
  });


  // test interactions
  it('Disable calender popper when disable is selected', () => {
    const wrapper = mount(<DatePicker disabled />);
    const input = wrapper.find('TextField');
    input.props().onFocus();
    expect(wrapper.find('.react-datepicker-popper')).toHaveLength(0);
  });

  it('Expect clear button to exist if isClearable is selected', () => {
    const wrapper = mount(<DatePicker isClearable />);
    expect(wrapper.find('TextField').props().isClearable).toBeTruthy;
  });
});


import React from "react";
import {mount, shallow} from "enzyme";
import moment from "moment";
import DatePicker from "./DatePicker";
import propagateToGlobal from "./test_setup"
import sinon from 'sinon';

propagateToGlobal();

const fn= jest.fn();

describe("DatePicker", () => {
  //snapshot testing
  test('Snapshot tests regular view', () => {
    const wrapper = shallow(<DatePicker selected={moment("2017-09-15 09:30:00")}/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests portal view', () => {
    const wrapper = shallow(<DatePicker selected={moment("2017-09-15 09:30:00")} withPortal/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests disabled view', () => {
    const wrapper = shallow(<DatePicker selected={moment("2017-09-15 09:30:00")} disabled/>);
    expect(wrapper).toMatchSnapshot();
  });

  //component testing
  it("Render the dayPicker component correctly.", () => {
    const wrapper = shallow(<DatePicker/>);
    expect(wrapper).toHaveLength(1);
  });

  it("Render the dayPicker input field correctly.", () => {
    const wrapper = mount(<DatePicker/>);
    expect(wrapper.find("TextField").length).toBe(1);
  });

  it("Render the label Correctly.", () => {
    const wrapper = mount(<DatePicker label="foo"/>);
    expect(wrapper.instance().props.label).toBe("foo");
  });

  it("Render the placeholder Correctly.", () => {
    const wrapper = mount(<DatePicker placeholderText="bar"/>);
    expect(wrapper.instance().props.placeholderText).toBe("bar");
  });

  //test interactions
  it("Show the calendar when focusing on the date input", () => {
    const wrapper = mount(<DatePicker/>);
    const input = wrapper.find("TextField");
    input.props().onFocus();
    expect(wrapper.find(".react-datepicker-popper").length).toBe(1);
  });

  //somehow cannot find input element
  it("Show the calendar when focusing on the date input using simulate", () => {
    const wrapper = mount(<DatePicker/>);
    const input = wrapper.find("input");
    input.simulate("focus");
    expect(wrapper.find(".react-datepicker-popper").length).toBe(1);
  });

  it("Disable calender popper when disable is selected", () => {
    const wrapper = mount(<DatePicker disabled/>);
    const input = wrapper.find("TextField");
    input.props().onFocus();
    expect(wrapper.find(".react-datepicker-popper").length).toBe(0);
  });

});




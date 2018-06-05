import React from "react";
import {mount, shallow} from "enzyme";
import moment from "moment";
import DatePicker from "./DatePicker";
import sinon from "sinon";
import TestWrapper from "./TestWrapper"
import propagateToGlobal from "./test_setup"

//propagate DOM for testing with mount
propagateToGlobal();

describe("DatePicker", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  //snapshot testing
  test('Date Picker passes snapshot testing', () => {
    const wrapper = shallow(<DatePicker selected={moment("2017-09-15 09:30:00")}/>);
    expect(wrapper).toMatchSnapshot();
  });

  //interaction testing
  it("Render the dayPicker component correctly.", () => {
    const wrapper = shallow(<DatePicker/>);
    expect(wrapper).toHaveLength(1);
  });

  it("Render the label Correctly.", () => {
    const wrapper = shallow(<DatePicker label="foo"/>);
    expect(wrapper.instance().props.label).toEqual("foo");
  });

  it("Render the placeholder text Correctly.", () => {
    const wrapper = shallow(<DatePicker placeholderText="foo"/>);
    expect(wrapper.instance().props.placeholderText).toEqual("foo");
  });

  it("Show the calendar when focusing on the date input", () => {
    const wrapper = mount(<DatePicker/>);
    wrapper.simulate("focus");
    expect(wrapper.find("Calender").exists()).toEqual(true);
  });

  it("Calender does not show if disable is selected", () => {
    const wrapper = mount(<DatePicker disabled/>);
    wrapper.simulate("focus");
    expect(wrapper.find("Calender").exists()).toEqual(false);
    });
});




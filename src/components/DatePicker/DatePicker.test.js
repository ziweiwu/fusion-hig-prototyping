import React from "react";
import ReactDOM from "react-dom"
import TestUtils from "react-dom/test-utils";
import {mount, shallow} from "enzyme";
import DatePicker from "./DatePicker";
import sinon from "sinon";
import TestWrapper from "./TestWrapper"
import propagateToGlobal from "./test_setup"

propagateToGlobal();

describe("DatePicker", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("Render the DayPicker Component.", () => {
    const datePicker = shallow(<DatePicker/>);
    expect(datePicker).toHaveLength(1);
  });

  it("Render the Props Correctly.", () => {
    const datePicker = shallow(<DatePicker label="foo"/>);
    expect(datePicker.instance().props.label).toEqual("foo");
  });

  it("Show the calendar when focusing on the date input", () => {
    const datePicker = TestUtils.renderIntoDocument(<DatePicker />);
    const dateInput = datePicker.input;
    TestUtils.Simulate.focus(ReactDOM.findDOMNode(dateInput));
    expect(datePicker.Calender).exists;
  });

  it("Does not show calender when Disable props is selected", ()=> {
    const datePicker = TestUtils.renderIntoDocument(<DatePicker disabled/>);
    const dateInput = datePicker.input;
    TestUtils.Simulate.click(ReactDOM.findDOMNode(dateInput));
    expect(datePicker.state.open).toBe(false)
  });

  it("keep the calendar shown when clicking the calendar", () => {
    const datePicker = mount(<DatePicker/>);
    datePicker.find("input").simulate("focus");
    datePicker.find("Calender").simulate("click");
    const calender = datePicker.find("Calender");
    expect(calender).exists;
  });


});




import App from './App';
import React from "react";
import {mount, shallow} from "enzyme";
//import propagateToGlobal from "./components/myDatePicker/test_setup"
//propagateToGlobal();

describe("App", () => {
  //snapshot testing
  test('App snapshot matches', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

  //component testing
  it("Render the App component correctly.", () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});
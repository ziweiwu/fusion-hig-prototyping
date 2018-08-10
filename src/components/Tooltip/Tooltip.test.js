import React from "react";
import { shallow } from "enzyme";
import Tooltip from "./index";

describe("DatePicker", () => {
  // snapshot testing
  test("Snapshot tests right replacement", () => {
    const wrapper = shallow(
      <Tooltip title="test" anchorPoint="right" trigger="click">
        <button>tooltip</button>
      </Tooltip>
    );
    wrapper.simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  test("Snapshot tests left replacement", () => {
    const wrapper = shallow(
      <Tooltip title="test" anchorPoint="left" trigger="click">
        <button>tooltip</button>
      </Tooltip>
    );
    wrapper.simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  test("Snapshot tests hover", () => {
    const wrapper = shallow(
      <Tooltip
        title="test"
        anchorPoint="left"
        trigger="hover"
        mouseEnterDelay={0}
      >
        <button>tooltip</button>
      </Tooltip>
    );
    wrapper.simulate("hover");
    expect(wrapper).toMatchSnapshot();
  });

  test("Snapshot tests focus", () => {
    const wrapper = shallow(
      <Tooltip title="test" anchorPoint="left" trigger="focus">
        <button>tooltip</button>
      </Tooltip>
    );
    wrapper.simulate("hover");
    expect(wrapper).toMatchSnapshot();
  });

  // test interactions
});

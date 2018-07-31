import React from 'react';
import {shallow} from 'enzyme';
import Tooltip from './index';

describe('Tooltip', () => {
  // snapshot testing
  test('Snapshot tests right placement', () => {
    const wrapper = shallow(
      <Tooltip title="test" anchorPoint="right" trigger="click">
        <button>
          tooltip
        </button>
      </Tooltip>,
    );
    wrapper.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests left placement', () => {
    const wrapper = shallow(
      <Tooltip title="test" anchorPoint="left" trigger="click">
        <button>
          tooltip
        </button>
      </Tooltip>,
    );
    wrapper.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests top placement', () => {
    const wrapper = shallow(
      <Tooltip title="test" anchorPoint="top" trigger="click">
        <button>
          tooltip
        </button>
      </Tooltip>,
    );
    wrapper.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests bottom placement', () => {
    const wrapper = shallow(
      <Tooltip title="test" anchorPoint="bottom" trigger="click">
        <button>
          tooltip
        </button>
      </Tooltip>,
    );
    wrapper.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests tooltip with description', () => {
    const wrapper = shallow(
      <Tooltip title="test" description="test" anchorPoint="bottom" trigger="click">
        <button>
          tooltip
        </button>
      </Tooltip>,
    );
    wrapper.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests tooltip with link', () => {
    const wrapper = shallow(
      <Tooltip
        title="test"
        description="test"
        linkTitle="link"
        linkURL="www.google.com"
        anchorPoint="bottom"
        trigger="click"
      >
        <button>
          tooltip
        </button>
      </Tooltip>,
    );
    wrapper.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests tooltip with html content', () => {
    const wrapper = shallow(
      <Tooltip
        title="test"
        content={(
          <div>
            test
          </div>
        )}
        anchorPoint="bottom"
        trigger="click"
      >
        <button>
          tooltip
        </button>
      </Tooltip>,
    );
    wrapper.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests hover', () => {
    const wrapper = shallow(<Tooltip title="test" anchorPoint="bottom" trigger="hover" mouseEnterDelay={0}>
      <button>
        tooltip
      </button>
    </Tooltip>);
    wrapper.simulate('hover');
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests focus', () => {
    const wrapper = shallow(<Tooltip title="test" anchorPoint="left" trigger="focus">
      <button>
        tooltip
      </button>
    </Tooltip>);
    wrapper.simulate('focus');
    expect(wrapper).toMatchSnapshot();
  });
});

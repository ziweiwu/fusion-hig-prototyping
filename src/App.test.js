import App from './App';
import React from 'react';
import { mount, shallow } from 'enzyme';

describe('App', () => {
  // snapshot testing
  test('App snapshot matches', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

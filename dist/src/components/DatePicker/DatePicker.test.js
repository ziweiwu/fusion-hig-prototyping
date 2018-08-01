'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DatePicker', function () {
  // snapshot testing
  test('Snapshot tests regular view', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { selected: (0, _moment2.default)('2017-09-15 09:30:00') }));
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests disabled view', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { selected: (0, _moment2.default)('2017-09-15 09:30:00'), disabled: true }));
    expect(wrapper).toMatchSnapshot();
  });

  test('Snapshot tests calender Popper', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { selected: (0, _moment2.default)('2017-09-15 09:30:00'), hidePopper: false }));
    expect(wrapper).toMatchSnapshot();
  });

  // test interactions
});

//# sourceMappingURL=DatePicker.test.js.map
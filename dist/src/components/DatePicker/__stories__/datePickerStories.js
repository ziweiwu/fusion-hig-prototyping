'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _index = require('./stories/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Date Picker Stories
 */
var storiesOfDatePicker = (0, _react3.storiesOf)('Date Picker', module);
storiesOfDatePicker.addDecorator(_addonKnobs.withKnobs);

// default view
storiesOfDatePicker.add('Default View', function () {
  var label = (0, _addonKnobs.text)('Label', 'Date picker ');
  var showLabel = (0, _addonKnobs.boolean)('Show label', true);
  var instruction = (0, _addonKnobs.text)('Instruction', 'Please choose a date ');
  var showInstruction = (0, _addonKnobs.boolean)('Show instruction', false);
  var showIcon = (0, _addonKnobs.boolean)('Icon', true);
  var showClearButton = (0, _addonKnobs.boolean)('Clearable', false);
  var disabled = (0, _addonKnobs.boolean)('Disable', false);
  var fixedHeight = (0, _addonKnobs.boolean)('Fixed Calender Height', true);
  var dateFormat = (0, _addonKnobs.select)('Date Format', ['MM/DD/YYYY', 'ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'MM/DD/YYYY');
  var locale = (0, _addonKnobs.select)('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');
  var chooseFilter = (0, _addonKnobs.select)('Filter', ['Weekdays', 'Weekends', 'None'], 'None');

  return _react2.default.createElement(_index.Default, {
    label: label,
    showLabel: showLabel,
    instruction: instruction,
    showInstruction: showInstruction,
    dateFormat: dateFormat,
    showIcon: showIcon,
    showClearButton: showClearButton,
    disabled: disabled,
    fixedHeight: fixedHeight
    // dateFormat={dateFormat}
    , locale: locale,
    chooseFilter: chooseFilter
  });
});

// with Clear Button
storiesOfDatePicker.add('With Clear Button', function () {
  var showClearButton = (0, _addonKnobs.boolean)('Clearable', true);
  var label = (0, _addonKnobs.text)('Label', 'Date picker ');
  var showLabel = (0, _addonKnobs.boolean)('Show label', true);
  var instruction = (0, _addonKnobs.text)('Instruction', 'Please choose a date ');
  var showInstruction = (0, _addonKnobs.boolean)('Show instruction', false);
  var showIcon = (0, _addonKnobs.boolean)('Icon', true);
  var disabled = (0, _addonKnobs.boolean)('disable', false);
  var fixedHeight = (0, _addonKnobs.boolean)('Fixed Calender Height', true);
  var dateFormat = (0, _addonKnobs.select)('Date Format', ['MM/DD/YYYY', 'ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'MM/DD/YYYY');
  var locale = (0, _addonKnobs.select)('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');
  var chooseFilter = (0, _addonKnobs.select)('Filter', ['Weekdays', 'Weekends', 'None'], 'None');

  return _react2.default.createElement(_index.WithClearButton, {
    selected: (0, _moment2.default)(),
    label: label,
    showIcon: showIcon,
    showClearButton: showClearButton,
    disabled: disabled,
    showLabel: showLabel,
    instruction: instruction,
    showInstruction: showInstruction,
    fixedHeight: fixedHeight,
    dateFormat: dateFormat,
    locale: locale,
    chooseFilter: chooseFilter
  });
});

// disable state
storiesOfDatePicker.add('Disabled', function () {
  var disabled = (0, _addonKnobs.boolean)('disable', true);
  var label = (0, _addonKnobs.text)('Label', 'Date picker ');
  var showLabel = (0, _addonKnobs.boolean)('Show label', true);
  var instruction = (0, _addonKnobs.text)('Instruction', 'Please choose a date ');
  var showInstruction = (0, _addonKnobs.boolean)('Show instruction', false);
  var showIcon = (0, _addonKnobs.boolean)('Icon', true);
  var showClearButton = (0, _addonKnobs.boolean)('Clearable', true);
  var fixedHeight = (0, _addonKnobs.boolean)('Fixed Calender Height', true);
  var dateFormat = (0, _addonKnobs.select)('Date Format', ['MM/DD/YYYY', 'ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'MM/DD/YYYY');
  var locale = (0, _addonKnobs.select)('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');
  var chooseFilter = (0, _addonKnobs.select)('Filter', ['Weekdays', 'Weekends', 'None'], 'None');

  return _react2.default.createElement(_index.Disabled, {
    label: label,
    showIcon: showIcon,
    showClearButton: showClearButton,
    disabled: disabled,
    selected: (0, _moment2.default)(),
    showLabel: showLabel,
    instruction: instruction,
    showInstruction: showInstruction,
    fixedHeight: fixedHeight,
    dateFormat: dateFormat,
    locale: locale,
    chooseFilter: chooseFilter
  });
});

// Select a range of dates
storiesOfDatePicker.add('Select a Range of Dates', function () {
  var label = (0, _addonKnobs.text)('Label', 'Date picker ');
  var showLabel = (0, _addonKnobs.boolean)('Show label', true);
  var instruction = (0, _addonKnobs.text)('Instruction', 'Please choose a date ');
  var showInstruction = (0, _addonKnobs.boolean)('Show instruction', false);
  var showIcon = (0, _addonKnobs.boolean)('Icon', true);
  var showClearButton = (0, _addonKnobs.boolean)('Clearable', false);
  var fixedHeight = (0, _addonKnobs.boolean)('Fixed Calender Height', true);
  var disabled = (0, _addonKnobs.boolean)('disable', false);
  var dateFormat = (0, _addonKnobs.select)('Date Format', ['MM/DD/YYYY', 'ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'MM/DD/YYYY');
  var locale = (0, _addonKnobs.select)('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');
  var chooseFilter = (0, _addonKnobs.select)('Filter', ['Weekdays', 'Weekends', 'None'], 'None');

  return _react2.default.createElement(_index.DateRangePicker, {
    label: label,
    showIcon: showIcon,
    showClearButton: showClearButton,
    disabled: disabled,
    selected: (0, _moment2.default)(),
    showLabel: showLabel,
    instruction: instruction,
    showInstruction: showInstruction,
    fixedHeight: fixedHeight,
    dateFormat: dateFormat,
    locale: locale,
    chooseFilter: chooseFilter
  });
});

// Restricted Date Range
storiesOfDatePicker.add('Restricted Date Range', function () {
  var defaultValue = 7;
  var maxDate = (0, _addonKnobs.number)('Date Range Restriction', defaultValue);
  var label = (0, _addonKnobs.text)('Label', 'Date picker ');
  var showLabel = (0, _addonKnobs.boolean)('Show label', true);
  var instruction = (0, _addonKnobs.text)('Instruction', 'Please choose a date ');
  var showInstruction = (0, _addonKnobs.boolean)('Show instruction', false);
  var showIcon = (0, _addonKnobs.boolean)('Icon', true);
  var showClearButton = (0, _addonKnobs.boolean)('Clearable', false);
  var fixedHeight = (0, _addonKnobs.boolean)('Fixed Calender Height', true);
  var disabled = (0, _addonKnobs.boolean)('disable', false);
  var dateFormat = (0, _addonKnobs.select)('Date Format', ['MM/DD/YYYY', 'ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'MM/DD/YYYY');
  var locale = (0, _addonKnobs.select)('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');
  var chooseFilter = (0, _addonKnobs.select)('Filter', ['Weekdays', 'Weekends', 'None'], 'None');

  return _react2.default.createElement(_index.DisableDates, {
    maxDate: maxDate,
    label: label,
    showIcon: showIcon,
    showClearButton: showClearButton,
    disabled: disabled,
    selected: (0, _moment2.default)(),
    showLabel: showLabel,
    instruction: instruction,
    showInstruction: showInstruction,
    fixedHeight: fixedHeight,
    dateFormat: dateFormat,
    locale: locale,
    chooseFilter: chooseFilter
  });
});

// Filter Dates
storiesOfDatePicker.add('Filter Dates', function () {
  var chooseFilter = (0, _addonKnobs.select)('Filter', ['Weekdays', 'Weekends', 'None'], ['Weekdays']);
  var label = (0, _addonKnobs.text)('Label', 'Date picker ');
  var showLabel = (0, _addonKnobs.boolean)('Show label', true);
  var instruction = (0, _addonKnobs.text)('Instruction', 'Please choose a date ');
  var showInstruction = (0, _addonKnobs.boolean)('Show instruction', false);
  var showIcon = (0, _addonKnobs.boolean)('Icon', true);
  var showClearButton = (0, _addonKnobs.boolean)('Clearable', false);
  var fixedHeight = (0, _addonKnobs.boolean)('Fixed Calender Height', true);
  var disabled = (0, _addonKnobs.boolean)('disable', false);
  var dateFormat = (0, _addonKnobs.select)('Date Format', ['MM/DD/YYYY', 'ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'MM/DD/YYYY');
  var locale = (0, _addonKnobs.select)('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');

  return _react2.default.createElement(_index.FilterDates, {
    chooseFilter: chooseFilter,
    label: label,
    showIcon: showIcon,
    showClearButton: showClearButton,
    disabled: disabled,
    selected: (0, _moment2.default)(),
    showLabel: showLabel,
    instruction: instruction,
    showInstruction: showInstruction,
    fixedHeight: fixedHeight,
    dateFormat: dateFormat,
    locale: locale
  });
});

// calender locale
storiesOfDatePicker.add('Locale', function () {
  var locale = (0, _addonKnobs.select)('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'fr-ca');
  var label = (0, _addonKnobs.text)('Label', 'Date picker ');
  var showLabel = (0, _addonKnobs.boolean)('Show label', true);
  var instruction = (0, _addonKnobs.text)('Instruction', 'Please choose a date ');
  var showInstruction = (0, _addonKnobs.boolean)('Show instruction', false);
  var showIcon = (0, _addonKnobs.boolean)('Icon', true);
  var showClearButton = (0, _addonKnobs.boolean)('Clearable', false);
  var fixedHeight = (0, _addonKnobs.boolean)('Fixed Calender Height', true);
  var dateFormat = (0, _addonKnobs.select)('Date Format', ['MM/DD/YYYY', 'ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'MM/DD/YYYY');
  var disabled = (0, _addonKnobs.boolean)('disable', false);
  var chooseFilter = (0, _addonKnobs.select)('Filter', ['Weekdays', 'Weekends', 'None'], 'None');

  return _react2.default.createElement(_index.Locale, {
    label: label,
    showIcon: showIcon,
    showClearButton: showClearButton,
    disabled: disabled,
    selected: (0, _moment2.default)(),
    showLabel: showLabel,
    instruction: instruction,
    showInstruction: showInstruction,
    fixedHeight: fixedHeight,
    dateFormat: dateFormat,
    locale: locale,
    chooseFilter: chooseFilter
  });
});

// customize date format
storiesOfDatePicker.add('Custom Date Format', function () {
  var dateFormat = (0, _addonKnobs.select)('Date Format', ['MM/DD/YYYY', 'ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'MM/DD/YYYY');
  var locale = (0, _addonKnobs.select)('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');
  var label = (0, _addonKnobs.text)('Label', 'Date picker ');
  var showLabel = (0, _addonKnobs.boolean)('Show label', true);
  var instruction = (0, _addonKnobs.text)('Instruction', 'Please choose a date ');
  var showInstruction = (0, _addonKnobs.boolean)('Show instruction', false);
  var showIcon = (0, _addonKnobs.boolean)('Icon', true);
  var showClearButton = (0, _addonKnobs.boolean)('Clearable', false);
  var fixedHeight = (0, _addonKnobs.boolean)('Fixed Calender Height', true);
  var disabled = (0, _addonKnobs.boolean)('disable', false);
  var chooseFilter = (0, _addonKnobs.select)('Filter', ['Weekdays', 'Weekends', 'None'], 'None');

  return _react2.default.createElement(_index.CustomDateFormat, {
    dateFormat: dateFormat,
    locale: locale,
    label: label,
    showIcon: showIcon,
    showClearButton: showClearButton,
    disabled: disabled,
    selected: (0, _moment2.default)(),
    showLabel: showLabel,
    instruction: instruction,
    showInstruction: showInstruction,
    fixedHeight: fixedHeight,
    chooseFilter: chooseFilter
  });
});

//# sourceMappingURL=datePickerStories.js.map
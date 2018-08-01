"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require("@hig/icon");

var _icon2 = _interopRequireDefault(_icon);

var _textField = require("@hig/text-field");

require("@hig/text-field/build/index.css");

var _reactDatepicker = require("react-datepicker");

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

require("./datePicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = (_temp = _class = function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker() {
    _classCallCheck(this, DatePicker);

    return _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));
  }

  _createClass(DatePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var calenderIcon = _react2.default.createElement(_icon2.default, { nameOrSVG: "calendar" });
      var showIcon = this.props.showIcon ? calenderIcon : undefined;
      return _react2.default.createElement(_reactDatepicker2.default, Object.assign({}, props, {
        className: "hig__text-field-v1__input",
        id: "hig__date-picker",
        ref: function ref(node) {
          return _this2.node = node;
        },
        readOnly: true,
        calender: true,
        shouldCloseOnSelect: props.closeOnSelect,
        showMonthYearDropdown: false,
        showMonthDropdown: false,
        showYearDropdown: false,
        showTimeSelect: false,
        withPortal: false,
        isClearable: false
        // use hig text field as inputField
        // use ref to allow the use clear button in text field component
        , customInput: _react2.default.createElement(_textField.TextFieldPresenter, {
          id: props.id,
          focused: props.focused,
          readOnly: true,
          disabled: true,
          placeholder: props.placeholder,
          instructions: props.showInstruction ? props.instruction : undefined,
          label: props.showLabel ? props.label : undefined,
          icon: showIcon,
          onFocus: null,
          onBlur: null,
          showClearButton: props.showClearButton,
          onClearButtonClick: function onClearButtonClick() {
            _this2.node.clear();
          }
        })

        // calender popper settings
        , popperPlacement: "bottom-start",
        popperModifiers: {
          // adjust position of calender popper, (horizontal, vertical)
          offset: {
            enabled: true,
            offset: '0px, 0px'
          },
          flip: {
            enabled: false
          },
          preventOverflow: {
            enabled: true,
            escapeWithReference: false
          }
        }
      }));
    }
  }]);

  return DatePicker;
}(_react2.default.Component), _class.propTypes = {
  adjustDateOnChange: _propTypes2.default.bool,
  dateFormatCalendar: _propTypes2.default.string,
  dayClassName: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  endDate: _propTypes2.default.object,
  focused: _propTypes2.default.bool,
  highlightDates: _propTypes2.default.array,
  id: _propTypes2.default.string,
  locale: _propTypes2.default.string,
  maxDate: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  selected: _propTypes2.default.object,
  selectsEnd: _propTypes2.default.bool,
  selectsStart: _propTypes2.default.bool,
  startDate: _propTypes2.default.object,
  startOpen: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  todayButton: _propTypes2.default.string,
  shouldCloseOnSelect: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  showIcon: _propTypes2.default.bool,
  instruction: _propTypes2.default.string,
  showInstruction: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  showLabel: _propTypes2.default.bool,
  fixedHeight: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  showClearButton: _propTypes2.default.bool,
  excludeDates: _propTypes2.default.array,
  filterDate: _propTypes2.default.func,
  dateFormat: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  includeDates: _propTypes2.default.array,
  closeOnSelect: _propTypes2.default.bool
}, _class.defaultProps = {
  focused: true,
  shouldCloseOnSelect: true,
  disabled: false,
  showIcon: true,
  label: undefined,
  showLabel: true,
  instruction: undefined,
  showInstruction: false,
  fixedHeight: true,
  showClearButton: false,
  today: true,
  closeOnSelect: true
}, _temp);
exports.default = DatePicker;

//# sourceMappingURL=DatePicker.js.map
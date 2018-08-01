'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateRangePicker = function (_Component) {
  _inherits(DateRangePicker, _Component);

  function DateRangePicker(props) {
    _classCallCheck(this, DateRangePicker);

    var _this = _possibleConstructorReturn(this, (DateRangePicker.__proto__ || Object.getPrototypeOf(DateRangePicker)).call(this, props));

    _this.state = {
      startDate: undefined,
      endDate: undefined
    };
    _this.handleChangeStart = _this.handleChangeStart.bind(_this);
    _this.handleChangeEnd = _this.handleChangeEnd.bind(_this);
    return _this;
  }

  _createClass(DateRangePicker, [{
    key: 'handleChangeStart',
    value: function handleChangeStart(date) {
      this.setState({ startDate: date });
    }
  }, {
    key: 'handleChangeEnd',
    value: function handleChangeEnd(date) {
      this.setState({ endDate: date });
    }
  }, {
    key: 'isWeekday',
    value: function isWeekday(date) {
      var day = date.day();
      return day !== 0 && day !== 6;
    }
  }, {
    key: 'isWeekend',
    value: function isWeekend(date) {
      var day = date.day();
      return day === 0 || day === 6;
    }
  }, {
    key: 'render',
    value: function render() {
      var filterOptions = {
        Weekdays: this.isWeekday,
        Weekends: this.isWeekend,
        None: null
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          { style: { float: 'left' } },
          _react2.default.createElement(_index2.default, {
            selected: this.state.startDate,
            shouldCloseOnSelect: true,
            label: 'From',
            selectsStart: true,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            onChange: this.handleChangeStart,
            showIcon: this.props.showIcon,
            showClearButton: this.props.showClearButton,
            disabled: this.props.disabled,
            showLabel: this.props.showLabel,
            instruction: this.props.instruction,
            showInstruction: this.props.showInstruction,
            fixedHeight: this.props.fixedHeight,
            locale: this.props.locale,
            dateFormat: this.props.dateFormat,
            filterDate: filterOptions[this.props.chooseFilter]
          }),
          _react2.default.createElement('span', { style: { paddingLeft: '270px', float: 'left' } })
        ),
        _react2.default.createElement(
          'span',
          { style: { float: 'left' } },
          _react2.default.createElement(_index2.default, {
            selected: this.state.endDate || this.state.startDate,
            label: 'To',
            selectsEnd: true,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            onChange: this.handleChangeEnd,
            showIcon: this.props.showIcon,
            showClearButton: this.props.showClearButton,
            disabled: this.props.disabled,
            showLabel: this.props.showLabel,
            instruction: this.props.instruction,
            showInstruction: this.props.showInstruction,
            fixedHeight: this.props.fixedHeight,
            locale: this.props.locale,
            dateFormat: this.props.dateFormat,
            filterDate: filterOptions[this.props.chooseFilter]
          })
        )
      );
    }
  }]);

  return DateRangePicker;
}(_react.Component);

exports.default = DateRangePicker;

//# sourceMappingURL=DateRangePicker.js.map
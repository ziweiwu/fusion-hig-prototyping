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

var WithClearButton = function (_Component) {
  _inherits(WithClearButton, _Component);

  function WithClearButton(props) {
    _classCallCheck(this, WithClearButton);

    var _this = _possibleConstructorReturn(this, (WithClearButton.__proto__ || Object.getPrototypeOf(WithClearButton)).call(this, props));

    _this.state = {
      startDate: _this.props.selected,
      endDate: undefined
    };
    _this.handleChangeDate = _this.handleChangeDate.bind(_this);
    _this.handleChangeStart = _this.handleChangeStart.bind(_this);
    _this.handleChangeEnd = _this.handleChangeEnd.bind(_this);
    return _this;
  }

  _createClass(WithClearButton, [{
    key: 'handleChangeDate',
    value: function handleChangeDate(date) {
      this.setState({ startDate: date });
    }
  }, {
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
      return _react2.default.createElement(_index2.default, {
        selected: this.state.startDate,
        startDate: this.state.startDate,
        onChange: this.handleChangeStart,
        label: this.props.label,
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
      });
    }
  }]);

  return WithClearButton;
}(_react.Component);

exports.default = WithClearButton;

//# sourceMappingURL=WithClearButton.js.map
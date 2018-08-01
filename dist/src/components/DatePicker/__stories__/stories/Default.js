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

var Default = function (_Component) {
  _inherits(Default, _Component);

  function Default(props) {
    _classCallCheck(this, Default);

    var _this = _possibleConstructorReturn(this, (Default.__proto__ || Object.getPrototypeOf(Default)).call(this, props));

    _this.state = {
      startDate: undefined
    };
    _this.handleChangeDate = _this.handleChangeDate.bind(_this);
    return _this;
  }

  _createClass(Default, [{
    key: 'handleChangeDate',
    value: function handleChangeDate(date) {
      this.setState({ startDate: date });
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
        locale: this.props.locale,
        dateFormat: this.props.dateFormat,
        selected: this.state.startDate,
        onChange: this.handleChangeDate,
        showIcon: this.props.showIcon,
        showClearButton: this.props.showClearButton,
        disabled: this.props.disabled,
        label: this.props.label,
        showLabel: this.props.showLabel,
        instruction: this.props.instruction,
        showInstruction: this.props.showInstruction,
        fixedHeight: this.props.fixedHeight,
        filterDate: filterOptions[this.props.chooseFilter]
      });
    }
  }]);

  return Default;
}(_react.Component);

exports.default = Default;

//# sourceMappingURL=Default.js.map
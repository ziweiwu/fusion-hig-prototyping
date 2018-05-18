import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";
import Icon, { names as iconNames } from "@hig/icon";

import "./search.scss";

export default class Search extends Component {
  static propTypes = {
    /**
     * Called when search input loses focus.
     */
    onBlur: PropTypes.func,
    /**
     * Called when clicking icon to clear input.
     */
    onClearIconClick: PropTypes.func,
    /**
     * Called when search input gains focus.
     */
    onFocus: PropTypes.func,
    /**
     * Called when input changes.
     */
    onChange: PropTypes.func,
    /**
     * Placeholder text for the input field.
     */
    placeholder: PropTypes.string,
    /**
     * Value of the input field. Can be changed after mount to update the input value.
     */
    value: PropTypes.string
  };

  static defaultProps = {
    value: ""
  };

  state = {
    value: this.props.value
  };

  handleChange = event => {
    this.setState(
      { value: event.target.value },
      () => this.props.onChange && this.props.onChange(event)
    );
  };

  handleClear = () =>
    this.setState(
      { value: "" },
      () => this.props.onClearIconClick && this.props.onClearIconClick()
    );

  render() {
    const { onBlur, onFocus, placeholder } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div className={cx(themeClass, "hig__side-nav__search")}>
            <div className={cx(themeClass, "hig__side-nav__search__icon")}>
              <Icon name={iconNames.SEARCH} />
            </div>

            <div
              className={cx(themeClass, "hig__side-nav__search__input-wrapper")}
            >
              <input
                className={cx(themeClass, "hig__side-nav__search__input")}
                type="text"
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={this.handleChange}
                placeholder={placeholder}
                value={this.state.value}
              />
            </div>

            {this.state.value &&
              this.state.value.length > 0 && (
                <div
                  className={cx(themeClass, "hig__side-nav__search__clear")}
                  onClick={this.handleClear}
                  role="button"
                  tabIndex={0}
                >
                  <Icon name={iconNames.CLEAR_SMALL} />
                </div>
              )}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

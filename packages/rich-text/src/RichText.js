import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./rich-text.scss";
import AVAILABLE_SIZES from "./availableSizes";

const COMPONENT_CLASS = "hig__rich-text";
export default class RichText extends Component {
  render() {
    const richTextClasses = cx(`${COMPONENT_CLASS}`, {
      [`hig__rich-text--${this.props.size}`]: this.props.size
    });
    return this.props.children ? (
      <div className={richTextClasses}>{this.props.children}</div>
    ) : (
      <div
        className={richTextClasses}
        dangerouslySetInnerHTML={this.props.dangerouslySetInnerHTML} // eslint-disable-line react/no-danger
      />
    );
  }
}

RichText.propTypes = {
  /**
   * React-generated markup to style with HIG typography rules
   */
  children: PropTypes.node,
  /**
   * HTML string to be rendered and styled with HIG typography ruless
   */
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string
  }),
  /**
   * String which specifies which size of RichText will be used
   */
  size: PropTypes.oneOf(AVAILABLE_SIZES)
};

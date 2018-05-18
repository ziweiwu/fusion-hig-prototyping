import { Component } from "react";
import PropTypes from "prop-types";
import themeContextShape from "./shape";
import HIGLightTheme from "../themes/HIGLightTheme";

export default class Provider extends Component {
  static propTypes = {
    /** A theme provided to the consumer within */
    value: PropTypes.shape(themeContextShape),
    /** Content within will be provided with the passed theme */
    children: PropTypes.node.isRequired
  };

  static childContextTypes = themeContextShape;

  static defaultProps = {
    value: HIGLightTheme
  };

  getChildContext() {
    return { ...this.props.value };
  }

  render() {
    return this.props.children;
  }
}

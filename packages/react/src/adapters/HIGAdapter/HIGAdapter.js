import React, { Component } from "react";
import PropTypes from "prop-types";
import { Themes } from "hig-vanilla";
import "hig-vanilla/lib/hig.css";
import HIGPropTypes from "./HIGPropTypes";

class HIGAdapter extends Component {
  static propTypes = {
    children: PropTypes.func,
    HIGConstructor: PropTypes.func.isRequired,
    displayName: PropTypes.string.isRequired,
    higInstance: HIGPropTypes.higInstance,
    higTheme: PropTypes.oneOf(Themes.AvailableThemes)
  };

  static contextTypes = {
    higParent: PropTypes.object,
    higTheme: PropTypes.oneOf(Themes.AvailableThemes)
  };

  static childContextTypes = {
    higTheme: PropTypes.oneOf(Themes.AvailableThemes)
  };

  static defaultProps = {
    children: () => {},
    higInstance: undefined
  };

  constructor(props) {
    super(props);
    this.state = {
      higInstance: props.higInstance || new props.HIGConstructor({}),
      mounted: false
    };
  }

  getChildContext() {
    return {
      higTheme: this.props.higTheme || this.context.higTheme
    };
  }

  componentDidMount() {
    if (!this.context.higParent) {
      this._mount = this._el.parentNode;
      this._anchor = document.createComment(
        `HIG${this.props.displayName}-Anchor`
      );
      // Place this component's element with an anchor comment
      this._mount.replaceChild(this._anchor, this._el);
      // Mount the hig component at the comment
      this.state.higInstance.mount(this._mount, this._anchor);
      this.onMount();
    }
  }

  componentWillUnmount() {
    if (this._anchor) {
      // Replace the anchor comment with this component's div
      this._mount.replaceChild(this._el, this._anchor);
    }
    this.state.higInstance.unmount();
  }

  onMount = () => {
    this.setState({ mounted: true });
  };

  setEl = el => {
    this._el = el;
  };

  renderedTheme() {
    return this.props.higTheme || this.context.higTheme;
  }

  render() {
    if (this.state.higInstance && this.renderedTheme()) {
      this.state.higInstance.setTheme(this.renderedTheme());
    }

    return React.createElement(
      `hig-${this.props.displayName.toLowerCase()}`,
      { ref: this.setEl },
      this.props.children({
        higInstance: this.state.higInstance,
        mounted: this.state.mounted,
        higParent: this.context.higParent,
        onMount: this.onMount,
        displayName: this.props.displayName
      })
    );
  }
}

export default HIGAdapter;

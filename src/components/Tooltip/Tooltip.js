import React from "react";
import PropTypes from "prop-types";
import ReactToolTip from "rc-tooltip";
import { polyfill } from "react-lifecycles-compat";
import { anchorPoints } from "@hig/flyout";
import { css } from "react-emotion";
import "./tooltip.scss";

const placements = {
  [anchorPoints.TOP_CENTER]: "top",
  [anchorPoints.TOP_LEFT]: "topLeft",
  [anchorPoints.TOP_RIGHT]: "topRight",
  [anchorPoints.BOTTOM_CENTER]: "bottom",
  [anchorPoints.BOTTOM_LEFT]: "bottomLeft",
  [anchorPoints.BOTTOM_RIGHT]: "bottomRight",
  [anchorPoints.LEFT_CENTER]: "left",
  [anchorPoints.LEFT_TOP]: "leftTop",
  [anchorPoints.LEFT_BOTTOM]: "leftBottom",
  [anchorPoints.RIGHT_CENTER]: "right",
  [anchorPoints.RIGHT_TOP]: "rightTop",
  [anchorPoints.RIGHT_BOTTOM]: "rightBottom"
};

class Tooltip extends React.Component {
  static propTypes = {
    anchorPoint: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    description: PropTypes.string,
    id: PropTypes.string,
    isVisible: PropTypes.bool,
    linkTitle: PropTypes.string,
    linkURL: PropTypes.string,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    title: PropTypes.string,
    trigger: PropTypes.string,
    width: PropTypes.number
  };

  static defaultProps = {
    anchorPoint: placements[anchorPoints.BOTTOM_CENTER],
    mouseEnterDelay: 1,
    mouseLeaveDelay: 0.2,
    trigger: "click",
    width: 300
  };

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.visibilityOn = this.visibilityOn.bind(this);
    this.visibilityOff = this.visibilityOff.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderURL = this.renderURL.bind(this);
    this.renderContainer = this.renderContainer.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick(e) {
    if (this.childrenRef && this.childrenRef.contains(e.target)) {
      this.visibilityOn();
    } else if (
      this.containerRef &&
      !this.childrenRef.contains(e.target) &&
      !this.containerRef.contains(e.target)
    ) {
      this.visibilityOff();
    }
  }

  visibilityOn() {
    this.setState({
      isVisible: true
    });
  }

  visibilityOff() {
    this.setState({
      isVisible: false
    });
  }

  renderTitle() {
    return <div className="hig__tooltip-title">{this.props.title}</div>;
  }

  renderDescription() {
    return (
      <div className="hig__tooltip-description">{this.props.description}</div>
    );
  }

  renderContent() {
    return (
      <div className="hig__tooltip-inner-content">{this.props.content}</div>
    );
  }

  renderURL() {
    return (
      <div className="hig__tooltip-link">
        {!this.props.content && <hr />}
        <a href={this.props.linkURL}>
          {this.props.linkTitle || this.props.linkURL}
        </a>
      </div>
    );
  }

  renderContainer() {
    return (
      <div
        className="hig__tooltip-container"
        ref={containerRef => (this.containerRef = containerRef)}
      >
        {this.props.title && this.renderTitle()}
        {this.props.description && this.renderDescription()}
        {this.props.content && this.renderContent()}
        {this.props.linkURL && this.renderURL()}
      </div>
    );
  }

  renderChildren() {
    return (
      <div
        className="hig__tooltip-children-wrapper"
        ref={childrenRef => (this.childrenRef = childrenRef)}
      >
        {this.props.children}
      </div>
    );
  }

  render() {
    const { anchorPoint, ...otherProps } = this.props;

    const tooltipWidth = css`
      max-width: ${this.props.width}px;
    `;

    const isVisible =
      this.props.isVisible !== undefined
        ? this.props.isVisible
        : this.state.isVisible;

    return (
      <ReactToolTip
        {...otherProps}
        destroyTooltipOnHide
        overlay={this.renderContainer}
        overlayClassName={tooltipWidth}
        placement={placements[anchorPoint]}
        prefixCls="hig__tooltip"
        transitionName="fade"
        visible={isVisible}
      >
        {this.renderChildren()}
      </ReactToolTip>
    );
  }
}

export default polyfill(Tooltip);

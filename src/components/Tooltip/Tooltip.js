import React from 'react';
import PropTypes from 'prop-types';
import ReactToolTip from 'rc-tooltip';
import {anchorPoints} from "@hig/flyout";
import {css} from 'react-emotion';
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
  [anchorPoints.RIGHT_BOTTOM]: "rightBottom",
};

export default class Tooltip extends React.Component {
  static propTypes = {
    trigger: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func,]).isRequired,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func,]),
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    linkTitle: PropTypes.string,
    linkURL: PropTypes.string,
    anchorPoint: PropTypes.string,
    width: PropTypes.number,
  };

  static defaultProps = {
    prefixCls: 'hig__tooltip',
    mouseEnterDelay: 1,
    destroyTooltipOnHide: true,
    mouseLeaveDelay: 0.2,
    anchorPoint: placements[anchorPoints.RIGHT_CENTER],
    trigger: 'click',
    arrowContent: null,
    width: 300,
  };

  render() {
    const props = this.props;
    const tooltipWidth = css`
      max-width: ${props.width}px;
    `;

    return (
      <ReactToolTip
        {...props}
        transitionName="fade"
        overlayClassName={tooltipWidth}
        placement={placements[props.anchorPoint]}
        children={<div className="hig__tooltip-children-wrapper">{props.children}</div>}
        overlay={
          <div className="hig__tooltip-container">
            {props.title && <div className="hig__tooltip-title">{props.title}</div>}
            {props.description && <div className="hig__tooltip-description">{props.description}</div>}
            {props.content && <div className="hig__tooltip-inner-content">{props.content}</div>}
            {props.linkURL && <div className="hig__tooltip-link">
              {!props.content && <hr/>}
              <a
                href={props.linkURL}>
                {props.linkTitle || props.linkURL}
              </a>
            </div>}
          </div>
        }
      />
    );
  }
}


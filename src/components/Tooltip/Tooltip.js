import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactToolTip from 'rc-tooltip';
import {anchorPoints} from "@hig/flyout";
import {css} from 'react-emotion'
import './tooltip.css';

//map the placements from the anchorPoints
const placementsMap = new Map([
  [anchorPoints.TOP_CENTER, "top"],
  [anchorPoints.TOP_LEFT, "topLeft"],
  [anchorPoints.TOP_RIGHT, "topRight"],
  [anchorPoints.BOTTOM_CENTER, "bottom"],
  [anchorPoints.BOTTOM_LEFT, "bottomLeft"],
  [anchorPoints.BOTTOM_RIGHT, "bottomRight"],
  [anchorPoints.LEFT_CENTER, "left"],
  [anchorPoints.LEFT_TOP, "leftTop"],
  [anchorPoints.LEFT_BOTTOM, "leftBottom"],
  [anchorPoints.RIGHT_CENTER, "right"],
  [anchorPoints.RIGHT_TOP, "rightTop"],
  [anchorPoints.RIGHT_BOTTOM, "rightBottom"],
]);


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
    width: PropTypes.number
  };

  static defaultProps = {
    prefixCls: 'hig-tooltip',
    mouseEnterDelay: 1,
    destroyTooltipOnHide: true,
    mouseLeaveDelay: 0.2,
    anchorPoint: placementsMap.get(anchorPoints.RIGHT_CENTER),
    trigger: 'click',
    arrowContent: null,
    width: 300
  };

  render() {
    const props = this.props;

    const tooltipTitleClass = classNames({
      'hig-tooltip-title': true
    });
    const tooltipDescriptionClass = classNames({
      'hig-tooltip-description': true
    });

    const tooltipInnerContentClass = classNames({
      'hig-tooltip-inner-content ': true
    });

    const tooltipLink = classNames({
      'hig-tooltip-link': true
    });

    const tooltipChildenWrapper = classNames({
      'hig-tooltip-children-wrapper': true
    });

   // use react emotion to create a styled wrapper with props.width
    const tooltipWidth = css`
      max-width: ${props.width}px;
    `;

    return (
      <ReactToolTip
        {...props}
        adjustX
        overlayClassName = {tooltipWidth}
        placement={placementsMap.get(props.anchorPoint)}
        children={<div className={tooltipChildenWrapper}>{props.children}</div>}
        overlay={
          <div>
            {props.title && <div className={tooltipTitleClass}>{props.title}</div>}
            {props.description && <div className={tooltipDescriptionClass}>{props.description}</div>}
            {props.content && <div className={tooltipInnerContentClass}>{props.content}</div>}
            {props.linkURL && <div className={tooltipLink}>
              <hr/>
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


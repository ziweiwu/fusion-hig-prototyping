import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactToolTip from 'rc-tooltip';
import './tooltip.css';
import getPlacements, {getOverflowOptions} from './placements';

export default class Tooltip extends React.Component {
  static propTypes = {
    trigger: PropTypes.string,
    children: PropTypes.node || PropTypes.func,
    defaultVisible: PropTypes.bool,
    visible: PropTypes.bool,
    placement: PropTypes.string,
    transitionName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    animation: PropTypes.any,
    onVisibleChange: PropTypes.func,
    afterVisibleChange: PropTypes.func,
    content: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]).isRequired,
    overlayStyle: PropTypes.object,
    overlayClassName: PropTypes.string,
    prefixCls: PropTypes.string,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    getTooltipContainer: PropTypes.func,
    destroyTooltipOnHide: PropTypes.bool,
    align: PropTypes.object,
    arrowContent: PropTypes.any,
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    linkTitle: PropTypes.string,
    linkURL: PropTypes.string
  };

  static defaultProps = {
    prefixCls: 'hig-tooltip',
    mouseEnterDelay: 0,
    destroyTooltipOnHide: true,
    mouseLeaveDelay: 0.5,
    align: {},
    placement: 'right',
    trigger: 'click',
    arrowContent: null,
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
      'hig-tooltip-inner-content': true
    });
    const tooltipLink = classNames({
      'hig-tooltip-link': true
    });

    const tooltipChildenWrapper = classNames({
      'hig-tooltip-children-wrapper': true
    });

    return (
      <ReactToolTip
        {...props}
        ref={node => this.node = node}
        children={<div className={tooltipChildenWrapper}>{props.children}</div>}
        overlay={
          <div className={tooltipInnerContentClass}>
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

Tooltip.propTypes = {};


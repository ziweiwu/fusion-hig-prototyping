import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactToolTip from 'rc-tooltip';
import getPlacements, {getOverflowOptions} from './placements';

export default class Tooltip extends React.Component {
  static propTypes = {
    trigger: PropTypes.any,
    children: PropTypes.any,
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
    description: PropTypes.string
  };

  static defaultProps = {
    prefixCls: 'hig-tooltip',
    mouseEnterDelay: 0,
    destroyTooltipOnHide: false,
    mouseLeaveDelay: 0.5,
    align: {},
    placement: 'right',
    trigger: ['hover'],
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

    return (
      <ReactToolTip
        {...props}

        ref={node => this.node = node}
        overlay={
          <div>
            {props.title && <div className={tooltipTitleClass}>{props.title}</div>}
            {props.description && <div className={tooltipDescriptionClass}>{props.description}</div>}
            {props.content}
          </div>
        }
      />
    );
  }
}

Tooltip.propTypes = {};


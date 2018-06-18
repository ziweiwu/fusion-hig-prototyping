import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactToolTip from 'rc-tooltip';
import '@hig/styles/build/index.css';
import getPlacements, { AdjustOverflow, PlacementsConfig } from './placements';
import './tooltip.css';

// const align = {
//   points: ['tc', 'bc'],
//   offset: [0, -4],
//   targetOffset: [0, 0],
//   overflow: { adjustY: 0 },
// };

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  onPopupAlign = (domNode: HTMLElement, align: any) => {
    const placements: any = this.getPlacements();
    const placement = Object.keys(placements).filter(
      key => (
        placements[key].points[0] === align.points[0] &&
        placements[key].points[1] === align.points[1]
      ),
    )[0];
    if (!placement) {
      return;
    }
    const rect = domNode.getBoundingClientRect();
    const transformOrigin = {
      top: '50%',
      left: '50%',
    };
    if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
      transformOrigin.top = `${rect.height - align.offset[1]}px`;
    } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
      transformOrigin.top = `${-align.offset[1]}px`;
    }
    if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
      transformOrigin.left = `${rect.width - align.offset[0]}px`;
    } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
      transformOrigin.left = `${-align.offset[0]}px`;
    }
    domNode.style.transformOrigin = `${transformOrigin.left} ${transformOrigin.top}`;
  };

  getPlacements() {
    const { builtinPlacements, arrowPointAtCenter, autoAdjustOverflow } = this.props;
    return builtinPlacements || getPlacements({
      arrowPointAtCenter,
      verticalArrowShift: 8,
      autoAdjustOverflow,
    });
  }

  render() {
    const props = this.props;
    return (
      <ReactToolTip
        {...props}
        prefixCls="hig-tooltip"
        ref={node => this.node = node}
        trigger="hover"
//        popupAlign={align}
        //visible
        placement="top"
        mouseEnterDelay={0.5}
        mouseLeaveDelay={1000}
        builtinPlacements={this.getPlacements()}
        onPopupAlign={this.onPopupAlign}
      />
    );
  }
}

Tooltip.propTypes = {};




import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactToolTip from 'rc-tooltip';
import '@hig/styles/build/index.css';
import {getOverflowOptions, placeArrow} from './Placements';
import './tooltip.css';

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <ReactToolTip
        {...props}
        prefixCls="hig-tooltip"
        ref={node => this.node = node}
        trigger="hover"
        //option to trigger
        builtinPlacemnts={getOverflowOptions()}
       // onPopupAlign={placeArrow}
        //visible
        placement="bottomLeft"
        mouseEnterDelay={0.5}
        mouseLeaveDelay={1000}
      />
    );
  }
}

Tooltip.propTypes = {};




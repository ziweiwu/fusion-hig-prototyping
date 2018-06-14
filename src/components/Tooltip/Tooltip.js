import React from 'react';
import PropTypes from 'prop-types';
import '@hig/styles/build/index.css';
import '@hig/text-field/build/index.css';
import { Tooltip as TooltipAnt } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const style = {
  backgroundColor: 'red',
  color: 'red'
}

export default class Tooltip extends React.Component {
  render() {
    const props = this.props;
    return (<TooltipAnt
      style={style}
      {...props}
      ref={node => this.node = node}
    />);
  }
}

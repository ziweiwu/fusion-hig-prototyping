import React, {Component} from 'react';
import Table, {AutoResizer} from './table/src/index';

const columns = [];

const data = [];

//generate data for the table
class TableView extends Component {
  render() {
    return (
      <Table data={data} rowKey={columns} width={'800'} rowHeight={'100'} headerHeight={'800'}/>
    )
  };
}

TableView.propTypes = {};
export default TableView

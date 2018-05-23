import React, {Component} from 'react';
import Table from '@hig/table';
import '@hig/table/build/index.css';
import Headline from './Headline';
// function generateColumns(count = 4) {
//   return new Array(count).fill(0).map((column, columnIndex) => ({
//     key: `column-${columnIndex}`,
//     dataKey: `column-${columnIndex}`,
//     title: `Column ${columnIndex}`,
//     width: 200
//   }));
// }

//columns for fusion production table
const columns = [
  {
    key: `1`,
    dataKey: `1`,
    title: `Status`,
    width: 200
  },

  {
    key: `2`,
    dataKey: `2`,
    title: `Workstation`,
    width: 200
  },
  {
    key: `3`,
    dataKey: `3`,
    title: `Workcell`,
    width: 200
  },
  {
    key: `4`,
    dataKey: `4`,
    title: `Queue`,
    width: 200
  },
];


//functions for generate random data for each table column
const generateRandomStatus = () => {
  const status = ['IDLE', 'OPERATING', 'OFFLINE:BROKEN', 'OFFLINE: MAINTENANCE'];
  const random = Math.floor(Math.random() * 4);
  return status[random];
};
const generateRandomWorkStation = () => {
  const workStation = ['HAMI 3323', 'Febric', 'novo_Device', 'CNC', 'TestStation'];
  const random = Math.floor(Math.random() * 5);
  return workStation[random];
};
const generateRandomWorkCell = () => {
  const workCell = ['Steel Parts 1', 'Tire Cell', 'Metal Bolt 2', 'Dashboard Production 1', 'Rotor Head Cell'];
  const random = Math.floor(Math.random() * 5);
  return workCell[random];
};
const generateRandomQueue = () => {
  return Math.floor(Math.random() * 10);
};


//generate the row data
function createRowGenerator(columns) {
  return function generateRow(row, rowIndex) {
    return columns.reduce(
      (rowData, column) => {
        if (column.key === '1') {
          rowData[column.key] = generateRandomStatus();
        }
        if (column.key === '2') {
          rowData[column.key] = generateRandomWorkStation();
        }
        if (column.key === '3') {
          rowData[column.key] = generateRandomWorkCell();
        }
        if (column.key === '4') {
          rowData[column.key] = generateRandomQueue();
        }
        return rowData;
      },
      {
        id: `row-${rowIndex}`,
        parentId: null
      }
    );
  };
}

const generateData = (columns, count = 200) => {
  const generateRow = createRowGenerator(columns);
  return new Array(count).fill(0).map(generateRow);
};


class TableView extends Component {
  constructor(props) {
    super(props);
    this.handleHovering = this.handleHovering.bind(this);
  };

  handleHovering = () => {
    console.log('row hovering over')
  }

  render() {
    return (
      <div>
        <Headline title="Table using Hig-Table component"/>
        <Table
          width={800}
          height={500}
          columns={columns}
          rowEventHandlers={this.handleHovering()}
          data={generateData(columns, 10)}/>
      </div>
    )
  };
}

TableView.propTypes = {};
export default TableView

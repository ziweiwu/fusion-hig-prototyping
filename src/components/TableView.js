import React, {Component} from 'react';
import Table from '@hig/table';
import '@hig/table/build/index.css';
import Headline from './Headline';
import '@hig/tabs/build/index.css';


//columns for fusion production table
const columns = [
  {
    id: `1`,
    dataKey: `1`,
    title: `Status`,
    accesor: `status`,
    alignment: 'left',
    width: "10%"
  },

  {
    id: `2`,
    dataKey: `2`,
    title: `Workstation`,
    accesor: `workstation`,
    alignment: 'left',
    width: "20%"
  },
  {
    id: `3`,
    dataKey: `3`,
    title: `Workcell`,
    accesor: `workcell`,
    alignment: 'left',
    width: "20%"
  },
  {
    id: `4`,
    dataKey: `4`,
    title: `Queue`,
    accessor: `queue`,
    alignment: 'left',
    width: "10%"
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
        if (column.id === '1') {
          rowData[column.id] = generateRandomStatus();
        }
        if (column.id === '2') {
          rowData[column.id] = generateRandomWorkStation();
        }
        if (column.id === '3') {
          rowData[column.id] = generateRandomWorkCell();
        }
        if (column.id === '4') {
          rowData[column.id] = generateRandomQueue();
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
  render() {
    return (
      <div>
        <Headline title="Table using Hig-Table component"/>
        <Table
          width={800}
          height={600}
          columns={columns}
          data={generateData(columns, 14)}/>
      </div>
    )
  };
}

TableView.propTypes = {};
export default TableView

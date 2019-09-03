import React from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function DashboardTable({ className, history, columns, data, getFarmer }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });
  // Render the UI for your table
  return (
    <div className={className}>
      <Table celled {...getTableProps()} data-testid="Table-test">
        <Table.Header data-testid="Table-test-header">
          {headerGroups.map((headerGroup, index) => {
            if (index > 0) {
              // ignoring the first empty header
              return (
                <Table.Row {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, index2) => (
                    <Table.HeaderCell {...column.getHeaderProps()} key={index2}>
                      {column.render('Header')}
                    </Table.HeaderCell>
                  ))}
                </Table.Row>
              );
            } else {
              return undefined;
            }
          })}
        </Table.Header>
        <Table.Body>
          {rows.map(
            row =>
              prepareRow(row) || (
                <Table.Row
                  onClick={() => {
                    history.push({
                      pathname: `/farmers/${row.original.id}`,
                      state: { farmer: getFarmer(row.original.id)}
                    });
                  }}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell, index) => {
                    return (
                      <Table.Cell {...cell.getCellProps()} key={index}>
                        {cell.render('Cell')}
                      </Table.Cell>
                    );
                  })}
                </Table.Row>
              )
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

DashboardTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  getFarmer: PropTypes.func,
  history: PropTypes.object
};

const StyledDashboardTable = styled(DashboardTable)`
  tr {
    cursor: pointer;
  }
`;

export default StyledDashboardTable;

import React from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

export function StyledTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });
  console.log(headerGroups);


  // Render the UI for your table
  return (
    <Table celled {...getTableProps()} data-testid="Table-test">
      <Table.Header>
        {headerGroups.map((headerGroup, index) => (
          <Table.Row {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index2) => (
              <Table.HeaderCell {...column.getHeaderProps()} key={index2}>
                {column.render('Header')}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {rows.map(
          row =>
            prepareRow(row) || (
              <Table.Row {...row.getRowProps()}>
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
  );
}

StyledTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

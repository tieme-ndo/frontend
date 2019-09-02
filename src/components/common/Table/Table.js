import React from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

export default function StyledTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });
  // Render the UI for your table
  return (
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
              <Table.Row {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <Table.Cell {...cell.getCellProps()} key={index}>
                      {cell.render('Cell')}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            ),
        )}
      </Table.Body>
    </Table>
  );
}

StyledTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

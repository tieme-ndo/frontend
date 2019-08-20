import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  `;

  // Render the UI for your table
  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index2) => (
              <th {...column.getHeaderProps()} key={index2}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map(
          (row, i) =>
            prepareRow(row) || (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td {...cell.getCellProps()} key={index}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            )
        )}
      </tbody>
    </StyledTable>
  );
}

export default Table;

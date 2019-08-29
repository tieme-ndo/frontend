import React from 'react';
import PageHeader from '../../common/PageHeader/PageHeader';
import Table from '../../common/Table/Table';

const Dashboard = () => {
  const Title = <h2>Dashboard</h2>;
  const buttonText = 'Add Farmer';

  const columns = React.useMemo(
    () => [
      {
        Header: ' ',
        columns: [
          {
            Header: 'Name',
            accessor: 'name'
          },
          {
            Header: 'Sex',
            accessor: 'sex'
          },
          {
            Header: 'Phone Number',
            accessor: 'phoneNumber'
          },
          {
            Header: 'Acres',
            accessor: 'acres'
          },
          {
            Header: 'Crops',
            accessor: 'crops'
          },
          {
            Header: ' ',
            accessor: 'more'
          }
        ]
      }
    ],
    []
  );

  // To change with data coming from API
  const data = React.useMemo(() => makeData(20), []);

  return (
    <>
      <PageHeader
        leftElement={Title}
        rightElement={<button>{buttonText}</button>}
      />
      <Table columns={columns} data={data} />
    </>
  );
};

//// TO DELETE, THIS IS TO MOCK DATA

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newFarmer = () => {
  return {
    name: 'David Test',
    sex: 'M',
    phoneNumber: '+3348484884',
    address: '17 Tractor Road, Arcadia',
    acres: 5.3,
    crops: ['Wheat', 'Corn'].join(', '),
    more: <button>More</button>
  };
};

function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newFarmer(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };

  return makeDataLevel();
}

////

export default Dashboard;

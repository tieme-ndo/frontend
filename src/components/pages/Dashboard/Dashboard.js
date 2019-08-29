import React from "react";
import PageHeader from "../../common/PageHeader/PageHeader";
import { StyledTable } from "../../common/Table/Table";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"

const Dashboard = () => {
  const Title = <Header as="h1">All Farmers</Header>;
  const buttonText = "Sort By(not functional)";

  const columns = React.useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Sex",
            accessor: "sex"
          },
          {
            Header: "Phone Number",
            accessor: "phoneNumber"
          },
          {
            Header: "Acres",
            accessor: "acres"
          },
          {
            Header: "Crops",
            accessor: "crops"
          },
          {
            Header: " ",
            accessor: "more"
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
        rightElement={<Button>{buttonText}</Button>}
      />
      <StyledTable columns={columns} data={data} />
      <Button primary fixed="right"><Link to="/add-farmer/">Add Farmer</Link></Button>
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
    name: "David Test",
    sex: "M",
    phoneNumber: "+3348484884",
    address: "17 Tractor Road, Arcadia",
    acres: 5.3,
    crops: ["Wheat", "Corn"].join(", "),
    more: <Button>More</Button>
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

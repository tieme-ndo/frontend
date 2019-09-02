import React from 'react';
import PageHeader from '../../common/PageHeader/PageHeader';
import StyledTable from '../../common/Table/Table';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import withRestrictedAccess from '../../hoc/withRestrictedAccess';

const Dashboard = ({ farmers }) => {
  const [data, setData] = React.useState([]);
  const Title = <Header as="h1">All Farmers</Header>;

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
            Header: 'Community Name',
            accessor: 'communityName'
          },
          {
            Header: 'Farm Location',
            accessor: 'farmLocation'
          },
          {
            Header: 'Phone Number',
            accessor: 'phoneNumber'
          },
          {
            Header: 'Guarantor Name',
            accessor: 'guarantorName'
          },
          {
            Header: 'Guarantor Phone Number',
            accessor: 'guarantorPhoneNumber'
          }
        ]
      }
    ],
    []
  );

  React.useEffect(() => {
    setData(farmers);
  }, [farmers]);

  return (
    <>
      <PageHeader
        leftElement={Title}
        rightElement={
          <Button color="teal" fixed="right">
            <Link style={{ color: 'white' }} to="/addfarmer">
              Add Farmer
            </Link>
          </Button>
        }
      />
      <StyledTable columns={columns} data={React.useMemo(() => data, [data])} />
    </>
  );
};

export default withRestrictedAccess(Dashboard, false);

import React from 'react';
import PageHeader from '../../common/PageHeader/PageHeader';
import StyledTable from '../../common/Table/Table';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import withRestrictedAccess from '../../hoc/withRestrictedAccess';
import PropTypes from 'prop-types';

const Dashboard = ({ farmers, rawFarmers, history }) => {
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

  const getFarmer = id => {
    const farmer = rawFarmers.find(farmer => farmer._id === id);
    return farmer;
  };

  return (
    <>
      <PageHeader
        leftElement={Title}
        rightElement={
          
            <Link style={{ color: 'white' }} to="/addfarmer">
              <Button color="teal" fixed="right">
              Add Farmer
              </Button>
            </Link>
          
        }
      />
      <StyledTable
        history={history}
        columns={columns}
        getFarmer={getFarmer}
        data={React.useMemo(() => data, [data])}
      />
    </>
  );
};

Dashboard.propTypes = {
  farmers: PropTypes.array.isRequired,
  rawFarmers: PropTypes.array.isRequired,
  history: PropTypes.object
};

export default withRestrictedAccess(Dashboard, false);

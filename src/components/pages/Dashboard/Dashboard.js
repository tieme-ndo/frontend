import React from 'react';
import DashboardHeader from './DashboardHeader';
import StyledTable from '../../common/Table/Table';
import LoadingIndicator from './LoadingIndicator';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import withRestrictedAccess from '../../hoc/withRestrictedAccess';
import PropTypes from 'prop-types';

const Dashboard = ({ farmers, getFarmer, history }) => {
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
    if (farmers) {
      setData(farmers);
    } else {
      setData([]);
    }
  }, [farmers]);

  return (
    <>
      <DashboardHeader
        leftElement={Title}
        rightElement={
          <Link style={{ color: 'white' }} to="/addfarmer">
            <Button color="teal" fixed="right">
              Add Farmer
            </Button>
          </Link>
        }
      />

      {data.length ? (
        <StyledTable
          history={history}
          columns={columns}
          getFarmer={getFarmer}
          data={data}
        />
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

Dashboard.propTypes = {
  farmers: PropTypes.array,
  rawFarmers: PropTypes.array,
  history: PropTypes.object
};

export default withRestrictedAccess(Dashboard, false);

import React from 'react';
import DashboardHeader from './DashboardHeader';
import tableColumLabels from './tableColumLabels';
import DashboardTable from '../../common/Table/Table';
import LoadingIndicator from './LoadingIndicator';
import { Header, Button, Grid, Search } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import withRestrictedAccess from '../../hoc/withRestrictedAccess';
import PropTypes from 'prop-types';

// Set display filter to an empty string
// Filter names based on key press





const Dashboard = ({ farmers, history }) => {

  const [data, setData] = React.useState([]);

  const [search, setSearch] = React.useState({
    filteredFarmers: farmers && farmers.name ? farmers.name: [],
    valChanged: false
  });

  const Title = <Header as="h1">All Farmers</Header>;

  const columns = React.useMemo(tableColumLabels, []);

  React.useEffect(() => {
    if (farmers) {
      setData(farmers);
    } else {
      setData([]);
    }
  }, [search, farmers]);


  return (
    <div data-testid="dashboard-render-test">
      <DashboardHeader
        leftElement={Title}
        rightElement={
          <Link style={{ color: 'white' }} to="/addfarmer">
            <Button color="teal" fixed="right">
              Add Farmer
            </Button>
          </Link>
        }
        farmers={farmers}
      />

      <Grid style={{ marginBottom: '10px' }}>
        <Grid.Column width={6}>
          <Search
            value={search}
            onSearchChange={event => setSearch(event.target.value)}
          />
        </Grid.Column>
      </Grid>

      {data.length ? (
        <DashboardTable
          history={history}
          columns={columns}
          data={data}
        />
      ) : (
          <LoadingIndicator />
        )}
    </div>
  );
};

Dashboard.propTypes = {
  farmers: PropTypes.array,
  history: PropTypes.object
};

export default withRestrictedAccess(Dashboard, false);

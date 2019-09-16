import React from 'react';
import DashboardHeader from './DashboardHeader';
import tableColumLabels from './tableColumLabels';
import DashboardTable from '../../common/Table/Table';
import LoadingIndicator from './LoadingIndicator';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import withRestrictedAccess from '../../hoc/withRestrictedAccess';
import PropTypes from 'prop-types';
import FarmersStatistic from '../../partials/FarmersStatistic';
import axiosWithHeader from '../../../utils/axiosWithHeaders';

const Dashboard = ({ farmers, history }) => {
  const [data, setData] = React.useState([]);

  const Title = <Header as="h1">All Farmers</Header>;

  const columns = React.useMemo(tableColumLabels, []);

  React.useEffect(() => {
    if (farmers) {
      setData(farmers);
    } else {
      setData([]);
    }
  }, [farmers]);

  React.useEffect(() => {
    axiosWithHeader()
      .get('http://localhost:9000/api/v1/farmers/statistic')
      .then(res => console.log(res))
      .catch(error => console.log(error.response));
  }, []);

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
      />

      <FarmersStatistic />

      {data.length ? (
        <DashboardTable history={history} columns={columns} data={data} />
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

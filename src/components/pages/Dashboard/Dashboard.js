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

  const prepareData = farmers => {
    let cleanedData = farmers.map(farmer => {
      const farmerData = {
        name: `${farmer.personalInfo.first_name} ${farmer.personalInfo.surname}`,
        communityName: farmer.personalInfo.community_name,
        farmLocation: farmer.farmInfo.location_of_farm,
        phoneNumber: farmer.personalInfo.Phone_1,
        guarantorName: `${farmer.guarantor.grt_first_name} ${farmer.guarantor.grt_surname}`,
        guarantorPhoneNumber: farmer.guarantor.grt_phone
      };
      return farmerData;
    });
    return cleanedData;
  };

  React.useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed && farmers) {
      setData(prepareData(farmers));
    }
    return () => (isSubscribed = false);
  }, [farmers]);

  return (
    <>
      <PageHeader
        leftElement={Title}
        rightElement={
          <Button color="teal" fixed="right">
            <Link style={{color: 'white'}} to="/addfarmer">Add Farmer</Link>
          </Button>
        }
      />
      <StyledTable columns={columns} data={React.useMemo(() => data, [data])} />
    </>
  );
};

export default withRestrictedAccess(Dashboard, false);

import React from 'react';
import PageHeader from '../../common/PageHeader/PageHeader';
import StyledTable from '../../common/Table/Table';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getFarmersHandler } from '../../../utils/handlers/farmerHandlers';

const Dashboard = () => {
  const [data, setData] = React.useState([]);
  const Title = <Header as="h1">All Farmers</Header>;
  /* Commented out until feature is complete const buttonText = 'Sort By(not functional)'; */

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
    getFarmersHandler().then(farmers => {
      if (isSubscribed) {
        setData(prepareData(farmers));
      }
    });
    return () => (isSubscribed = false);
  }, []);

  return (
    <>
      <PageHeader
        leftElement={Title}
        /* Commented out until feature is complete rightElement={<Button>{buttonText}</Button>} */
      />
      <StyledTable columns={columns} data={React.useMemo(() => data, [data])} />
      <Button primary fixed="right">
        <Link to="/addfarmer">Add Farmer</Link>
      </Button>
    </>
  );
};

export default Dashboard;

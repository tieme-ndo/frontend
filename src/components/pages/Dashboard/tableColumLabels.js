const tableColumLabels = () => [
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
];

export default tableColumLabels;

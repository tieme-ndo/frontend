import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default function PersonalTab(props) {
  const data = props.farmer.personalInfo;
  console.log(data.minor_source_of_income);

  return (
    <Grid columns={2}>
      <Grid.Column>
        <Header.Subheader>Title</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.title}
        </Header>
        <Header.Subheader>Gender</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.gender}
        </Header>
        <Header.Subheader>Phone 1</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.Phone_1}
        </Header>
        <Header.Subheader>Address</Header.Subheader>
        <Header
          size="tiny"
          style={{ marginTop: '0.1rem', marginBottom: '0rem' }}
        >
          {data.house_name + ' ' + data.house_number}
        </Header>
        <Header size="tiny" style={{ margin: '0rem' }}>
          {data.region + ', ' + data.district + ', ' + data.community_name}
        </Header>
        <Header size="tiny" style={{ marginTop: '0rem' }}>
          {' Landmark: ' + data.nearest_landmark}
        </Header>
        <Header.Subheader>Birth Data</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.date_of_birth + ', ' + data.place_of_birth}
        </Header>
        <Header.Subheader>Occupation</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.occupation}
        </Header>
        <Header.Subheader>Major Source Of Income</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.major_source_of_income_name +
            ': ' +
            data.major_source_of_income_amount +
            ' GHC'}
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header.Subheader>Name</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.first_name + ' ' + data.middle_name + ' ' + data.surname}
        </Header>
        <Header.Subheader>Marital Status</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.marital_status}
        </Header>
        <Header.Subheader>Phone 2</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.Phone_2}
        </Header>
        <Header.Subheader>Identification</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem', marginBottom: '3.5rem' }}>
          {data.id_type + ': ' + data.id_number}
        </Header>
        <Header.Subheader>Education</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.education_level}
        </Header>
        <Header.Subheader>Expected Income Per Month</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.expected_income_per_month}
        </Header>
        <Header.Subheader>Minor Source Of Income</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.minor_source_of_income_name +
            ': ' +
            data.minor_source_of_income_amount +
            ' GHC'}
        </Header>
      </Grid.Column>
    </Grid>
  );
}

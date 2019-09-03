import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default function DisplayTabTemplate(props) { //Props will contain the farmer object

  const data = props.farmer.familyInfo;
  console.log(data);

  return (
    <Grid columns={2}>
      <Grid.Column >
        <Header.Subheader>Grey Title</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          Farmer Content
        </Header>
        <Header.Subheader> Grey Title</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          Farmer Content
        </Header>
        <Header.Subheader> Grey Title</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          Farmer Content
        </Header>
      </Grid.Column>
      <Grid.Column >
        <Header.Subheader> Grey Title</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          Farmer Contnet
        </Header>
        <Header.Subheader> Grey Title</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          Farmer Content
        </Header>
        <Header.Subheader> Grey Title</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          Farmer Content
        </Header>
      </Grid.Column>
    </Grid>
  );
}

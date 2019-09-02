/** @format */

import React, {useState, useEffect} from 'react'
import {Container, Grid, Segement, Button, Menu} from 'semantic-ui-react'
import {withRestrictedAccess} from '../../hoc/withRestrictedAccess.js'

const DisplayFarmer = props => {
  //const [farmer, setFarmer] = useState(props.farmer)

  return (
    <Container>
      <Grid>
        <Segement></Segement>
        <Button color="grey">Edit Farmer</Button>
        <Button color="red">Remove Farmer</Button>
      </Grid>
      <Grid>
        <Segement>
          <Menu>
            <Menu.Item>Personal</Menu.Item>
            <Menu.Item>Farm</Menu.Item>
            <Menu.Item>Guarantor</Menu.Item>
            <Menu.Item>Declaration</Menu.Item>
          </Menu>
        </Segement>
        <Segement></Segement>
        <Segement></Segement>
      </Grid>
    </Container>
  )
}

export default withRestrictedAccess(DisplayFarmer)

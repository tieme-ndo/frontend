import React, { useState } from 'react';
import { Container, Button, Grid, Header, Segment, Form, Image } from 'semantic-ui-react';
import logo from '../../../assets/images/tiemendo_logo.jpg';

const Login = (props) => {
	const [ state, setState ] = useState({
		username: '',
		password: '',
		errors: {},
		loading: false
	});

	return (
		<Container>
			<Grid textAlign="center" style={{ height: '85vh' }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 350 }} mobile={16} tablet={16}>
					<Image src={logo} centered alt="tiemendo logo" size="small" />
					<Header as="h2" icon textAlign="center" style={{ marginBottom: '30px' }}>
						log in to your account
					</Header>

					<Form size="large">
						<Segment width={5}>
							<Form.Input fluid icon="user" iconPosition="left" placeholder="Username" />
							<Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" />

							<Button color="teal" fluid size="large">
								Login
							</Button>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
		</Container>
	);
};

export default Login;

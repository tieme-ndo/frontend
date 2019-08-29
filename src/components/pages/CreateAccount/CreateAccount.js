// import React from 'react';

// const CreateAccount = () => {
// 	const usernameRef = React.useRef();
// 	const passwordRef = React.useRef();
// 	const isAdminRef = React.useRef();

// 	const [ errorMessage, setErrorMessage ] = React.useState(undefined);
// 	const [ message, setMessage ] = React.useState(undefined);
// 	const [ loading, setLoading ] = React.useState(false);

// 	const onCreate = async (event) => {
// 		event.preventDefault();
// 		setMessage('');
// 		setErrorMessage('');
// 		setLoading(true);
// 		try {
// 			const username = usernameRef.current.value;
// 			const password = passwordRef.current.value;
// 			if (username && password) {
// 				const response = await registrationHandler({
// 					username: usernameRef.current.value,
// 					password: passwordRef.current.value,
// 					isAdmin: isAdminRef.current.checked,
// 					token: getToken()
// 				});
// 				setMessage(response);
// 			} else {
// 				setErrorMessage('Please, provide a valid username and password');
// 			}
// 		} catch (error) {
// 			setErrorMessage(error);
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<div>
// 			<h2>Create New Account</h2>
// 			{errorMessage && <div className="error-message">{errorMessage}</div>}
// 			{message && <div className="message">{message}</div>}
// 			<form>
// 				<div>
// 					<label htmlFor="username">Username</label>
// 					<input ref={usernameRef} id="username" name="username" type="text" data-testid="username-field" />
// 				</div>
// 				<div>
// 					<label htmlFor="password">Password</label>
// 					<input
// 						ref={passwordRef}
// 						id="password"
// 						name="password"
// 						type="password"
// 						data-testid="password-field"
// 					/>
// 				</div>
// 				<div>
// 					<label htmlFor="is-admin">Is Admin?</label>
// 					<input
// 						ref={isAdminRef}
// 						type="checkbox"
// 						id="is-admin"
// 						name="is-admin"
// 						data-testid="admin-checkbox"
// 					/>
// 				</div>
// 				{loading ? (
// 					<button type="submit" disabled>
// 						Loading...
// 					</button>
// 				) : (
// 					<button type="submit">Create Account</button>
// 				)}
// 			</form>
// 		</div>
// 	);
// };

// export default CreateAccount;

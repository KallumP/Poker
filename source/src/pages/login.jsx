import { errorStyle, h1Style, largeMargin, smallMargin } from '../utils';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase';

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { Box, Button, TextField, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
	const navitage = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const [error, setError] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleEmailChange(e) {
		setEmail(e);
	}
	function handlePassChange(e) {
		setPassword(e);
	}

	function handleLogin(e) {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				dispatch({ type: 'LOGIN', payload: user });
				navitage('/');
			})
			.catch((error) => {
				console.log(error);
				setError(true);
			});
	}

	function renderPage() {
		let errorText = '';
		if (error) errorText = 'There was an error login in';

		return (
			<Box
				sx={{
					flex: '7',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'row',
				}}>
				<Box
					sx={{
						width: '10%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						marginTop: '30px',
						height: '98vh',
					}}>
					<Typography
						variant='h1'
						sx={h1Style}>
						Login
					</Typography>

					<form onSubmit={handleLogin}>
						{renderEmailInput()}
						{renderPassInput()}
						{renderLoginButton()}
					</form>

					<Typography
						variant='h1'
						sx={errorStyle}>
						{errorText}
					</Typography>
				</Box>
			</Box>
		);
	}

	function renderEmailInput() {
		return (
			<TextField
				label='Email'
				variant='standard'
				type='email'
				sx={{
					marginBottom: smallMargin,
					width: '100%',
				}}
				onChange={(e) => handleEmailChange(e.target.value)}
			/>
		);
	}

	function renderPassInput() {
		return (
			<TextField
				label='Password'
				variant='standard'
				type='password'
				sx={{
					marginBottom: smallMargin,
					width: '100%',
				}}
				onChange={(e) => handlePassChange(e.target.value)}
			/>
		);
	}

	function renderLoginButton() {
		return (
			<Button
				type='submit'
				variant='contained'
				color='primary'
				size='large'
				disableElevation
				sx={{
					marginTop: largeMargin,
					width: '100%',
				}}>
				Login
			</Button>
		);
	}

	return (
		<Stack
			spacing={2}
			direction='row'
			justifyContent={'space-between'}>
			{renderPage()}
		</Stack>
	);
};

export default Login;

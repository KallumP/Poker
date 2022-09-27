import Header from '../components/header';
import { h1Style } from '../utils';
import Card from '../components/card';

import React from 'react';
import { Box, Stack, Item, Typography } from '@mui/material';

const Room = () => {
	function renderPage() {
		return (
			<Box
				sx={{
					width: '100%',
					// border: 'solid 1px black',
				}}>
				<Typography
					variant='h1'
					sx={h1Style}>
					Room
				</Typography>

				{renderCards()}
			</Box>
		);
	}

	function renderCards() {
		return (
			<Stack
				spacing={5}
				direction='row'
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
				}}>
				<Card
					value={'4'}
					suit={1}
				/>

				<Card
					value={'K'}
					suit={3}
				/>
			</Stack>
		);
	}

	return (
		<Stack direction='column'>
			<Header />
			{renderPage()}
		</Stack>
	);
};

export default Room;

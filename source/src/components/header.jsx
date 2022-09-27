import { h1Logo } from '../utils';
import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
	return (
		<Box
			sx={{
				width: '100%',
				border: 'solid 1px black',
			}}>
			<Typography
				variant='h1'
				sx={h1Logo}>
				Header
			</Typography>
		</Box>
	);
};

export default Header;

import { Box } from '@mui/material';
import React from 'react';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DiamondIcon from '@mui/icons-material/Diamond';

const Card = ({ suit, value }) => {

	let setIcon = () => {
		if (suit == 0) {
			return <FilterVintageIcon />;
		} else if (suit == 1) {
			return <HeartBrokenIcon />;
		} else if (suit == 2) {
			return <BeachAccessIcon />;
		} else if (suit == 3) {
			return <DiamondIcon />;
		} else return <HelpOutlineIcon />;
	};

	return (
		<Box
			sx={{
				display: 'flex',
				width: '15%',
				height: '45vh',
				padding: '20px 0px 0px 20px',
				boxShadow: '2px 4px 10px 1px lightGrey',
				borderRadius: '10px',
			}}>
			
            {value}
			{setIcon()}
		</Box>
	);
};

export default Card;

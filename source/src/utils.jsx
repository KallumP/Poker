import { v4 as uuidv4 } from 'uuid';

//constants
export const largeMargin = 4;
export const smallMargin = 2;
export const inputWidth = '95%';
export const dropdownWidth = '20%';

//functions
export const UUIDGen = () => {
	return uuidv4();
};



//styles
export const errorStyle = {
	fontWeight: '400',
	fontSize: '1rem',
	color: 'red',
};

export const h1Logo = {
	fontSize: '1.85rem',
	fontWeight: 'bold',
	paddingBottom: '15px',
	color: 'red',
}

export const h1Style = {
	fontSize: '1.85rem',
	fontWeight: 'bold',
	paddingBottom: '15px',
};

export const h2Style = {
	fontSize: '1.35rem',
	fontWeight: 'bold',
	paddingBottom: '15px',
};

export const pStyle = {
	fontWeight: '400',
	fontSize: '1rem',
};
export const pStyleBold = {
	fontWeight: 'bold',
	fontSize: '1rem',
};

export const pStyleSubheader = {
	fontWeight: '400',
	fontSize: '1rem',
	color: 'gray',
	paddingLeft: '10px',
	paddingBottom: '15px',
};

import { v4 as uuidv4 } from 'uuid';
import Card from './components/card';

//constants
export const largeMargin = 4;
export const smallMargin = 2;
export const inputWidth = '95%';
export const dropdownWidth = '20%';

//functions
export const UUIDGen = () => {
	return uuidv4();
};

export const GenerateCardDeck = () => {
	let deck = [];

	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 13; j++) {
			let val;
			if (j == 10) val = 'J';
			else if (j == 11) val = 'Q';
			else if (j == 12) val = 'K';
			else val = j;

			deck.push(
				<Card
					value={val}
					suit={i}
				/>
			);
		}
	}

	return deck;
};

export const ShuffleDeck = (deck) => {
	deck.sort(() => Math.random() - 0.5);
	return deck;
}

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
};

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

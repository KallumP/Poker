import Header from '../components/header';
import { h1Style, ShuffleDeck, GenerateCardDeck } from '../utils';

import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

const defaultPlayer = { money: 500, cards: [] }
const Room = () => {

	const [player, setPlayer] = useState([defaultPlayer]);
	let shuffledDeck;

	function setupRoom() {
		generateCards();
		setUpPlayer();
	}

	function generateCards() {

		shuffledDeck = ShuffleDeck(GenerateCardDeck());
		// console.log("Shuffled Cards: ", shuffledDeck);
	}


	function setUpPlayer() {
		let tempPlayer = [...player];

		let tempCardsList = [...tempPlayer[0].cards];
		tempCardsList.push(getNextCard());
		tempCardsList.push(getNextCard());
		tempPlayer[0].cards = [...tempCardsList];

		setPlayer(tempPlayer);

		console.log("Player", player[0]);
	}

	useEffect(() => {
		setupRoom();
	}, []);


	function getNextCard() {

		let card = shuffledDeck[0];
		removeNextCard();

		let cardwKey = { key: card.value + card.suit, card: card };
		console.log("Shuffled cards after shift: ", shuffledDeck);

		return cardwKey;
	}
	function removeNextCard() {

		shuffledDeck.splice(0, 1);

	}

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

				{renderSelf()}
			</Box>
		);
	}

	function renderSelf() {

		let jsx = [];
		if (player[0].cards.length > 0)
			for (let i = 0; i < player[0].cards.length; i++) {
				jsx.push(player[0].cards[i].card)
			}
		else
			jsx.push("No cards");

		return (

			<Stack
				spacing={5}
				direction='row'
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
				}}>

				{jsx}
			</Stack>

		)
	}
	return (
		<Stack direction='column'>
			<Header />
			{renderPage()}
		</Stack>
	);
};

export default Room;
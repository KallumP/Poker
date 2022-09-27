import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: 'poker-74a77.firebaseapp.com',
	projectId: 'poker-74a77',
	storageBucket: 'poker-74a77.appspot.com',
	messagingSenderId: '738934715312',
	appId: '1:738934715312:web:e2007315ce4d2915c4dc75',
	measurementId: 'G-PT7PDM9BK1',
};

const app = initializeApp(firebaseConfig);

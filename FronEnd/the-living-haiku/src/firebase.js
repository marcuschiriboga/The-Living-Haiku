import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAbciB5iYgfj4LXWJXoQUHEQL8gW6oM1ps',
	authDomain: 'the-living-haiku.firebaseapp.com',
	databaseURL: 'https://the-living-haiku.firebaseio.com',
	projectId: 'the-living-haiku',
	storageBucket: 'the-living-haiku.appspot.com',
	messagingSenderId: '1013068810879',
	appId: '1:1013068810879:web:8db3117709a5bff8c10d4a',
	measurementId: 'G-S7C7265WXH'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.analytics();

export const auth = firebase.auth();
export default firebase;

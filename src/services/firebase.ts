import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_AUTH_DOMAIN,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {

  apiKey: "AIzaSyBEmux_sndWe5gMFpLKIk7om4drhscNljw",

  authDomain: "letmeask-2ca07.firebaseapp.com",

  databaseURL: "https://letmeask-2ca07-default-rtdb.firebaseio.com",

  projectId: "letmeask-2ca07",

  storageBucket: "letmeask-2ca07.appspot.com",

  messagingSenderId: "862740155528",

  appId: "1:862740155528:web:03f95a081ac5984b57633d"

};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }
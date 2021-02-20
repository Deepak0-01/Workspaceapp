import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB8BL_RHgeu2CP5seVck49tsyvU_APZ29Q",
    authDomain: "workspaceapp-2bed3.firebaseapp.com",
    projectId: "workspaceapp-2bed3",
    storageBucket: "workspaceapp-2bed3.appspot.com",
    messagingSenderId: "537950817172",
    appId: "1:537950817172:web:0ac77707749ad1cd4c1d81",
    measurementId: "G-7QST3TCM0W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
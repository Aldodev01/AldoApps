import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3WT9FpIY2AceHwc1Ed4cSvg7x3JXUwPY",
    authDomain: "aldo-apps.firebaseapp.com",
    projectId: "aldo-apps",
    databaseURL: "https://aldo-apps-default-rtdb.firebaseio.com/",
    storageBucket: "aldo-apps.appspot.com",
    messagingSenderId: "231762888249",
    appId: "1:231762888249:web:8baac1d44ccacd96162fe8",
    measurementId: "G-TGVSWT6CKQ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export { auth, provider, storage, }
  export default db
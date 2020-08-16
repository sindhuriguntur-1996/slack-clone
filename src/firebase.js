import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBiQdtQ1uHOVlp5CFNFA6f4t2wY6SoqEOU",
    authDomain: "slack-clone-65181.firebaseapp.com",
    databaseURL: "https://slack-clone-65181.firebaseio.com",
    projectId: "slack-clone-65181",
    storageBucket: "slack-clone-65181.appspot.com",
    messagingSenderId: "200550504794",
    appId: "1:200550504794:web:a9ac2b4ac208d3534afb63",
    measurementId: "G-TE8QL3LYRX"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider;

  export {auth,provider,db as default};

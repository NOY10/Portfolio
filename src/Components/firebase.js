import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC-O_MYvArq9rAwaztp3KhDQ5hy30pVc70",
  authDomain: "lobzangyonten-147d9.firebaseapp.com",
  projectId: "lobzangyonten-147d9",
  storageBucket: "lobzangyonten-147d9.appspot.com",
  messagingSenderId: "159765083731",
  appId: "1:159765083731:web:63070271f44fda64e9b8a6"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export { db };
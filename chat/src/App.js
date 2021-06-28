import './App.css';
import firebase  from 'firebase/app';
import 'firebase/database';

function App() {


  const firebaseConfig = {
    apiKey: "AIzaSyCu3CQAbFa26zynzviCn_ypxcTciKPGCiE",
    authDomain: "chat-womanup.firebaseapp.com",
    databaseURL: "https://chat-womanup-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-womanup",
    storageBucket: "chat-womanup.appspot.com",
    messagingSenderId: "143420754973",
    appId: "1:143420754973:web:0a58413071e07691208af4"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
  

  return (
    <div className="App">
      чат
    </div>
  );
}

export default App;

import './scss/style.scss';
import firebase  from 'firebase/app';
import 'firebase/database';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import {useDb} from './components/Hook/useDb'
import Context from './components/Context/Context'

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
  
 
  // создаем БД
  const dataBase = firebase.database()

  const db = useDb(dataBase)

  const date = new Date()

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  console.log(date.toLocaleString("ru", options));



  // dataBase.ref('message/').push().set({
  //   name: 'Иван',
  //   date: date.toLocaleString("ru", options),
  //   message: 'some text',
  // })

  


  return (
    <Context.Provider value={{db, dataBase}}>
    <div className="App">
      <Header />
      <Main />
    </div>
    </Context.Provider>

  );
}

export default App;

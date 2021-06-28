import './scss/style.scss';
import firebase  from 'firebase/app';
import 'firebase/database';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Context from './components/Context/Context'
// import {useDb} from './components/Hook/useDb'
import {useDataBase} from './components/Hook/useDataBase'

function App() {

  /**
   * Покдлючаем объект с конфигурацией FireBase
   */
  const firebaseConfig = {
    apiKey: "AIzaSyCu3CQAbFa26zynzviCn_ypxcTciKPGCiE",
    authDomain: "chat-womanup.firebaseapp.com",
    databaseURL: "https://chat-womanup-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-womanup",
    storageBucket: "chat-womanup.appspot.com",
    messagingSenderId: "143420754973",
    appId: "1:143420754973:web:0a58413071e07691208af4"
  };

  /**
   * Инициализируем приложение FireBase
   */
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
 
  /**
   * получаем экземпляр firebase.database.Reference
   */
  const dataBase = firebase.database()
  /**
   * Передаем кастомному хуку экземпляр firebase.database.Reference
   */
  const db = useDataBase(dataBase)

  return (
    /**
     * Приложение оборачиваем в Context для того что бы не передавать данные через пропсы 
     */
    <Context.Provider value={{db, dataBase}}>
    <div className="App">
      <Header />
      <Main />
    </div>
    </Context.Provider>
  );
}

export default App;

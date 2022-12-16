import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Account from './components/Account';
import Transcation from './components/Transcation';
import Addtranscation from './components/Addtranscation';
import { Provider } from 'react-redux';
import mainStore from './store/store';

function App() {
  return (
    <div className="App">
      
        <Header />
        <div className='container'>
          <Balance />
          <Account />
          <Transcation />
          <Addtranscation />
        </div>

    </div>
  );
}

export default App;

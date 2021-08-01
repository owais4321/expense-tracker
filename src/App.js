import './App.css';
import Header from './Components/Header/Header'
import Balance from './Components/Balance/Balance';
import AccountSummary from './Components/AccountSummary/AccountSummary';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import Addnewtransaction from './Components/Addnewtransaction/Addnewtransaction';
import {GlobalContextProvider} from './Context/Globalstate';
function App() {
  return (
    <GlobalContextProvider>
    <div className="App">
      <Header/>
      <Balance/>
      <AccountSummary/>
      <TransactionHistory/>
      <Addnewtransaction/>  
    </div>
    </GlobalContextProvider>
  );
}

export default App;

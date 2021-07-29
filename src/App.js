import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Balance from './Components/Balance/Balance';
import AccountSummary from './Components/AccountSummary/AccountSummary';
import Transaction from './Components/Transaction/Transaction';
import Transactions from './Components/Transactions/Transactions';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Header/>
      <Balance/>
      <AccountSummary/>
      <TransactionHistory/>
    </div>
  );
}

export default App;

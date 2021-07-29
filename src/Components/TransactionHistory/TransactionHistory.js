import './TransactionHistory.css'
import Transactions from "../Transactions/Transactions";

const TransactionHistory = ()=>{
    return(
        <div className='transaction-history'>
            <h3>Transaction History</h3>
            <Transactions/>
        </div>
    )
}
export default TransactionHistory;
import './Transactions.css'
import Transaction from '../Transaction/Transaction';
const Transactions=()=>{
    let arr=[123,1232,-1231,-345,454,-3456]
    let plus=arr.filter(elm=>elm>0)
    let minus=arr.filter(elm=>elm<0)
    return(
        <div className='transactions'>
            {plus.map(elm=><Transaction className='transaction-container minus'/>)}
        </div>
    )
}
export default Transactions;
import './Transactions.css'
import {GlobalContext} from '../../Context/Globalstate'
import {useContext} from 'react'



import Transaction from '../Transaction/Transaction';
const Transactions=()=>{
    let {transactions} = useContext(GlobalContext);
    let plus=transactions.filter(elm=>elm.amount>0)
    console.log('transactions')
    console.log(transactions);
    console.log('plus')
    console.log(plus);
    let minus=transactions.filter(elm=>elm.amount<0)
    console.log('minus')
    console.log(minus)
    return(
        <div className='transactions'>
            {plus.map(elm=><Transaction className='transaction-container plus' desc={elm.description} amn={elm.amount}/>)}
            {minus.map(elm=><Transaction className='transaction-container minus'  desc={elm.description} amn={elm.amount}/>)}
        </div>
    )
}
export default Transactions;
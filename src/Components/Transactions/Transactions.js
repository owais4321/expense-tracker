import './Transactions.css'
import {GlobalContext} from '../../Context/Globalstate'
import {useContext} from 'react'
import Transaction from '../Transaction/Transaction';
const Transactions=()=>{
    let {transactions} = useContext(GlobalContext);
    let plus=transactions.filter(elm=>elm.amount>0)
    let minus=transactions.filter(elm=>elm.amount<0)
    return(
        <div className='transactions'>
            {plus.map(elm=><Transaction key={elm.id} id={elm.id} className='transaction-container plus' desc={elm.description} amn={elm.amount}/>)}
            {minus.map(elm=><Transaction key={elm.id} id={elm.id} className='transaction-container minus'  desc={elm.description} amn={elm.amount*(-1)}/>)}
        </div>
    )
}
export default Transactions;
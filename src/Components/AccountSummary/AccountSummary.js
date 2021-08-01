import './AccountSummary.css'
import {useContext} from 'react';
import {GlobalContext} from '../../Context/Globalstate';
const AccountSummary = () => {
const sum=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+parseInt(arr[i].amount)
    }
    return sum;
}
let {transactions}=useContext(GlobalContext);
let plus=transactions.filter(t=>t.amount>0);
let minus=transactions.filter(t=>t.amount<0);
let inc=sum(plus);
let exp=sum(minus)*(1-2);
console.log('income',inc)
    return (
        <div className='exp-inc-box'>
            <div className='money inc'>
                <h4>INCOME</h4>
                <p>{inc}</p>
            </div>
            <div className='money exp'>
                <h4>EXPENSE</h4>
                <p>{exp}</p>
            </div>
        </div>
    )
}
export default AccountSummary
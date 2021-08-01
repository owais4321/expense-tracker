import {useContext} from 'react';
import './Balance.css';
import {GlobalContext} from '../../Context/Globalstate';
const Balance=()=>{
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
    let balance=sum(plus)+sum(minus)
    return(
    <div className='balance-container'>
        <h3>CURRENT BALANCE</h3>
        <h1>${balance}</h1>
    </div>
    );
}

export default Balance;
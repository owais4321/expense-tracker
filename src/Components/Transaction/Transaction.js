import './Transaction.css'
import {useContext} from 'react';
import {GlobalContext} from '../../Context/Globalstate';
const Transaction = (props) => {
    const {deleteT,transactions} =useContext(GlobalContext);
    const clickHandler=(e)=>{
    let id=e.target.getAttribute('id');
    console.log(id,transactions);
    deleteT(id);
    // console.log(transactions)
    }
    return (    
        <div className={props.className}>
            <div className='desc'>
            {props.desc}
            </div>
            <div className='amn'>
            {props.amn}
            </div>
            <button id={props.id} className='delbtn' onClick={(e)=>clickHandler(e)}>X</button>
        </div>
    )
}

export default Transaction;
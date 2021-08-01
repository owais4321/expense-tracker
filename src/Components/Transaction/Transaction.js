import './Transaction.css'
import {useContext} from 'react';
import {GlobalContext} from '../../Context/Globalstate';
const Transaction = (props) => {
    const {deleteT} =useContext(GlobalContext);
    const clickHandler=(e)=>{
    let id=e.target.getAttribute('id');
    deleteT(id);
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
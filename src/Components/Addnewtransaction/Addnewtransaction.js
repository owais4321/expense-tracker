import './Addnewtransaction.css'
import Label from '../Label/Label';
import Input from '../Input/Input';
import Addtransactionbutton from '../Addtransactionbutton/Addtransactionbutton';
import { GlobalContext } from '../../Context/Globalstate'
import { useState, useContext } from 'react';

const Addnewtransaction = () => {
    let [amount, setamount] = useState('')
    let [description, setdescription] = useState('')
    let { addT } = useContext(GlobalContext)
    console.log(amount)
    console.log(description)
    return (
        <div className='addnewtransaction'>
            <h2>Add new Transaction</h2>
            <Label txt='Description' />
            <Input type='text'
                onChange={(e) => { setdescription(e.target.value) }}
                value={description}
                required
                placeholder='Add Description of Transaction'
            />
            <Label txt='Amount' />
            <Input type='number'                
                onChange={(e) => { setamount(e.target.value) }}
                value={amount}
                required
                placeholder='Add amount of Transaction'/>
            <Addtransactionbutton onClick={(e)=>{
                addT({
                    id:new Date().getTime(),
                    amount:amount,
                    description:description
                })
            }}/>
        </div>
    )

}

export default Addnewtransaction;
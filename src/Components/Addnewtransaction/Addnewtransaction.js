import './Addnewtransaction.css'
import Label from '../Label/Label';
import Input from '../Input/Input';
import Addtransactionbutton from '../Addtransactionbutton/Addtransactionbutton';
const Addnewtransaction=()=>{
return(
<div className='addnewtransaction'>
    <h2>Add new Transaction</h2>
    <Label txt='Description'/>
    <Input type='text'/>
    <Label txt='Amount'/>
    <Input type='number'/>
    <Addtransactionbutton/>
</div>
)

}

export default Addnewtransaction;